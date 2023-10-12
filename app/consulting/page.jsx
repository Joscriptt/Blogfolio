"use client";

import { CiMail } from "react-icons/ci";
import { FcCheckmark } from "react-icons/fc";
import { TbCopy } from "react-icons/tb";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const origin =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";

const inviteUrl = `hey@josephhjamess46@gmail.com`;

function Consultpage() {
  const [copied, setCopied] = useState(false);
  const [copiedMentor, setCopiedMentor] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  const onCopyMentor = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopiedMentor(true);

    setTimeout(() => {
      setCopiedMentor(false);
    }, 1000);
  };
  return (
    <div className=" max-w-5xl md:max-w-3xl lg:max-w-[650px]  lg:mx-auto mx-auto mt-24 p-5">
      <h1 className="text-4xl mt-10 font-PoppinsBold  text-sm:text-4xl xl:text-5xl  bg-clip-text text-transparent bg-gradient-to-r  from-neutral-500 to-[#382504] dark:to-neutral-100 text-neutral-200  ">
        Consulting
      </h1>
      <p className="my-5 font-PoppinsRegular">
        Companies hire me to understand the landscape of low/no-code technology
        and get guidance through the transition to this new technology. I also
        mentor designers and builders who want to start out in the nocode space.
      </p>

      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        className="dark:bg-neutral-800/30 border border-neutral-700 border-opacity-30 p-6  my-7  rounded-md"
      >
        <div className="flex items-center gap-x-4">
          <h4 className="font-bold font-PoppinsBold text-lg">
            Mentoring for Designers
          </h4>
          <div className="h-7  px-2 rounded-md bg-black  dark:bg-neutral-800">
            <span className="dark:text-neutral-400 text-sm text-white ">
              $99/230min
            </span>
          </div>
        </div>
        <p className="text-zinc-500 mt-3 text-sm font-p leading-6">
          In this 30-minute mentoring session, we will have the opportunity to
          dive into various topics related to your design or nocode
          (Framer/Webflow) journey. You can tell me your topics of interest
          before the session or bring them up during the conversation. This
          session is not about evaluating your work.
        </p>

        <div className="lg:flex gap-x-6 items-center mt-5">
          {/* You can link this to ur pricing page */}
          <Link href={"/about"}>
            <button className="dark:bg-neutral-400/40 border border-neutral-700 border-opacity-40 p-2 shrink-0  h-11  rounded-md w-full lg:w-36 text-sm mt-2 lg:mt-0 font-InterBold">
              Book a mentoring
            </button>
          </Link>

          <button
            className="dark:bg-neutral-800/40 border border-neutral-700 border-opacity-40 p-2 shrink-0  h-11  flex  items-center  rounded-md w-full lg:w-36 text-sm mt-2 lg:mt-0"
            onClick={onCopyMentor}
          >
            <AnimatePresence>
              {copiedMentor ? (
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
                  animate={{
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 600,
                      damping: 40,
                      duration: 0.5,
                    },
                  }}
                  exit={{ scale: 0.8 }}
                >
                  <TbCopy className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>

            <span className=" text-center w-full">
              {copiedMentor ? (
                <span className="text-neutral-600 font-InterBold">
                  copied URL
                </span>
              ) : (
                "Save for later"
              )}
            </span>
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.2, delay: 0.4 },
        }}
        // transition={{ delay: 0.8 }}
        className="bg-neutral-800/30 border border-neutral-700 border-opacity-30 p-6  my-7  rounded-md"
      >
        <div className="flex items-center gap-x-4">
          <h4 className="font-bold font-PoppinsBold text-lg">
            Consulting for Companies
          </h4>
          <div className="h-7  px-2 rounded-md bg-neutral-800">
            <span className="text-neutral-400 text-sm ">$299/hour</span>
          </div>
        </div>
        <p className="text-zinc-500 mt-3 text-sm font-p leading-6">
          Let's talk about the no/low code tool landscape, ask me anything about
          setting up your project right, which CMS you should use, what the
          possibilities of Low/NoCode are, and everything else that comes into
          your mind.
        </p>

        <div className="lg:flex gap-x-6 items-center mt-5">
          {/* You can link this to ur pricing page */}
          <Link href={"/about"}>
            <button className="dark:bg-neutral-400/40 border border-neutral-700 border-opacity-40 p-2 shrink-0  h-11  rounded-md w-full lg:w-36 text-sm mt-2 lg:mt-0 font-InterBold">
              Book a mentoring
            </button>
          </Link>

          <button
            className="dark:bg-neutral-800/40 border border-neutral-700 border-opacity-40 p-2 shrink-0  h-11  flex  items-center  rounded-md w-full lg:w-36 text-sm mt-2 lg:mt-0"
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
                  animate={{
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 600,
                      damping: 40,
                      duration: 0.5,
                    },
                  }}
                  exit={{ scale: 0.8 }}
                >
                  <TbCopy className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>

            <span className=" text-center w-full">
              {copied ? (
                <span className="text-neutral-600 font-InterBold">
                  copied URL
                </span>
              ) : (
                "Save for later"
              )}
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Consultpage;
