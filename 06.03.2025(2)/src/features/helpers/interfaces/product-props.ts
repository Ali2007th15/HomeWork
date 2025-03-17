export interface ProductProps {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
    size?: string;
    category?: string;
    path?: string
    description?: string;
    stockCount?: number;
    rating?: number;
  }