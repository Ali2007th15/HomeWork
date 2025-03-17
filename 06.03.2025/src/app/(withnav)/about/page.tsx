"use client";

import MainButton from "@/components/buttons/main-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function About() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>About page</div>
      <MainButton />
      <Button
        className="bg-transparent text-black hover:text-white"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </Button>
      <span className="px-4">{counter}</span>

      <Button
        className="bg-transparent text-black hover:text-white"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </Button>
    </>
  );
}
