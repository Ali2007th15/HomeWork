import React, { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
  margin-right: 1rem;
  &:hover {
    opacity: 0.6;
  }
`;

const StyledInput = styled.input`
  display: flex;
  margin-bottom: 15px;
  padding: 0.8rem;
  border: none;
  border-radius: 7px;
  font-size: 25px;
  text-align: center;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Task1() {
  const [time, setTime] = useState(0);
  const [reanimingTime, setReanimingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showReanimingTime, setShowReanimingTime] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (time > 0 && !isRunning) {
      setReanimingTime(time);
      setIsRunning(true);
      setShowReanimingTime(true);
    }
  };

  const stopTimer = () => {
    if (!intervalRef.current) {
      setInterval(intervalRef.current);
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setReanimingTime(0);
    setTime(0);
    setShowReanimingTime(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (isRunning && reanimingTime > 0) {
      intervalRef.current = setInterval(() => {
        setReanimingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (reanimingTime === 0) {
      setIsRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, reanimingTime]);
  return (
    <StyledDiv>
      <h1>Таймер</h1>
      <div>
        <StyledInput
          type="number"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          disabled={isRunning}
          placeholder="..."
        />
        <StyledButton onClick={startTimer} disabled={isRunning}>
          Старт
        </StyledButton>
        <StyledButton onClick={stopTimer}>Стоп</StyledButton>
        <StyledButton onClick={resetTimer}>Сброс</StyledButton>
      </div>
      {showReanimingTime && <h2>Оставшееся время: {reanimingTime} секунд</h2>}
    </StyledDiv>
  );
}
