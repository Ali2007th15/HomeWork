import Item from "./Item";
import "./PopularNow.css";
import React from "react";
import phones from '../../Phones';

const PopularNow = () => {
  const popularShoes = phones.sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className="popular-now-container">
      {popularShoes.map(shoe => (
        <Item key={shoe.id} shoe={shoe} />
      ))}
    </div>
  );
};

export default PopularNow;
