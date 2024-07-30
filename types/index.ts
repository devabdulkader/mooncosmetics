import { StaticImageData } from "next/image";
import { ReactNode } from "react";
export interface INavSubItem {
  title: string;
  path: string;
}

export interface INavItem {
  title: string;
  path: string;
  dropdown: boolean;
  items?: INavSubItem[];
}

export interface ICategory {
  title: string;
  breadcrumb: string;
  slug: string;
  image: StaticImageData;
  buttonText: string;
}

export interface IProduct {
  id: string;
  name: string;
  categorySlug: string;
  brand: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  popularity: number;
  trendingStatus: boolean;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
}

// Define the type for the component props
export interface PageProps {
  params: {
    categoryName: string;
  };
}

export interface CustomLinkProps {
  path: string;
  prefetch?: boolean;
  children: ReactNode;
}
