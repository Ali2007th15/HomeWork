import { useState } from "react";
import { styled } from "styled-components";
import Tabs from "./Navigation/Button/Tabs";
import Task1 from "./Task1/Task1";
import Task2 from "./Task2/Task2";

export default function App() {
  const [tab, setTab] = useState(null);
  return (
    <main>
      <Tabs active={tab} onChange={(changed) => setTab(changed)} />
      {tab === "task1" && <Task1 />}
      {tab === "task2" && <Task2 />}
    </main>
  );
}
