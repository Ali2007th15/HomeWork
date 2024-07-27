import "./Item.css";
import React from 'react';
import phones from "../../Phones";
import { Link } from "react-router-dom";
 


const Item = ({ shoe }) => {
  const shoeImg = require(`../../Phones_Picture/${shoe.title}.jpg`);

  return (
    <div className='popular-item-container'>
       <Link to={`/product/${shoe.title}`}>
       <img src={shoeImg} alt={shoe.title} />
       </Link>
      <h2>{shoe.name}</h2>
      <b>{shoe.price} $</b>
     
    </div>

    
  );
}

export default Item;
