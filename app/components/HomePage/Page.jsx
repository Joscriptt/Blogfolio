"use client";
import { useEffect, useState } from "react";
import { compareDesc, format, parseISO } from "date-fns";

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
];
import Link from "next/link";
import Copied from "@/app/components/Copied";
import Email from "@/app/components/Email";
import Typing from "@/app/components/Typing";
import Image from "next/image";

function page({ posts }) {
  return (
    <div className=" max-w-5xl lg:max-w-[750px]  lg:mx-auto mx-auto mt-20 p-7">
      <div>
        <h1 className="text-4xl font-PoppinsBold  sm:text-4xl xl:text-6xl  dark:text-neutral-200 mt-10 md:mt-0 ">
          Create your <br /> own <Typing />
        </h1>

        <div>
          <p className="dark:text-neutral-300/95 my-6 text-[14.4px] font-PoppinsMedium max-md:max-w-[400px] text-left">
            Sign up to the Creative Prosperity newsletter to get tons of
            valuable information on how to launch, grow, and monetize your
            design business. Sent out every two weeks right into your inbox!
          </p>
        </div>

        <Email />

        <p className="my-6 text-lg font-PoppinsMedium">Popular Templates</p>

        <svg
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="7"
                result="blur"
              />

              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1  0  0  0  0
                        0  1  0  0  0
                        0  0  1  0  0
                        0  0  0  17  -12"
                result="goo"
              />

              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>

        {posts.length === 0 ? (
          <p>No post yet</p>
        ) : (
          posts.map((project, idx) => (
            <Link key={project?.title} href={`post/${project._id}`}>
              <div className="h-80 w-full relative my-10 rounded-lg overflow-hidden ">
                <div
                  className={` absolute top-2 z-10 rounded-full object-cover  flex  p-1 dark:bg-black/75 backdrop-blur-sm`}
                >
                  <Image
                    width={300}
                    height={10}
                    src="/img/paint.jpg"
                    className="w-8 h-8 object-cover border-[#f02c56] border-2 rounded-full  "
                    alt="paint"
                  />
                  <div className="ml-2 pr-4">
                    <p className="text-xs font-PoppinsMedium">JoScript</p>
                    <p className="text-xs font-light">@{project.tags}</p>
                  </div>
                </div>
                <span className="absolute top-3 z-10 right-2 dark:text-white text-pink-600 font-PoppinsRegular text-sm">
                  {format(parseISO(project.createdAt), "LLLL d, yyyy")}
                </span>
                <div className="h-52 bg-gradient-to-b absolute  z-10 w-full bottom-0 from-black/0 via-black/80  to-black">
                  <h1 className="bigTexr absolute -z-[8]  bottom-1 mt-5 ">
                    <span className="gooey  font-PoppinsBold text-2xl uppercase leading-9 pl-2 dark:bg-[#101010] bg-[#ffffff] dark:text-neutral-400">
                      {project.title}
                    </span>
                  </h1>
                </div>

                <Image
                  width={1000}
                  height={700}
                  className=" relative  h-full dark:opacity-50 w-full object-cover"
                  src={project.image[0].base64}
                  alt=""
                />
              </div>
            </Link>
          ))
        )}
        {/* edit this */}

        <div className="border rounded-md border-neutral-700 border-opacity-40 p-3 mt-12">
          <p className=" text-lg font-PoppinsMedium">Free Guides</p>
          <p className="text-zinc-500 text-base w-80 lg:w-full font-PoppinsMedium">
            Previous Issues of The Creative Prosperity Newsletter
          </p>

          <div>
            <div className="flex items-center gap-x-4 mt-10 font-PoppinsMedium">
              <div className="bg-neutral-800/30 w-fit p-2 ">
                <Image
                  width={16}
                  height={16}
                  className="w-9 rounded-md"
                  src="/img/duck.png"
                  alt="duck"
                />
              </div>
              <div>
                <h5 className="font-InterMedium text-sm font-bold">
                  Building Systems as a Solopreneur
                </h5>
                <span className="text-zinc-400">Aug 7, 2023</span>
              </div>
            </div>
            <div className="flex items-center gap-x-4 mt-5">
              <div className="bg-neutral-800/30 w-fit p-2 ">
                <Image
                  width={16}
                  height={16}
                  className="w-9 rounded-md"
                  src="/img/dolphin.png"
                  alt="dolp"
                />
              </div>
              <div>
                <h5 className="font-PoppinsMedium text-sm font-bold">
                  The Reciprocity Law
                </h5>
                <span className="text-zinc-400">Jul 11, 2023</span>
              </div>
            </div>
            <div className="flex items-center gap-x-4 mt-5">
              <div className="bg-neutral-800/30 w-fit p-2 ">
                <Image
                  width={16}
                  height={16}
                  className="w-9 rounded-md"
                  src="/img/slip.png"
                  alt="slip"
                />
              </div>
              <div>
                <h5 className="font-PoppinsMedium text-sm font-bold">
                  Launch a product you (would) also use yourself
                </h5>
                <span className="text-zinc-400">Jul 9, 2023</span>
              </div>
            </div>
            <button className="dark:bg-neutral-800/60 mt-5 font-PoppinsMedium border border-neutral-700 border-opacity-40 p-2 shrink-0  h-11  rounded-md w-full  text-sm ">
              All Issues
            </button>
          </div>
        </div>

        <div className="border rounded-md border-neutral-700 border-opacity-40 p-5 mt-12">
          <p className=" text-lg font-PoppinsMedium">Stacks</p>
          <p className="text-zinc-500 text-base w-80 lg:w-full font-PoppinsRegular">
            Software and tools I use regularly.
          </p>

          <div className="group relative mt-10 ">
            {stacks.map((each, idx) => (
              <div
                key={idx}
                className="flex relative group items-center gap-x-4 mt-5"
              >
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
            <Link href={"/stack"}>
              <button className="dark:bg-neutral-800/60 mt-5 font-PoppinsMedium border border-neutral-700 border-opacity-40 p-2 shrink-0  h-11  rounded-md  w-full text-sm  ">
                All Tools
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl  sm:text-3xl  font-PoppinsBlack">
            About Joscript
          </h3>
          <p className="my-6 font-PoppinsRegular">
            Software designer & design engineering lead who's obsessed with
            code. Creating aesthetic and timeless{" "}
            <span className="underline text-neutral-700"> digital </span>
            products for designers and startups.
          </p>

          <div className="flex gap-x-6 items-center">
            <Copied />

            <Link href={"/about"}>
              <button className="dark:bg-neutral-800/40 border border-neutral-700 border-opacity-40 p-2 shrink-0  h-11 flex items-center justify-center gap-x-3 rounded-md w-32 lg:w-36 text-sm mt-2 lg:mt-0 font-PoppinsMedium">
                About
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
