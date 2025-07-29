import { Category } from "@/types/category.type"

export interface BaseCategoryRepository {
  getCategories() : Promise<Category[]>
  searchCategoryById(id: number) : Promise<Category>
}

