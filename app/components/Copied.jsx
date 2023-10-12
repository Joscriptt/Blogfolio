"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { FcCheckmark } from "react-icons/fc";
import { TbCopy } from "react-icons/tb";

const inviteUrl = `hey@josephhjamess46@gmail.com`;

function Copied() {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div>
      <button
        className="dark:bg-neutral-900 border border-neutral-700 border-opacity-40 p-2 shrink-0  h-11 flex items-center justify-center gap-x-3 rounded-md w-32 lg:w-36 text-sm mt-2 lg:mt-0"
        onClick={onCopy}
      >
        <AnimatePresence>
          {copied ? (
            <motion.span
              initial={{ scale: 1 }}
              animate={{ scale: 0.8 }}
              exit={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 100,
              }}
            >
              <FcCheckmark className="w-4 h-4" />
            </motion.span>
          ) : (
            <motion.span
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <TbCopy className="w-4 h-4" />
            </motion.span>
          )}
        </AnimatePresence>

        <span className="font-PoppinsMedium">
          {copied ? "copied" : "E-Mail"}
        </span>
      </button>
    </div>
  );
}

export default Copied;
