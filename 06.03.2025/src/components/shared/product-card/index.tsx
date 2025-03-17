"use client";
import { Eye } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { CategoryProps } from "@/features/helpers/category-props";
import { ProductProps, SubProductProps } from "@/features/helpers/products.props";

type ProductCardProps = { product: ProductProps | CategoryProps | SubProductProps };

export function ProductCard({ product }: ProductCardProps) {
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");

//   const { setProducts } = useProductStore();

//   const addToCart = (
//     event: React.MouseEvent<HTMLButtonElement>,
//     product: ProductProps
//   ) => {
//     event.preventDefault();
//     setProducts((prev) => {
//       const current = prev.find((p) => p.id === product.id);
//       if (!current) {
//         return [...prev, product];
//       }
//       return prev;
//     });
//   };

  return (
    <Card className="rounded-lg border-0 bg-zinc-900">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
          <Image
            src={
              "imageUrl" in product
                ? product.imageUrl
                : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
            }
            alt={"name" in product ? product.name : product.title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium text-white">
          {isDocs
            ? "title" in product
              ? product.title
              : ""
            : "name" in product
            ? product.name
            : ""}
        </h3>
        {!isDocs && "price" in product && (
          <p className="text-sm text-zinc-400">${product.price}</p>
        )}
        {isDocs && "description" in product && (
          <p className="text-sm text-zinc-400">{product.description}</p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          className="flex-1 bg-white text-black hover:bg-zinc-200"
        >
          {isDocs ? "View products" : "Add to card"}
        </Button>
        {!isDocs && (
          <Button size="icon" variant="outline" className="border-zinc-800">
            <Eye className="h-4 w-4 text-white" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
