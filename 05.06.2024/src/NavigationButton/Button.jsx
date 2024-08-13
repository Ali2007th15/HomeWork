import { styled } from "styled-components";
import "./Button.css";

const ButtonStyle = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
  margin-right: 1rem;
`;

export default function Button({ children, onClick, isActive }) {
  return (
    <ButtonStyle
      className={isActive ? `button active` : `button`}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
}
