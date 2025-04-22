import { type Category } from "./category.type";

export type Product = {
  id: number;
  name: string;
  price: number
  image: string
  categoryId: Category['id']
}

export type ProductWithCategory = Product & ({ category: Category })
