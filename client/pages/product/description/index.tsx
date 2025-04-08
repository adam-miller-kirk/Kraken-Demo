import type { Product } from "../../../types/products";
type ProductDescription = Pick<Product, "description">;

function Description({ description }: ProductDescription) {
  return (
    <div className="description">
      <h3>Description</h3>
      <p>{description}</p>
    </div>
  );
}

export default Description;
