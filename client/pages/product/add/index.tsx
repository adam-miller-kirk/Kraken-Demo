import { useState } from "react";
import type { Product } from "../../../types/products";

type ProductPrice = Pick<Product, "price">;
type AddProductProps = ProductPrice & {
  onAddToCart: (quantity: number) => void;
};

function AddProduct({ price, onAddToCart }: AddProductProps) {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="addProduct">
      <div className="details">
        <h3 className="price">{`£${(price / 100).toFixed(2)}`}</h3>
        <div className="addControls">
          <p className="title">Qty</p>
          <div className="controls">
            <button
              disabled={quantity === 1}
              onClick={() => changeQuantity(-1)}
            >
              -
            </button>
            <h3 title="Current quantity">{quantity}</h3>
            <button onClick={() => changeQuantity(1)}>+</button>
          </div>
        </div>
      </div>
      <button onClick={() => onAddToCart(quantity)}>Add to cart</button>
    </div>
  );
}

export default AddProduct;
