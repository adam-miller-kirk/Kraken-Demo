import useProduct from "../../hooks/useProduct";

export default function Product() {
  const { product, loading, error } = useProduct({ productId: 1 });
  console.log(product, loading, error);
  return <div>Product page</div>;
}
