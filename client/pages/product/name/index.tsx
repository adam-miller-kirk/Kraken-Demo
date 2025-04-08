import type { Product } from "../../../types/products";
type ProductNameProps = Pick<Product, "name" | "power" | "quantity">;

function ProductName({ name, power, quantity }: ProductNameProps) {
  return (
    <div className="productName">
      <h2>{name}</h2>
      <p>{`${power} // Packet of ${quantity}`}</p>
    </div>
  );
}

export default ProductName;
