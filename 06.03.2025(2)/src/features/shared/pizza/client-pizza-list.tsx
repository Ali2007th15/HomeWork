"use client"

import { useSearchParams } from "next/navigation"
import Pizza from "./pizza"
import { Pizza as PizzaType } from "@/features/service/pizza-service"

interface ClientPizzaListProps {
  pizzas: PizzaType[]
}

export default function ClientPizzaList({ pizzas }: ClientPizzaListProps) {
  const searchParams = useSearchParams()
  const category = searchParams.get("category") || "Show all"

  const filteredPizzas = category === "Show all" ? pizzas : pizzas.filter((pizza) => pizza.category === category)

  const firstFourPizza = filteredPizzas.slice(0, 4)
  const afterFourPizza = filteredPizzas.length > 4 ? filteredPizzas.slice(4) : []

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {firstFourPizza.map((pizza) => (
        <Pizza
          key={pizza.id}
          id={pizza.id}
          category={pizza.category}
          name={pizza.name}
          price={pizza.price}
          image={pizza.image}
          description={pizza.description}
        />
      ))}

      {afterFourPizza.length > 0 && (
        <div className="col-span-full my-8">
          <div className="popular-bg p-5 flex justify-center items-center rounded-[30px]">
            <h1 className="text-2xl font-bold text-natural my-10">MOST POPULAR PIZZA</h1>
          </div>
        </div>
      )}

      {afterFourPizza.map((pizza) => (
        <Pizza
          key={pizza.id}
          id={pizza.id}
          category={pizza.category}
          name={pizza.name}
          price={pizza.price}
          image={pizza.image}
          description={pizza.description}
        />
      ))}
    </div>
  )
}



