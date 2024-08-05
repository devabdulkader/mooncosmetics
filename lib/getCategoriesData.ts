import categoriesData from "@/data/categoriesData.json"; // Adjust the path as necessary
import { ICategory } from "@/types";

export default async function getCategoriesData(): Promise<ICategory[]> {
  try {
    // Simulating an async operation to keep the function signature similar
    const data: ICategory[] = await new Promise((resolve) =>
      setTimeout(() => resolve(categoriesData as ICategory[]), 100)
    );

    return data;
  } catch (error: any) {
    throw new Error(
      error.message || "An error occurred while fetching products data"
    );
  }
}
