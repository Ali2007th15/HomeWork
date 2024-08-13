import { useState } from "react";
import Tabs from "./NavigationButton/Tabs";
import Task1 from "./Task1/Task1";
import Task2 from "./Task2/Task2";
import Task3 from "./Task3/Task3";

export default function App() {
  const [tab, setTab] = useState(null);
  return (
    <main>
      <Tabs active={tab} onChange={(changed) => setTab(changed)} />
      {tab === null && (
        <h1 style={{ textAlign: "center" }}>Кликайте, чтобы увидеть задания</h1>
      )}
      {tab === "task1" && <Task1 />}
      {tab === "task2" && <Task2 />}
      {tab === "task3" && <Task3 />}
      {tab === "exit" && (
        <h1 style={{ textAlign: "center" }}>Вы вышли из заданий</h1>
      )}
    </main>
  );
}
