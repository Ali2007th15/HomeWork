"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./PizzaMenu.module.css";

// Extended pizza data with category
const PIZZA_ITEMS = [
  {
    name: "Italian",
    image: "/images/italian.png",
    ingredients: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    category: "Meat",
    sizes: { small: 22, medium: 28, large: 33 },
    basePrice: 8.35, // Renamed from price to basePrice
    extraIngredients: ["Basil", "Pepperoni", "Extra Cheese"],
  },
  {
    name: "Venecia",
    image: "/images/venecia.png",
    ingredients: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    category: "Sea products",
    sizes: { small: 22, medium: 28, large: 33 },
    basePrice: 7.35,
    extraIngredients: ["Shrimp", "Anchovies", "Garlic"],
  },
  {
    name: "Meat",
    image: "/images/meat.png",
    ingredients: "Filling: onion, pizza, tomato, mushrooms, cheese, olives, meat...",
    category: "Meat",
    sizes: { small: 22, medium: 28, large: 33 },
    basePrice: 9.35,
    extraIngredients: ["Sausage", "Ham", "Bacon"],
  },
  {
    name: "Cheese",
    image: "/images/cheese.png",
    ingredients: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    category: "Vegetarian",
    sizes: { small: 22, medium: 28, large: 33 },
    basePrice: 8.35,
    extraIngredients: ["Mozzarella", "Parmesan", "Cheddar"],
  },
];

const POPULAR_PIZZAS = [
  {
    name: "Argentina",
    image: "/images/argentina.png",
    ingredients: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    category: "Meat",
    sizes: { small: 22, medium: 28, large: 33 },
    basePrice: 7.35,
    extraIngredients: ["Beef", "Onions", "Peppers"],
  },
  {
    name: "Gribnaya",
    image: "/images/gribnaya.png",
    ingredients: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    category: "Mushroom",
    sizes: { small: 22, medium: 28, large: 33 },
    basePrice: 6.35,
    extraIngredients: ["Portobello", "Shiitake", "Truffle Oil"],
  },
  {
    name: "Tomato",
    image: "/images/tomato.png",
    ingredients: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    category: "Vegetarian",
    sizes: { small: 22, medium: 28, large: 33 },
    basePrice: 7.35,
    extraIngredients: ["Cherry Tomatoes", "Basil", "Olive Oil"],
  },
  {
    name: "Italian x2",
    image: "/images/italianx2.png",
    ingredients: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    category: "Meat",
    sizes: { small: 22, medium: 28, large: 33 },
    basePrice: 8.35,
    extraIngredients: ["Prosciutto", "Arugula", "Parmesan"],
  },
];

// Price multipliers for sizes
const SIZE_MULTIPLIERS = {
  small: 0.8, // 80% of base price
  medium: 1.0, // Base price
  large: 1.2, // 120% of base price
};

// Ingredients Modal Component
const IngredientsModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  ingredients: string[];
  pizzaName: string;
}> = ({ isOpen, onClose, ingredients, pizzaName }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <h3>Extra Ingredients for {pizzaName}</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <button className={styles.modal_close} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

// Pizza Card Component
const PizzaCard: React.FC<{
  name: string;
  image: string;
  ingredients: string;
  sizes: { small: number; medium: number; large: number };
  basePrice: number;
  extraIngredients: string[];
  onAddToCart: (item: CartItem) => void;
}> = ({ name, image, ingredients, sizes, basePrice, extraIngredients, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<"small" | "medium" | "large">("medium");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adjustedPrice, setAdjustedPrice] = useState(basePrice);

  // Update price when size changes
  useEffect(() => {
    const multiplier = SIZE_MULTIPLIERS[selectedSize];
    const newPrice = basePrice * multiplier;
    setAdjustedPrice(newPrice);
  }, [selectedSize, basePrice]);

  const handleOrder = () => {
    const cartItem = {
      name,
      size: selectedSize,
      quantity,
      price: adjustedPrice * quantity,
    };
    onAddToCart(cartItem);
    alert(`${quantity} ${name} (${selectedSize}) added to cart for $${(adjustedPrice * quantity).toFixed(2)}!`);
  };

  return (
    <div className={styles.pizza_card}>
      <Image src={image} alt={name} width={200} height={200} className={styles.pizza_image} />
      <h3 className={styles.pizza_name}>{name}</h3>
      <p className={styles.pizza_ingredients}>{ingredients}</p>
      <div className={styles.pizza_sizes}>
        <button
          className={selectedSize === "small" ? styles.size_active : ""}
          onClick={() => setSelectedSize("small")}
        >
          {sizes.small}
        </button>
        <button
          className={selectedSize === "medium" ? styles.size_active : ""}
          onClick={() => setSelectedSize("medium")}
        >
          {sizes.medium}
        </button>
        <button
          className={selectedSize === "large" ? styles.size_active : ""}
          onClick={() => setSelectedSize("large")}
        >
          {sizes.large}
        </button>
      </div>
      <button
        className={styles.ingredients_button}
        onClick={() => setIsModalOpen(true)}
      >
        + ingredients
      </button>
      <div className={styles.pizza_order}>
        <span className={styles.pizza_price}>${adjustedPrice.toFixed(2)}</span>
        <div className={styles.quantity_selector}>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button className={styles.order_button} onClick={handleOrder}>
          Order
        </button>
      </div>
      <IngredientsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ingredients={extraIngredients}
        pizzaName={name}
      />
    </div>
  );
};

// Cart Item Type
type CartItem = {
  name: string;
  size: string;
  quantity: number;
  price: number;
};

// Main Menu Component
const PizzaMenu: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Show All");
  const [cart, setCart] = useState<CartItem[]>([]);

  const filters = ["Show All", "Meat", "Vegetarian", "Sea products", "Mushroom"];

  const handleAddToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Filter pizzas based on active filter
  const filteredPizzas = PIZZA_ITEMS.filter((pizza) =>
    activeFilter === "Show All" ? true : pizza.category === activeFilter
  );
  const filteredPopularPizzas = POPULAR_PIZZAS.filter((pizza) =>
    activeFilter === "Show All" ? true : pizza.category === activeFilter
  );

  return (
    <section className={styles.menu_section}>
      <h2 className={styles.menu_title}>Menu</h2>
      <div className={styles.filter_tabs}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? styles.filter_active : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* General Menu Section */}
      <div className={styles.pizza_grid}>
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => (
            <PizzaCard
              key={pizza.name}
              name={pizza.name}
              image={pizza.image}
              ingredients={pizza.ingredients}
              sizes={pizza.sizes}
              basePrice={pizza.basePrice}
              extraIngredients={pizza.extraIngredients}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p className={styles.no_items}>No pizzas available in this category.</p>
        )}
      </div>

      {/* Most Popular Section */}
      <div className={styles.popular_header}>
        <Image
          src="/images/most.png"
          alt="Popular Pizzas"
          width={400}
          height={100}
          className={styles.popular_banner}
        />
      </div>
      <div className={styles.pizza_grid}>
        {filteredPopularPizzas.length > 0 ? (
          filteredPopularPizzas.map((pizza) => (
            <PizzaCard
              key={pizza.name}
              name={pizza.name}
              image={pizza.image}
              ingredients={pizza.ingredients}
              sizes={pizza.sizes}
              basePrice={pizza.basePrice}
              extraIngredients={pizza.extraIngredients}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p className={styles.no_items}>No popular pizzas available in this category.</p>
        )}
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className={styles.cart_summary}>
          <h3>Cart Summary</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.quantity} x {item.name} ({item.size}) - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>
            Total: $
            {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </p>
        </div>
      )}
    </section>
  );
};

export default PizzaMenu;