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

// types.ts

export interface IProduct {
  name: string;
  image: string;
  category: string; // category slug in lowercase with hyphens
  subcategory?: string | null; // subcategory slug, optional
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
