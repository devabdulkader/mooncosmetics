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
  image: string;
  banner: string;
}
export interface IIdCategory {
  id: string;
  name: string;
  description?: string; // Optional properties
  // Add other relevant fields
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
    categoryId: string;
  };
}

export interface CustomLinkProps {
  path: string;
  prefetch?: boolean;
  children: ReactNode;
  setOpen?: (open: boolean) => void; // Add setOpen prop
}

export interface IFeaturedProduct {
  id: number;
  title: string;
  image: string;
  button: string;
  contents: { heading: string; text: string }[]; // Ensure this matches your JSON data structure
}
