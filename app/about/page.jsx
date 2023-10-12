"use client";

import { CiMail } from "react-icons/ci";
import { FcCheckmark } from "react-icons/fc";
import { TbCopy } from "react-icons/tb";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const origin =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";

const inviteUrl = `hey@josephhjamess46@gmail.com`;

function Aboutpage() {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className=" max-w-5xl md:max-w-3xl lg:max-w-[650px]  lg:mx-auto mx-auto mt-24 p-5">
      <h1 className="text-4xl font-PoppinsBlack  text-sm:text-4xl xl:text-5xl  bg-clip-text text-transparent bg-gradient-to-r  from-neutral-500 to-[#382504] dark:to-neutral-100 text-neutral-200  ">
        About JoScript
      </h1>
      <h4 className="my-5 font-PoppinsMedium">
        London aesthetics with American spirit.
      </h4>
      <p className="text-neutral-500 my-6 text-sm font-PoppinsRegular leading-6">
        I'm a UK Software Engineer I love grids, simplicity & good coffee. Apart
        being a practising minimalist and simple design addict, I’m also deeply
        into NoCode technologies and a truly typography enthusiast. As an
        autodidactic developer, I’m sensitive about important technical aspects
        and always seeking for self-improvement. I’m from London and based near
        Zurich, talking German and English natively. But for someone with roots
        in Chicago, Illinois, it is typical that I like to speak French. Don't
        I?
      </p>

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="dark:bg-neutral-800/30 bg-black text-white p-6  my-4 rounded-md"
      >
        <h4 className="font-bold font-PoppinsRegular">Manifesto.</h4>
        <p className="text-zinc-500 mt-3 text-sm font-InterRegular leading-6">
          I design polished user interfaces for the web and everything beyond. I
          craft digital experiences with close attention and absolute care. Not
          just for high conversion rates, but for them, the people who use it. I
          make it shine. Lovely to use. I make it my best humanly possible.
          <span className="italic text-neutral-300"> Every time.</span>
        </p>
      </motion.div>

      <p className="text-neutral-500 my-6 text-sm font-PoppinsRegular leading-6">
        Design is at the heart of how I build an emotional connection between
        your brand and your customers. Through my background in human computer
        interaction design and requirements engineering, I know exactly how to
        design your digital product to deliver great value for your business.
      </p>

      <p className="text-neutral-500 my-6 text-sm font-PoppinsRegular leading-6">
        I’m always looking to collaborate on interesting projects with great
        people. Need a hand? I have two – Nice to meet you!
      </p>

      <div className="flex gap-x-6 items-center">
        <Link href={"/consulting"}>
          <button className="dark:bg-neutral-800/40 border font-PoppinsMedium border-neutral-700 border-opacity-40 p-2 shrink-0  h-11 flex items-center justify-center gap-x-3 rounded-md w-40 font-InterBold lg:w-36 text-sm mt-2 lg:mt-0">
            Consult me
          </button>
        </Link>

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

          <span className="font-PoppinsMedium">
            {copied ? "copied" : "E-Mail"}
          </span>
        </button>
      </div>

      <div className="dark:bg-neutral-900 border border-neutral-700 border-opacity-40 md:flex gap-x-4 mt-16 rounded-md overflow-hidden ">
        <div className="dark:bg-neutral-800/20 bg-black p-3 flex md:w-72     items-center justify-center">
          <Image
            width={30}
            height={30}
            className="md:w-16 w-28"
            src="/img/shake.gif"
            alt="shake"
          />
        </div>
        <div className="flex-col flex p-5">
          <div className="">
            <span className="font-PoppinsBold text-sm">
              Grow &amp; monetize your design business
            </span>
            <br />
            <p className="text-[14px] text-neutral-400/70 mt-2">
              Every two weeks, you'll get 1 actionable tip to launch, grow, and
              monetize your design business.
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

export default Aboutpage;
