"use client"

import { create } from "zustand"

export interface CartItem {
  id: number
  name: string
  price: number
  imageUrl: string
  quantity: number
  size?: string
  category?: string
  path?: string
  description?: string
  stockCount?: number
  rating?: number
}

interface CardStore {
  cart: CartItem[]
  addToCard: (item: CartItem) => void
  removeFromCard: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

const useCardStore = create<CardStore>((set) => ({
  cart: [],

  // Add item to cart or update quantity if it exists
  addToCard: (newItem) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex((item) => item.id === newItem.id)

      if (existingItemIndex !== -1) {
        // Item exists, update it
        const updatedCart = [...state.cart]
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        }
        return { cart: updatedCart }
      } else {
        // Item doesn't exist, add it with quantity 1
        return { cart: [...state.cart, { ...newItem, quantity: 1 }] }
      }
    }),

  // Remove item from cart
  removeFromCard: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  // Update quantity of an item
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) => (item.id === id ? { ...item, quantity } : item)),
    })),

  // Clear cart
  clearCart: () => set({ cart: [] }),
}))

export default useCardStore

