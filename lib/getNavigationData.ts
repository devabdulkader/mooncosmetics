import { INavItem } from "@/types";
import navigationData from "@/data/navigationData.json";

interface INavResponse {
  status: string;
  data: INavItem[];
}

export default async function getNavigationData(): Promise<INavItem[]> {
  try {
    // Simulating an async operation to keep the function signature similar
    const data: INavResponse = await new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            status: "success",
            data: navigationData as INavItem[],
          }),
        100
      )
    );

    if (data.status !== "success") {
      throw new Error("Something went wrong!!");
    }
    return data.data;
  } catch (error: any) {
    throw new Error(error.message || "An error occurred while fetching data");
  }
}
