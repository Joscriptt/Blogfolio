"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { PiSkipForwardThin, PiSkipBackThin } from "react-icons/pi";

// const images = ["/img/a.png", "/img/b.png", "/img/c.png"];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 800 : -100,
      opacity: 0,
    };
  },
  center: {
    // zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      // zIndex: 0,
      x: direction < 0 ? 800 : -100,
      opacity: 0,
      // position: "relative",
    };
  },
};

function ImageAnimation({
  single,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  // console.log(single.image);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? single.image.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === single.image.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="">
      <div className="overflow-hidden my-9 rounded-lg border border-neutral-700/40 md:w-full md:h-[25rem] relative">
        <div
          className="flex h-full w-full transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {single.image.map((img, indx) => (
            <Image
              key={indx}
              width={1000}
              height={700}
              className="object-cover md:h-full  "
              src={img.base64}
              alt="slide"
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-black/80 text-gray-100 hover:bg-black"
          >
            <PiSkipBackThin size={20} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-black/80 text-gray-100 hover:bg-black"
          >
            <PiSkipForwardThin size={20} />
          </button>
        </div>

        <div className="absolute bottom-9 translate-x-40 sm:translate-x-60 md:translate-x-80">
          <div className="flex items-center bg-black/50 backdrop-blur-md rounded-full w-fit justify-center gap-2 px-1 py-1">
            {single.image.map((_, i) => (
              <div
                key={i}
                className={`
              transition-all w-1.5 h-1.5 bg-white rounded-full
              ${curr === i ? "p-1" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageAnimation;
