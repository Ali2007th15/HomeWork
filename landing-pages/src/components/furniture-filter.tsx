"use client"
import { type JSX, useState } from "react"
import Image from "next/image"
import { Sofa, ChefHat, UtensilsCrossed, Building2, Bed, DoorOpen } from "lucide-react"
import styles from "@/styles/furniture-filter.module.css"
import livingRoom from "@/images/livingRoom.jpg"
import office from "@/images/office.jpg"
import kitchen from "@/images/kitchen.jpg"
import diningRoom from "@/images/diningRoom.jpg"
import bedRoom from "@/images/bedRoom.jpg"
import hallway from "@/images/hallway.jpg"

type FilterType = "room" | "category" | "style"
type RoomType = "living" | "kitchen" | "dining" | "office" | "bedroom" | "hallway"
type CategoryType = "chairs" | "tables" | "sofas" | "storage" | "beds" | "lighting"
type StyleType = "modern" | "scandinavian" | "industrial" | "classic" | "minimalist" | "rustic"

interface FilterItem {
  id: string
  name: string
  icon?: JSX.Element
  image?: typeof office
}

const roomImages: Record<RoomType, typeof office> = {
  living: livingRoom,
  kitchen: kitchen,
  dining: diningRoom,
  office: office,
  bedroom: bedRoom,
  hallway: hallway,
}

const categoryImages: Record<CategoryType, typeof office> = {
  chairs: livingRoom, 
  tables: diningRoom,
  sofas: livingRoom,
  storage: office,
  beds: bedRoom,
  lighting: kitchen,
}

const styleImages: Record<StyleType, typeof office> = {
  modern: livingRoom,
  scandinavian: bedRoom,
  industrial: office,
  classic: diningRoom,
  minimalist: hallway,
  rustic: kitchen,
}

export default function FurnitureFilter() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("room")
  const [selectedRoom, setSelectedRoom] = useState<RoomType>("living")
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("sofas")
  const [selectedStyle, setSelectedStyle] = useState<StyleType>("modern")

  const roomData: FilterItem[] = [
    { id: "living", name: "Living Room", icon: <Sofa className={styles.icon} />, image: livingRoom },
    { id: "kitchen", name: "Kitchen", icon: <ChefHat className={styles.icon} />, image: kitchen },
    { id: "dining", name: "Dining Room", icon: <UtensilsCrossed className={styles.icon} />, image: diningRoom },
    { id: "office", name: "Office", icon: <Building2 className={styles.icon} />, image: office },
    { id: "bedroom", name: "Bed Room", icon: <Bed className={styles.icon} />, image: bedRoom },
    { id: "hallway", name: "Hallway", icon: <DoorOpen className={styles.icon} />, image: hallway },
  ]

  const categoryData: FilterItem[] = [
    { id: "chairs", name: "Chairs", image: categoryImages.chairs },
    { id: "tables", name: "Tables", image: categoryImages.tables },
    { id: "sofas", name: "Sofas", image: categoryImages.sofas },
    { id: "storage", name: "Storage", image: categoryImages.storage },
    { id: "beds", name: "Beds", image: categoryImages.beds },
    { id: "lighting", name: "Lighting", image: categoryImages.lighting },
  ]

  const styleData: FilterItem[] = [
    { id: "modern", name: "Modern", image: styleImages.modern },
    { id: "scandinavian", name: "Scandinavian", image: styleImages.scandinavian },
    { id: "industrial", name: "Industrial", image: styleImages.industrial },
    { id: "classic", name: "Classic", image: styleImages.classic },
    { id: "minimalist", name: "Minimalist", image: styleImages.minimalist },
    { id: "rustic", name: "Rustic", image: styleImages.rustic },
  ]

  const getFilterData = (): FilterItem[] => {
    switch (activeFilter) {
      case "room":
        return roomData
      case "category":
        return categoryData
      case "style":
        return styleData
      default:
        return roomData
    }
  }

  const getCurrentImage = () => {
    switch (activeFilter) {
      case "room":
        return roomImages[selectedRoom] || livingRoom
      case "category":
        return categoryImages[selectedCategory as CategoryType] || livingRoom
      case "style":
        return styleImages[selectedStyle as StyleType] || livingRoom
      default:
        return livingRoom
    }
  }

  const getSelectedId = (): string => {
    switch (activeFilter) {
      case "room":
        return selectedRoom
      case "category":
        return selectedCategory
      case "style":
        return selectedStyle
      default:
        return selectedRoom
    }
  }

  const handleItemClick = (id: string) => {
    switch (activeFilter) {
      case "room":
        setSelectedRoom(id as RoomType)
        break
      case "category":
        setSelectedCategory(id as CategoryType)
        break
      case "style":
        setSelectedStyle(id as StyleType)
        break
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Furniture</h1>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeFilter === "room" ? styles.activeTab : ""}`}
          onClick={() => setActiveFilter("room")}
        >
          Shop By Room
        </button>
        <button
          className={`${styles.tab} ${activeFilter === "category" ? styles.activeTab : ""}`}
          onClick={() => setActiveFilter("category")}
        >
          Shop By Category
        </button>
        <button
          className={`${styles.tab} ${activeFilter === "style" ? styles.activeTab : ""}`}
          onClick={() => setActiveFilter("style")}
        >
          Shop By Style
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={getCurrentImage() || "/placeholder.svg"}
            alt={`${getSelectedId()} ${activeFilter}`}
            fill
            className={styles.roomImage}
            priority={activeFilter === "room" && selectedRoom === "living"}
          />
          <div className={styles.imageOverlay}>
            <h2 className={styles.imageTitle}>
              {getFilterData().find((item) => item.id === getSelectedId())?.name || "Furniture"}
            </h2>
          </div>
        </div>

        <div className={styles.grid}>
          {getFilterData().map((item) => (
            <button
              key={item.id}
              className={`${styles.gridItem} ${item.id === getSelectedId() ? styles.activeGridItem : ""}`}
              onClick={() => handleItemClick(item.id)}
            >
              <div className={styles.iconContainer}>
                {item.icon || <span className={styles.itemInitial}>{item.name[0]}</span>}
              </div>
              <span className={styles.itemName}>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
