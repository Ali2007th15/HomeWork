import CityCard from "./CityCard.jsx";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import CityData from "./city.js";



export default function CityList() {
  const [cites, setCites] = useState([]);

  useEffect(() => {
    setCites(CityData);
  }, []);

  return (
    <div>
      {cites.map((city, index) => {
        return <CityCard key={index} city={city} />;
      })}
    </div>
  );
}
