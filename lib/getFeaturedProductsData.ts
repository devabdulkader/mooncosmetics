import featuredProductsData from "@/data/featuredProductsData.json"; // Adjust the path as necessary
import { IFeaturedProduct } from "@/types";

export default async function getFeaturedProductsData(): Promise<
  IFeaturedProduct[]
> {
  try {
    // Simulating an async operation to keep the function signature similar
    const data: IFeaturedProduct[] = await new Promise((resolve) =>
      setTimeout(() => resolve(featuredProductsData as IFeaturedProduct[]), 100)
    );

    return data;
  } catch (error: any) {
    throw new Error(
      error.message || "An error occurred while fetching products data"
    );
  }
}
