import { useState } from "react";

function AddProduct({ price }: { price: number }) {
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
            <h3>{quantity}</h3>
            <button onClick={() => changeQuantity(1)}>+</button>
          </div>
        </div>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default AddProduct;
