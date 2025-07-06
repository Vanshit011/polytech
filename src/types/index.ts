export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string[];
  features: string[];
  image: string;
  grade?: string;
  color?: string;
  applications: string[];
  properties: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  products: Product[];
}