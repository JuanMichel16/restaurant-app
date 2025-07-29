import { categories } from "../../data/categories";
import { BaseCategoryRepository } from "./baseCategoryRepository";
import { Category } from "@/types/category.type";

export const localCategoryRepository: BaseCategoryRepository  = {
  async getCategories() : Promise<Category[]> {
    return await categories;  
  },

  async searchCategoryById(id: number) : Promise<Category> {
    return categories.find(category => category.id === id)!;
  }
}