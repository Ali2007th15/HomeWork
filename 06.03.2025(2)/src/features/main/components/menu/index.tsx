import ButtonMenu from "@/features/shared/menu-button";
import PizzaList from "@/features/shared/pizza";
import PizzaListSkeleton from "@/features/shared/pizza/pizza-list-sckeleton";
import Section from "@/features/shared/section";
import { Suspense } from "react";

export default function Menu() {
  return (
    <div id="menu" className="py-8">
      <div className="container flex justify-center">
        <Section head="Menu" />
      </div>
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <ButtonMenu name="Show all" defaultActive={true} />
            <ButtonMenu name="Meat" />
            <ButtonMenu name="Vegetarian" />
            <ButtonMenu name="Sea product" />
            <ButtonMenu name="Mushroom" />
          </div>
        </div>
      </div>
      <Suspense fallback={<PizzaListSkeleton />}>
        <PizzaList />
      </Suspense>
    </div>
  );
}
