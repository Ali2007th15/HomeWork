import Button from "./Button";
import { styled } from "styled-components";

const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Tabs({ active, onChange }) {
  return (
    <SectionStyle>
      <Button isActive={active === "task1"} onClick={() => onChange("task1")}>
        Задание 1
      </Button>
      <Button isActive={active === "task2"} onClick={() => onChange("task2")}>
        Задание 2
      </Button>
    </SectionStyle>
  );
}
