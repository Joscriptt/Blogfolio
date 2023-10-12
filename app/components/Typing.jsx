"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function Typing() {
  return (
    <>
      <TypeAnimation
        sequence={["audience", 2000, "business", 2000, "income", 2000]}
        wrapper="span"
        speed={50}
        className=" bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-800    "
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </>
  );
}

export default Typing;
