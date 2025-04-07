"use client";
import Image from "next/image";
import useProduct from "../../hooks/useProduct";
import Loading from "../../components/loading";
import Error from "../../components/error";
import Header from "./title";
import AddProduct from "./add";
import Description from "./description";
import Disclaimer from "./disclaimer";
import Specifications from "./specifications";
import ProductName from "./name";

export default function Product() {
  const { product, loading, error } = useProduct({ productId: 1 });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!product) return <p>Product not found.</p>;

  const { brand, weight, height, width, length, model_code, colour } = product;

  const specifications = {
    brand,
    weight,
    dimensions: `${height} x ${width} x ${length}`,
    model_code,
    colour,
  };

  return (
    <div className="product">
      <Header />
      <Image
        className="image"
        src="/philips-plumen.jpg"
        alt="Philips Plumen Image"
        width={300}
        height={300}
      />
      <ProductName
        name={product.name}
        power={product.power}
        quantity={product.quantity}
      />
      <AddProduct price={product.price} />
      <Description description={product.description} />
      <Specifications specifications={specifications} />
      <Disclaimer />
    </div>
  );
}
