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

const Img = styled.img`
  width: 200px;
  border-radius: 25px;
`;

export default function MovieCard({ movie }) {
  return (
    <Div>
      <Img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <span>{movie.description}</span>
      <h3>Время показа: </h3>
      <ul>
        {movie.showtimes.map((time, index) => {
          return <li key={index}>{time}</li>;
        })}
      </ul>
    </Div>
  );
}
