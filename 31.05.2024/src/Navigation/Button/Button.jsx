import "../Button/Button.css";
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

export default function Button({ children, onClick, isActive }) {
  return (
    <StyledButton
      className={isActive ? `button active` : `button`}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
