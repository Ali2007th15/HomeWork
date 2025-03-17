export interface SubProduct {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    stockCount: number;
}

export interface ProductProps {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    path: string;
    description: string;
    stockCount: number;
    category: string;
    rating: number;
    quantity: number;
    subProducts?: SubProduct[];
}

export interface SubProductProps {
    id: string;
    category: string;
    subcategory: string;
    name: string;
    price: number;
    description: string;
    image: string;
}



