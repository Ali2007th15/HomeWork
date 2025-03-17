"use client";

import { ProductProps } from "@/features/helpers/interfaces/product-props";
import useCardStore from "@/store/card-store";
import Image from "next/image";
import { useState } from "react";
import QuantitySelector from "../quantity-selector";

export default function Pizza({
  id,
  name,
  price,
  imageUrl,
  quantity,
  description,
}: ProductProps) {
  const [imgSize, setImgSize] = useState("1");
  const [size, setSize] = useState("S");
  const addToCard = useCardStore((state) => state.addToCard);

  const handleImgSize = (sizeSelect: string) => {
    setImgSize(sizeSelect);
    setSize(sizeSelect === "1" ? "S" : sizeSelect === "1.2" ? "M" : "L");
  };

  const handleOrder = () => {
    const newOrder = {
      id,
      imageUrl,
      name,
      size,
      price,
      quantity,
    };
    addToCard(newOrder);
  };

  return (
    <div className="p-2">
      <div className="pizza-item dark-gradient rounded-[20px] p-4 flex flex-col items-center justify-center gap-[15px]">
        <div className="relative w-full h-40 overflow-hidden">
          <Image
            src={`http://localhost:3000/${imageUrl}` || "/placeholder.svg"}
            alt={name}
            fill
            style={{ objectFit: "contain", transform: `scale(${imgSize})` }}
          />
        </div>
        <h3 className="text-2xl font-bold text-natural">{name}</h3>
        <p className="text-sm text-info text-center h-12 overflow-hidden">
          {description}
        </p>

        <div className="pizza-size flex justify-center gap-[15px]">
          <span
            className={`w-[50px] h-[50px] flex items-center justify-center rounded-full cursor-pointer border-2 ${
              size === "S"
                ? "bg-secondary border-secondary text-inky"
                : "border-info text-info hover:bg-secondary hover:border-secondary hover:text-natural hover:font-bold"
            }`}
            onClick={() => handleImgSize("1")}
          >
            S
          </span>
          <span
            className={`w-[50px] h-[50px] flex items-center justify-center rounded-full cursor-pointer border-2 ${
              size === "M"
                ? "bg-secondary border-secondary text-inky"
                : "border-info text-info hover:bg-secondary hover:border-secondary hover:text-natural hover:font-bold"
            }`}
            onClick={() => handleImgSize("1.2")}
          >
            M
          </span>
          <span
            className={`w-[50px] h-[50px] flex items-center justify-center rounded-full cursor-pointer border-2 ${
              size === "L"
                ? "bg-secondary border-secondary text-inky"
                : "border-info text-info hover:bg-secondary hover:border-secondary hover:text-natural hover:font-bold"
            }`}
            onClick={() => handleImgSize("1.3")}
          >
            L
          </span>
        </div>

        <div className="btn-ingridient flex items-center justify-center text-sm w-[200px] h-[40px] text-primary border-2 border-primary rounded-[20px] cursor-pointer transition-all duration-200 hover:bg-primary hover:text-natural hover:font-bold">
          + Ingredients
        </div>

        <div className="flex justify-around w-full">
          <span className="text-2xl font-bold text-natural">
            ${price.toFixed(2)}
          </span>
          <QuantitySelector product={{ id, name, price, imageUrl, quantity }} />
        </div>

        <button
          onClick={handleOrder}
          className="btn-order flex items-center justify-center w-[200px] h-[40px] mt-2 mb-5 rounded-[20px] bg-secondary text-inky transition-all duration-200 hover:bg-primary hover:font-bold"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
