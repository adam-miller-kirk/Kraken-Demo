import { useEffect, useState } from "react";
import { ProductInput, Product, ProductSchema } from "../types/products";

export default function useProduct({ productId }: ProductInput) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        const validated = ProductSchema.array().parse(data);
        const found = validated.find((p) => p.id === productId);
        setProduct(found);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
}
