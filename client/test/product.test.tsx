import { render, fireEvent } from "@testing-library/react";
import Product from "../pages/product";
import useProduct from "../hooks/useProduct";

const mockProduct = {
  product: {
    id: 1,
    name: "Energy saving light bulb",
    power: "25W",
    description: "Some description",
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
  loading: false,
  error: null,
};

jest.mock("../hooks/useProduct", () => ({
  __esModule: true,
  default: jest.fn(() => mockProduct),
}));

// Reset default before each test
beforeEach(() => {
  (useProduct as jest.Mock).mockImplementation(() => mockProduct);
});

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = render(<Product />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = render(<Product />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});

test("should be able to add items multiple times to the basket", async () => {
  const { getByText, getByTitle } = render(<Product />);

  const increaseQuantity = getByText("+");
  const decreaseQuantity = getByText("-");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");

  // decrease quantity and add 3 more to cart
  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("3");
  fireEvent.click(addToBasketElement);

  // cart should add the new 3 to the original 4
  expect(basketItems).toHaveTextContent("7");
});

test("should disable the '-' button at quantity 1 and enable at 2, then disable again at 1", () => {
  const { getByText } = render(<Product />);

  const increaseQuantity = getByText("+");
  const decreaseQuantity = getByText("-");

  // At start, quantity is 1 — button should be disabled
  expect(decreaseQuantity).toBeDisabled();

  // Increase to 2 — button should now be enabled
  fireEvent.click(increaseQuantity);
  expect(decreaseQuantity).not.toBeDisabled();

  // Decrease back to 1 — button should be disabled again
  fireEvent.click(decreaseQuantity);
  expect(decreaseQuantity).toBeDisabled();
});

// product hook fallback tests
test("should show loading screen when loading is true", () => {
  (useProduct as jest.Mock).mockImplementation(() => ({
    product: null,
    loading: true,
    error: null,
  }));

  const { getByText } = render(<Product />);
  expect(getByText("...Loading")).toBeInTheDocument();
});

test("should show error screen when error is present", () => {
  (useProduct as jest.Mock).mockImplementation(() => ({
    product: null,
    loading: false,
    error: new Error("Failed to fetch"),
  }));

  const { getByText } = render(<Product />);
  expect(getByText("Error: Failed to fetch")).toBeInTheDocument();
});

test("should show fallback when product is null", () => {
  (useProduct as jest.Mock).mockImplementation(() => ({
    product: null,
    loading: false,
    error: null,
  }));

  const { getByText } = render(<Product />);
  expect(getByText("Product not found.")).toBeInTheDocument();
});
