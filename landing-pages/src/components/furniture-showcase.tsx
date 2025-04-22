"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, Share2, ChevronLeft, ChevronRight, ShoppingCart, X } from 'lucide-react'
import styles from "@/styles/furniture-showcase.module.css"
import swan1 from "@/images/swan1.png"
import swan2 from "@/images/swan2.png"
import swan3 from "@/images/swan3.png"
import livingRoom from "@/images/livingRoom.jpg"
import diningRoom from "@/images/diningRoom.jpg"
import bedRoom from "@/images/bedRoom.jpg"

interface Product {
  id: number
  name: string
  price: number
  image: any
  quantity?: number
}

interface CartItem extends Product {
  quantity: number
}

export default function FurnitureShowcase() {
  const [favorites, setFavorites] = useState<number[]>([0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [purchaseComplete, setPurchaseComplete] = useState(false)

  const products = [
    {
      id: 1,
      name: "Chair",
      price: 40,
      image: swan1,
    },
    {
      id: 2,
      name: "Table",
      price: 60,
      image: swan2,
    },
    {
      id: 3,
      name: "Sofa",
      price: 200,
      image: swan3,
    },
    {
      id: 4,
      name: "Puf",
      price: 120,
      image: livingRoom,
    },
    {
      id: 5,
      name: "Chandelier",
      price: 90,
      image: diningRoom,
    },
    {
      id: 6,
      name: "Bed",
      price: 300,
      image: bedRoom,
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3)
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2)
      } else {
        setVisibleCount(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      
      if (existingItem) {
        return prevCart.map((item) => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
    
    setIsCartOpen(true)
  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return
    
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    )
  }

  const checkout = () => {
    setPurchaseComplete(true)
    
    setTimeout(() => {
      setCart([])
      setIsCartOpen(false)
      setPurchaseComplete(false)
    }, 3000)
  }

  const toggleFavorite = (index: number) => {
    setFavorites((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - visibleCount
      return newIndex < 0 ? Math.max(0, products.length - visibleCount) : newIndex
    })
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + visibleCount
      return newIndex >= products.length ? 0 : newIndex
    })
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + visibleCount)

  if (visibleProducts.length < visibleCount) {
    const remaining = visibleCount - visibleProducts.length
    visibleProducts.push(...products.slice(0, remaining))
  }

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Popular Furniture</h1>
        <p className={styles.description}>
          All our furniture is made from the finest materials and designed with our customers' preferences in mind. 
          All our furniture uses the best materials and solutions for our customers.
        </p>
        
        <button 
          className={styles.cartButton} 
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className={styles.cartIcon} />
          {cart.length > 0 && (
            <span className={styles.cartBadge}>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
          )}
        </button>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.navigationButtons}>
          <button className={styles.navButton} onClick={goToPrevious}>
            <ChevronLeft className={styles.navIcon} />
          </button>
          <button className={styles.navButton} onClick={goToNext}>
            <ChevronRight className={styles.navIcon} />
          </button>
        </div>

        <div className={styles.productsGrid}>
          {visibleProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.productHeader}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <div className={styles.actionButtons}>
                    <button onClick={() => toggleFavorite(currentIndex + index)} className={styles.iconButton}>
                      <Heart
                        className={`${styles.icon} ${
                          favorites.includes(currentIndex + index) ? styles.favoriteActive : ""
                        }`}
                      />
                    </button>
                    <button className={styles.iconButton}>
                      <Share2 className={styles.icon} />
                    </button>
                  </div>
                </div>
                <div className={styles.productFooter}>
                  <span className={styles.price}>${product.price}</span>
                  <button 
                    className={styles.buyButton}
                    onClick={() => addToCart(product)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isCartOpen && (
        <div className={styles.cartModal}>
          <div className={styles.cartContent}>
            <div className={styles.cartHeader}>
              <h2>Cart</h2>
              <button 
                className={styles.closeButton}
                onClick={() => setIsCartOpen(false)}
              >
                <X />
              </button>
            </div>
            
            {cart.length === 0 ? (
              <div className={styles.emptyCart}>
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className={styles.cartItems}>
                  {cart.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.cartItemImage}>
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className={styles.cartItemImg}
                        />
                      </div>
                      <div className={styles.cartItemInfo}>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                      </div>
                      <div className={styles.cartItemQuantity}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                      <button 
                        className={styles.removeButton}
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className={styles.cartFooter}>
                  <div className={styles.cartTotal}>
                    <span>Total:</span>
                    <span>${cartTotal}</span>
                  </div>
                  <button 
                    className={styles.checkoutButton}
                    onClick={checkout}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
            
            {purchaseComplete && (
              <div className={styles.purchaseComplete}>
                <p>Thank you for your purchase! Your order has been successfully placed.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}