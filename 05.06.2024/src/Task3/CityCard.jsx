import { styled } from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  text-align: center;
  padding: 30px;
  background: linear-gradient(rebeccapurple, magenta);
  border-radius: 10px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;

const Emblem = styled.img`
  width: 100px;
  margin: auto;
  margin-bottom: 20px;
`;

export default function CityCard({ city }) {
  return (
    <Div>
      <h2>
        {city.city}, {city.country}
      </h2>
      <Emblem src={city.emblem} alt={`Герб города ${city.city}`} />
      <p>{city.description}</p>
      <p>
        <strong>Население: </strong>
        {city.population.toLocaleString()}
      </p>
      <p>
        <strong>Площадь: </strong>
        {city.area} км²
      </p>
    </Div>
  );
}
