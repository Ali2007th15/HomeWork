import React, { useState } from "react";
import { useParams } from "react-router-dom";
import phones from "../../Phones";
import "./ProductPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function ProductPage() {
  const { title } = useParams();
  const shoe = phones.find((shoe) => shoe.title === title);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState([]);

  
  const handleSizeClick = (size) => {
    if (shoe.sizes.includes(size)) {
      setSelectedSizes((prevSizes) =>
        prevSizes.includes(size)
          ? prevSizes.filter((s) => s !== size)
          : [...prevSizes, size]
      );
    }
  };

  

  const allSizes = Array.from({ length: 15 }, (_, i) => i + 35);

  
  return (
    <div className="product-page">
      <Header />
      <div className="product-page-top">
        <div className="container-for-something"></div>
        <div className="product-container">
          <div className="product-gallery">
            <div className="product-gallery-all-images">
              {shoe.images.map((image, index) => (
                <img
                  key={index}
                  src={require(`../../Phones_Picture/${image}`)}
                  alt={image}
                  className={`all-images ${
                    currentImage === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
            <div className="main-image-container">
              
              <img
                src={require(`../../Phones_Picture/${shoe.images[currentImage]}`)}
                alt={shoe.name}
                className="main-image"
              />
             
            </div>
          </div>
          <div className="product-information">
            <h2>
              {shoe.name}
            </h2>
            
            <h>Цвет: {shoe.color}</h>
            <h2>{shoe.price}$</h2>
            <h>Выберите размер</h>
            <div className="sizes-container">
              {allSizes.map((size) => (
                <span
                  key={size}
                  className={`size ${
                    shoe.sizes.includes(size)
                      ? selectedSizes.includes(size)
                        ? "available active"
                        : "available"
                      : "unavailable"
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </span>
              ))}
            </div>

            <div className="buy-cart-container">
              <button className="add-to-cart-button">Добавить к заказу</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
