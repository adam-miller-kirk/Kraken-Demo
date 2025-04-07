"use client";
import Image from "next/image";
import useProduct from "../../hooks/useProduct";
import Loading from "../../components/loading";
import Error from "../../components/error";

export default function Product() {
  const { product, loading, error } = useProduct({ productId: 1 });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product">
      <div className="title">
        <Image
          className="logo"
          src="/octopus-logo.svg"
          alt="Octopus Energy Logo"
          width={100}
          height={50}
        />
        <Image src="/basket.svg" alt="Basket Icon" width={20} height={20} />
      </div>
      <Image
        className="image"
        src="/philips-plumen.jpg"
        alt="Philips Plumen Image"
        width={300}
        height={300}
      />
    </div>
  );
}
