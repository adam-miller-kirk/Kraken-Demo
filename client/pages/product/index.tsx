"use client";

import { useState } from "react";
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
  const [basket, setBasket] = useState<{ id: number; quantity: number }[]>([]);

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

  const addToCart = (quantity: number) => {
    setBasket((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { id: product.id, quantity }];
      }
    });
  };

  return (
    <div className="product">
      <Header
        basketCount={basket.reduce((sum, item) => sum + item.quantity, 0)}
      />
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
      <AddProduct price={product.price} onAddToCart={addToCart} />
      <Description description={product.description} />
      <Specifications specifications={specifications} />
      <Disclaimer />
    </div>
  );
}
