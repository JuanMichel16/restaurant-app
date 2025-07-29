import { Product } from "@/types/product.type";
import { Category } from "@/types/category.type";

export type ProductWithCategory = (Product & {category: Category}); 

export interface BaseProductRepository {
  getProductsByCategory(slug: string): Promise<Product[]>;
  productCount(): Promise<number>;
  getProducts({page, pageSize} : {page: number, pageSize: number}): Promise<ProductWithCategory[]>;
  searchProduct(query: string): Promise<ProductWithCategory[]>;
  getProductById(id: number): Promise<Product | null>;
}
