import { merchProducts } from "../../../data/merchProducts";

export function generateStaticParams() {
  return merchProducts.map((product) => ({
    id: product.id,
  }));
} 