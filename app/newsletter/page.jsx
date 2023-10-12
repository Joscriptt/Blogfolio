"use client";

import { animate, motion, stagger, useAnimate } from "framer-motion";

import React, { useEffect } from "react";

import { PiBellRingingLight } from "react-icons/pi";

const words =
  " Sign up to the creative newsletter to get tons of valuable information on how to launch, grow, and monitize your design business. Sent out every two weeks right into your inxoz! ";

function Newspage() {
  const wordsArray = words.split(" ");

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word) => {
          {
            console.log(word);
          }
          return (
            <motion.span key={word} className="text-white opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
  return (
    <>
      <div className=" max-w-5xl md:max-w-3xl lg:max-w-[650px]  lg:mx-auto mx-auto mt-24 p-5">
        <div className="flex justify-center">
          <button className="p-[1px] rounded-md relative">
            <div className="p-8 bg-zinc-800 rounded-3xl">
              <span className="absolute inset-0 rounded-3xl overflow-hidden">
                <motion.span
                  className="w-[500%] aspect-square absolute bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-60"
                  initial={{
                    rotate: -90,
                  }}
                  animate={{
                    rotate: 90,
                  }}
                  transition={{
                    duration: 3.8,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    translateX: "-50%",
                    translateY: "-10%",
                    zIndex: -1,
                  }}
                />
              </span>
              <div className=" flex items-center justify-center  ">
                <PiBellRingingLight />
              </div>
            </div>
          </button>
        </div>
        <div>
          <h2 className="text-xs uppercase text-center my-4 text-zinc-600">
            Crafted for Developers
          </h2>
          <h1 className="text-center font-display font-PoppinsBold text-5xl mt-1 mb-3 ">
            Grow & monitize your design business
          </h1>
          <p className="text-xl text-center mt-8">{renderWords()}</p>
        </div>
      </div>
    </>
  );
}

export default Newspage;
