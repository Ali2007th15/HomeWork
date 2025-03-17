import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { NavbarProps } from "@/features/helpers/navbar-props";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function Categories({ params }: Props) {
  const { category } = await params;

  const response = await fetch(`${process.env.API_HOST}/api/navbar`);

  const item: NavbarProps[] = await response.json();

  console.log(item);

  const filteredItems = item
    .filter((i) => i.category === category)
    .flatMap((i) => i.items);
  console.log(filteredItems);

  return (
    <div className="container mt-10 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">
          {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
        </h1>
        <p className="text-lg text-muted-foreground">
          Buy {category} from the best stores
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {filteredItems.map((product) => (
          <Link key={product.id} href={product.id}>
            <Card key={product.id} className="rounded-lg border-0 bg-zinc-900">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <Image
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
                    }
                    alt={"no image"}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium text-white">{product.title}</h3>
                <p className="text-sm text-zinc-400">{product.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button className="flex-1 bg-white text-black hover:bg-zinc-200">
                  View products
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-zinc-800"
                >
                  <Eye className="h-4 w-4 text-white" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
