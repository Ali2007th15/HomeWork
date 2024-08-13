import { useRef, useState, useEffect } from "react";
import quotes from "./data.js";
import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
  margin-top: 20px;
  &:hover {
    opacity: 0.6;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

export default function Task2() {
  const [quote, setQuote] = useState("");
  const intervalRef = useRef(null);

  const updateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].title);
  };

  useEffect(() => {
    updateQuote();
    intervalRef.current = setInterval(updateQuote, 10000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  return (
    <StyledDiv>
      <h1>Случайная цитата</h1>
      <span>{quote}</span>
      <StyledButton onClick={updateQuote}>Обновить цитату</StyledButton>
    </StyledDiv>
  );
}
