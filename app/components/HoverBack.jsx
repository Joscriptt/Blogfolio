"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { PiArrowLeftThin, PiArrowRightLight } from "react-icons/pi";
import Link from "next/link";

const hoverVariant = {
  initial: {
    opacity: 0.7,
  },
  hover: {
    opacity: 1,

    transition: {
      duration: 0.3,
    },
  },
};

const iconVariant = {
  initial: {
    x: 0,
  },
  hover: {
    opacity: 1,
    x: 4,
    transition: {
      duration: 0.2,
    },
  },
};

function HoverBack() {
  return (
    <div className="w-fit">
      <Link href={"/template"}>
        <motion.div
          variants={hoverVariant}
          whileHover="hover"
          initial="initial"
          className="flex items-center gap-x-2 py-1 w-fit px-5 pl-0  rounded-md  drop-shadow-md dark:border border-neutral-800/25 shrink-0 "
        >
          <span className="pl-2">
            <PiArrowLeftThin />
          </span>
          <motion.p
            variants={iconVariant}
            className="text-base text-neutral-400"
          >
            Templates
          </motion.p>
        </motion.div>
      </Link>
    </div>
  );
}

export default HoverBack;
