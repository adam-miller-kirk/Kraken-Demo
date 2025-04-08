import { z } from "zod";

// Zod schema for runtime validation
export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  power: z.string(),
  description: z.string(),
  price: z.number(),
  quantity: z.number(),
  brand: z.string(),
  weight: z.number(),
  height: z.number(),
  width: z.number(),
  length: z.number(),
  model_code: z.string(),
  colour: z.string(),
  img_url: z.string(),
});

// TypeScript type inferred from the schema
export type Product = z.infer<typeof ProductSchema>;

// Input shape
export const ProductInputSchema = z.object({
  productId: z.number(),
});

export type ProductInput = z.infer<typeof ProductInputSchema>;
