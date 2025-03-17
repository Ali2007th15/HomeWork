export interface Pizza {
  id: number
  category: string
  name: string
  price: number
  image: string
  description: string
}


export async function getPizzas(): Promise<Pizza[]> {
  try {
    // Always fetch from our API route
    const response = await fetch("/api/pizzas")

    if (!response.ok) {
      throw new Error(`Failed to fetch pizzas: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching pizzas:", error)
    return []
  }
}
