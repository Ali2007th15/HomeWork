import React, { useState } from "react";
import "./CatalogList.css";
import phones from "../../Phones";
import { Link } from "react-router-dom";
 

export default function CatalogList() {
  return (
    <div className="list-container">
      <div className="shoes-list">
        {phones.map((shoe) => (
          <div key={shoe.id} className="card">
            <Link to={`/product/${shoe.title}`}>
              <img
                src={require(`../../Phones_Picture/${shoe.title}.jpg`)}
                alt={shoe.name}
              />
            </Link>
            <Link to={`/product/${shoe.title}`}>
              <div className="card-information">
                <p className="card-brand">{shoe.name}</p>
                <p className="card-price">{shoe.price}$</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
