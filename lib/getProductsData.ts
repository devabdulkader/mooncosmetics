import productsData from "@/data/productsData.json"; // Adjust the path as necessary
import { IProduct } from "@/types";

export default async function getProductsData(): Promise<IProduct[]> {
  try {
    // Simulating an async operation to keep the function signature similar
    const data: IProduct[] = await new Promise((resolve) =>
      setTimeout(() => resolve(productsData as IProduct[]), 100)
    );

    return data;
  } catch (error: any) {
    throw new Error(
      error.message || "An error occurred while fetching products data"
    );
  }
}
