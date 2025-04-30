"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, Share2, ChevronLeft, ChevronRight, ShoppingCart, X, ArrowLeft } from "lucide-react"
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
  description: string
  features?: string[]
  dimensions?: {
    width: number
    height: number
    depth: number
  }
  materials?: string[]
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const products: Product[] = [
    {
      id: 1,
      name: "Ergonomic Chair",
      price: 40,
      image: swan1,
      description:
        "A comfortable and stylish chair perfect for any living room. Made with premium materials for durability and comfort.",
      features: [
        "Ergonomic design for proper posture",
        "Adjustable height and armrests",
        "360-degree swivel",
        "Breathable mesh back",
      ],
      dimensions: {
        width: 60,
        height: 110,
        depth: 65,
      },
      materials: ["High-quality fabric", "Steel frame", "Memory foam padding"],

    },
    {
      id: 2,
      name: "Dining Table",
      price: 60,
      image: swan2,
      description:
        "Elegant dining table with a smooth surface and sturdy legs. Ideal for family gatherings and dinner parties.",
      features: ["Extendable design", "Scratch-resistant surface", "Easy to clean", "Seats up to 6 people"],
      dimensions: {
        width: 150,
        height: 75,
        depth: 90,
      },
      materials: ["Solid oak", "Tempered glass", "Stainless steel accents"],

    },
    {
      id: 3,
      name: "Luxury Sofa",
      price: 200,
      image: swan3,
      description:
        "Luxurious sofa with plush cushions and high-quality upholstery. Perfect for relaxing after a long day.",
      features: ["Convertible design", "Stain-resistant fabric", "Extra deep seats", "Hidden storage compartment"],
      dimensions: {
        width: 220,
        height: 85,
        depth: 95,
      },
      materials: ["Premium leather", "Hardwood frame", "High-density foam"],

    },
    {
      id: 4,
      name: "Ottoman Puf",
      price: 120,
      image: livingRoom,
      description:
        "Versatile and comfortable puf that can serve as extra seating or a footrest. Available in various colors to match your decor.",
      features: [
        "Dual-purpose design",
        "Lightweight and portable",
        "Removable cover for easy cleaning",
        "Weight capacity: 150kg",
      ],
      dimensions: {
        width: 50,
        height: 40,
        depth: 50,
      },
      materials: ["Cotton blend fabric", "Foam filling", "Wooden base"],

    },
    {
      id: 5,
      name: "Modern Chandelier",
      price: 90,
      image: diningRoom,
      description:
        "Beautiful chandelier that adds elegance and warm lighting to any room. Features adjustable height and brightness.",
      features: ["Dimmable LED lights", "Adjustable hanging height", "Energy efficient", "Remote controlled"],
      dimensions: {
        width: 60,
        height: 40,
        depth: 60,
      },
      materials: ["Brushed metal", "Crystal accents", "LED bulbs"],

    },
    {
      id: 6,
      name: "King Size Bed",
      price: 300,
      image: bedRoom,
      description:
        "Premium bed frame with solid construction and modern design. Provides excellent support for a restful night's sleep.",
      features: ["Under-bed storage drawers", "Upholstered headboard", "No box spring needed", "Noise-free design"],
      dimensions: {
        width: 180,
        height: 120,
        depth: 200,
      },
      materials: ["Engineered wood", "Velvet upholstery", "Metal supports"],

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
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
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

    setCart((prevCart) => prevCart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)))
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

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product)
    document.body.style.overflow = "hidden"
  }

  const closeProductDetail = () => {
    setSelectedProduct(null)
    document.body.style.overflow = "auto"
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + visibleCount)

  if (visibleProducts.length < visibleCount) {
    const remaining = visibleCount - visibleProducts.length
    visibleProducts.push(...products.slice(0, remaining))
  }

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const isFavorite = (productId: number) => {
    return favorites.includes(productId)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Popular Furniture</h1>
        <p className={styles.description}>
          All our furniture is made from the finest materials and designed with our customers' preferences in mind. All
          our furniture uses the best materials and solutions for our customers.
        </p>

        <button className={styles.cartButton} onClick={() => setIsCartOpen(true)}>
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
            <div
              key={`${product.id}-${index}`}
              className={styles.productCard}
              onClick={() => openProductDetail(product)}
            >
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
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(product.id)
                      }}
                      className={styles.iconButton}
                    >
                      <Heart className={`${styles.icon} ${isFavorite(product.id) ? styles.favoriteActive : ""}`} />
                    </button>
                    <button className={styles.iconButton} onClick={(e) => e.stopPropagation()}>
                      <Share2 className={styles.icon} />
                    </button>
                  </div>
                </div>
                <div className={styles.productFooter}>
                  <span className={styles.price}>${product.price}</span>
                  <button
                    className={styles.buyButton}
                    onClick={(e) => {
                      e.stopPropagation()
                      addToCart(product)
                    }}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {selectedProduct && (
        <div className={styles.productDetailModal}>
          <div className={styles.productDetailContent}>
            <div className={styles.productDetailHeader}>
              <button className={styles.backButton} onClick={closeProductDetail}>
                <ArrowLeft className={styles.backIcon} />
                Back
              </button>
              <div className={styles.productDetailActions}>
                <button className={styles.iconButton} onClick={() => toggleFavorite(selectedProduct.id)}>
                  <Heart className={`${styles.icon} ${isFavorite(selectedProduct.id) ? styles.favoriteActive : ""}`} />
                </button>
                <button className={styles.iconButton}>
                  <Share2 className={styles.icon} />
                </button>
              </div>
            </div>

            <div className={styles.productDetailBody}>
              <div className={styles.productDetailImageContainer}>
                <Image
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  fill
                  className={styles.productDetailImage}
                />
              </div>

              <div className={styles.productDetailInfo}>
                <h1 className={styles.productDetailName}>{selectedProduct.name}</h1>
                <div className={styles.productDetailPrice}>${selectedProduct.price}</div>

                <div className={styles.productDetailSection}>
                  <h2 className={styles.productDetailSectionTitle}>Description</h2>
                  <p className={styles.productDetailDescription}>{selectedProduct.description}</p>
                </div>

                {selectedProduct.features && selectedProduct.features.length > 0 && (
                  <div className={styles.productDetailSection}>
                    <h2 className={styles.productDetailSectionTitle}>Features</h2>
                    <ul className={styles.productDetailFeatures}>
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className={styles.productDetailFeatureItem}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProduct.dimensions && (
                  <div className={styles.productDetailSection}>
                    <h2 className={styles.productDetailSectionTitle}>Dimensions</h2>
                    <div className={styles.productDetailDimensions}>
                      <div className={styles.dimensionItem}>
                        <span className={styles.dimensionLabel}>Width:</span>
                        <span className={styles.dimensionValue}>{selectedProduct.dimensions.width} cm</span>
                      </div>
                      <div className={styles.dimensionItem}>
                        <span className={styles.dimensionLabel}>Height:</span>
                        <span className={styles.dimensionValue}>{selectedProduct.dimensions.height} cm</span>
                      </div>
                      <div className={styles.dimensionItem}>
                        <span className={styles.dimensionLabel}>Depth:</span>
                        <span className={styles.dimensionValue}>{selectedProduct.dimensions.depth} cm</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedProduct.materials && selectedProduct.materials.length > 0 && (
                  <div className={styles.productDetailSection}>
                    <h2 className={styles.productDetailSectionTitle}>Materials</h2>
                    <div className={styles.productDetailMaterials}>
                      {selectedProduct.materials.map((material, index) => (
                        <span key={index} className={styles.materialTag}>
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

               

                <div className={styles.productDetailActions}>
                  <button
                    className={styles.addToCartButton}
                    onClick={() => {
                      addToCart(selectedProduct)
                      closeProductDetail()
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className={styles.cartModal}>
          <div className={styles.cartContent}>
            <div className={styles.cartHeader}>
              <h2>Cart</h2>
              <button className={styles.closeButton} onClick={() => setIsCartOpen(false)}>
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
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
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
                  <button className={styles.checkoutButton} onClick={checkout}>
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
