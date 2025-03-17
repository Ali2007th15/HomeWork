
import { Pizza } from "@/features/service/pizza-service"
import ClientPizzaList from "./client-pizza-list"

export default async function PizzaList() {
  // Fetch directly from the API route in a server component
  const response = await fetch(`${process.env.API_HOST || ""}/api/pizzas`)

  if (!response.ok) {
    // Handle error state - could return an error component
    return <div>Failed to load pizzas</div>
  }

  const pizzas: Pizza[] = await response.json()

  return (
    <div id="pizza-list">
      <div className="container mx-auto px-4">
        <ClientPizzaList pizzas={pizzas} />
      </div>
    </div>
  )
}

