import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MoviesData from "./movies.js";
import { styled } from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MoviesData);
  }, []);

  return (
    <Div>
      {movies.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })}
    </Div>
  );
}
