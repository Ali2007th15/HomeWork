import "./Card.css";
import React from 'react';
import phones from "../../Phones";
import { Link } from "react-router-dom";
 


const Card = ({phone}) => {
  const Img = require(`../../Phones_Picture/${phone.title}.jpg`);

  return (
    <div className='popular-item-container'>
       <Link to={`/product/${phone.title}`}>
       <img src={Img} alt={phone.title} />
       </Link>
      <h2>{phone.name}</h2>
      <b>{phone.price} $</b>
     
    </div>

    
  );
}

export default Card;
