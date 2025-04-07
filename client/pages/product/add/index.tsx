function AddProduct({ price }: { price: number }) {
  return (
    <div className="addProduct">
      <div className="details">
        <h3 className="price">{`£${(price / 100).toFixed(2)}`}</h3>
        <div className="addControls">
          <p className="title">Qty</p>
          <div className="controls">
            <button>-</button>
            <h3>1</h3>
            <button>+</button>
          </div>
        </div>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default AddProduct;
