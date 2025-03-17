"use client"

import { Button } from "@/components/ui/button"
import useCardStore, { CartItem } from "@/store/card-store"
import { MinusIcon, PlusIcon } from "lucide-react"


interface QuantitySelectorProps {
  product: CartItem
}

export default function QuantitySelector({ product }: QuantitySelectorProps) {
  const { cart, updateQuantity, addToCard } = useCardStore()

  // Find the product in the cart
  const cartItem = cart.find((item) => item.id === product.id)

  // Get the current quantity (default to 1 if not in cart)
  const quantity = cartItem ? cartItem.quantity : 1

  const incrementQuantity = () => {
    if (cartItem) {
      // If item exists in cart, update its quantity
      updateQuantity(product.id, quantity + 1)
    } else {
      // If item doesn't exist in cart, add it
      addToCard({ ...product, quantity: 1 })
    }
  }

  const decrementQuantity = () => {
    if (cartItem && quantity > 1) {
      updateQuantity(product.id, quantity - 1)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="rounded-r-none"
          onClick={decrementQuantity}
          disabled={!cartItem || quantity <= 1}
        >
          <MinusIcon className="w-4 h-4" />
        </Button>
        <span className="mx-3 min-w-8 text-center">{quantity}</span>
        <Button variant="outline" size="icon" className="rounded-l-none" onClick={incrementQuantity}>
          <PlusIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

