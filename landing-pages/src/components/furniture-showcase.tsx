"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import styles from "@/styles/furniture-showcase.module.css"
import swan1 from "@/images/swan1.png"
import swan2 from "@/images/swan2.png"
import swan3 from "@/images/swan3.png"
import livingRoom from "@/images/livingRoom.jpg"
import diningRoom from "@/images/diningRoom.jpg"
import bedRoom from "@/images/bedRoom.jpg"

export default function FurnitureShowcase() {
  const [favorites, setFavorites] = useState<number[]>([0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Popular Furniture</h1>
        <p className={styles.description}>
          All of our furniture uses the best materials and choices for our customers. All of our furniture uses the best
          materials and choices for our customers.
        </p>
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
                  <button className={styles.buyButton}>Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
