export interface Product {
    id?: string; 
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number; 
    imageUrl?: string; 
    createdAt?: Date;
    updatedAt?: Date;
  }