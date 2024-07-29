import Card from "./Card";
import "./Best.css";
import React from "react";
import phones from '../../Phones';

const Best = () => {
  const popularPhones = phones.sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className="popular-now-container">
      {popularPhones.map(phone => (
        <Card key={phone.id} phone={phone} />
      ))}
    </div>
  );
};

export default Best;
