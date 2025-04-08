import { render } from "@testing-library/react";
import Product from "../pages/product";

// Clean slate — don't mock useProduct
beforeEach(() => {
  global.fetch = jest.fn();
});

test("should show error screen when product data is invalid", async () => {
  const badData = [
    {
      id: "not-a-number", // should be number
      name: "Broken bulb",
      power: "25W",
      description: "Bad data",
      price: 1299,
      quantity: 4,
      brand: "Philips",
      weight: 77,
      height: 12.6,
      width: 6.2,
      length: 6.2,
      model_code: "E27 ES",
      colour: "Cool daylight",
      img_url: "https://i.ibb.co/2nzwxnQ/bulb.png",
    },
  ];

  (global.fetch as jest.Mock).mockResolvedValueOnce({
    json: () => Promise.resolve(badData),
  });

  const { findByText } = render(<Product />);
  const errorEl = await findByText((content) => content.startsWith("Error:"));
  expect(errorEl).toBeInTheDocument();
});
