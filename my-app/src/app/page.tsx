"use client";

import { useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState("Clique pour obtenir un conseil !");
  const [id, setId] = useState("");

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setId(data.slip.id)
    console.log(id);
  };


  return (
    <div className="flex relative items-center justify-center w-full max-w-lg h-80 flex-col bg-foreground rounded-lg">
      <h1 className="text-neonGreen mb-10">ADVICE #{id}</h1>
      <p className="text-white text-center  w-full sm:w-96 text-[28px]">&quot;{advice}&quot;</p>
      <img className="mt-10" src="/images/pattern-divider-desktop.svg" alt="patern" />
      <button
        onClick={fetchAdvice}
        className="transition-shadow duration-300 hover:shadow-[0px_0px_20px_rgba(72,255,168,0.7)] -bottom-10 absolute px-6 py-6 bg-neonGreen text-white rounded-full"
      >
        <img src="/images/icon-dice.svg" alt="dice" />
      </button>
    </div>
  );
}
