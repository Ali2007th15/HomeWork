import Item from "./Item";
import "./PopularNow.css";
import React from "react";
import phones from '../../Phones';

const PopularNow = () => {
  const popularPhones = phones.sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className="popular-now-container">
      {popularPhones.map(phone => (
        <Item key={phone.id} phone={phone} />
      ))}
    </div>
  );
};

export default PopularNow;
