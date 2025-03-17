import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://pizza-db.vercel.app/pizzas", {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch pizzas: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in pizzas API route:", error)
    return NextResponse.json({ error: "Failed to fetch pizza data" }, { status: 500 })
  }
}

