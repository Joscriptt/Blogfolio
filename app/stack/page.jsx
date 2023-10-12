"use client";

// import styles from "@/styles/Card.module.css";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  SiFramer,
  SiWebflow,
  SiLinear,
  SiSonarcloud,
  SiKinsta,
  SiInstacart,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { PiFigmaLogoThin } from "react-icons/pi";
import Image from "next/image";

let stacks = [
  {
    title: "Framer",
    desc: "Website Builder",
    icon: <SiFramer className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Instaprice",
    desc: "Pricing Calculator for Freelancers",
    icon: <SiInstacart className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Cron",
    desc: "Calender",
    icon: <SiMicrosoftsqlserver className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Figma",
    desc: "Design Tool",
    icon: <PiFigmaLogoThin className="h-10 w-10 text-pink-700" />,
  },
  {
    title: "Linear",
    desc: "Project Management",
    icon: <SiLinear className="h-10 w-10 text-purple-600" />,
  },
  {
    title: "Webflow",
    desc: "Website Builder",
    icon: <SiWebflow className="h-10 w-10 text-blue-700" />,
  },
  {
    title: "Arc",
    desc: "Browser",
    icon: <SiSonarcloud className="h-10 w-10 text-white/90" />,
  },
  {
    title: "OutSeta",
    desc: "Membership Technology",
    icon: <SiKinsta className="h-10 w-10 text-white/90" />,
  },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

function Stackpage() {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-5xl lg:max-w-[750px]  lg:mx-auto mx-auto mt-20 p-5 sm:pl-8 md:pl-20 lg:pl-0">
      <h1 className="text-5xl font-PoppinsBold">Stacks</h1>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="group mt-14 relative "
      >
        {stacks.map((each, idx) => (
          <div
            key={each?.title}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex relative group items-center gap-x-4 mt-5"
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 to-black border border-[#40f877] bg-[#40f877]/40 p-3 -z-[2] dark:z-10 block  rounded-md"
                  layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="dark:bg-neutral-800/30 bg-neutral-900 rounded-lg w-fit p-2  ">
              {each.icon}
            </div>
            <div>
              <h5 className="font-PoppinsBold  text-lg font-bold">
                {each.title}
              </h5>
              <span className="dark:text-zinc-400">{each.desc}</span>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="dark:bg-neutral-900 border border-neutral-700 border-opacity-40 md:flex gap-x-4 mt-16 rounded-md overflow-hidden ">
        <div className="dark:bg-neutral-800/20 bg-black p-3 flex md:w-96 items-center justify-center">
          <Image
            width={150}
            height={150}
            className="md:w-28 w-28 object-cover"
            src="/img/shake.gif"
            alt="shake"
          />
        </div>
        <div className="flex-col flex p-5">
          <div className="">
            <span className="font-PoppinsBold text-lg">
              Creative Properity Newsletter
            </span>

            <p className="text-[15px] dark:text-neutral-400/70 mt-2">
              Sign up to the Joscript Newsletter to get tons of valuable
              information on how to launch, grow, and monetize your design
              business. Sent out every three weeks right into your inbox!
            </p>
          </div>

          <div className="lg:flex gap-x-4 mt-5 ">
            <div className="flex items-center dark:bg-neutral-800/40  border border-neutral-700 border-opacity-40 h-11 flex-1 rounded-md">
              <CiMail className="ml-4" />
              <input
                className="w-full h-full bg-transparent placeholder:text-neutral-600 pl-2 focus:outline-none focus:border-blue-500"
                type="text"
                // value={inputValue}
                // onChange={handleInputChange}
                placeholder="Your fancy email"
                autoFocus
              />
            </div>
            <button className="dark:bg-neutral-800/40 font-PoppinsBlack border border-neutral-700 border-opacity-40 p-2 shrink-0  h-11 text-center rounded-md w-full bg-black text-white lg:w-36 text-sm mt-2 lg:mt-0">
              Join 1k readers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stackpage;
