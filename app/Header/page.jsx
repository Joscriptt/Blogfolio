"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

// INSTALL REACT-ICONS TO ACCESS THESE ICONS
import {
  PiTwitterLogoThin,
  PiYoutubeLogoThin,
  PiCompassToolThin,
  PiFramerLogoThin,
  PiReadCvLogoThin,
  PiPlus,
  PiNewspaperClippingThin,
} from "react-icons/pi";

import { SiConcourse, SiSparkpost } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { VscSend } from "react-icons/vsc";
import { GiFairyWand } from "react-icons/gi";
import { LuSettings2 } from "react-icons/lu";

import Link from "next/link";
import { usePathname } from "next/navigation";

// twMerge

import { twMerge } from "tailwind-merge";

// Framer Motion

import { AnimatePresence, motion } from "framer-motion";

import Snowfall from "react-snowfall";
import Image from "next/image";

let item = [
  {
    id: 1,
    content: "Solopreneur 🎊",
    imgURL: "/img/sheep.jpg",
  },
  {
    id: 2,
    content: "Software Dev 🔗",
    imgURL: "/img/lion.jpg",
  },
  {
    id: 3,
    content: "Web Dev 🚀",
    imgURL: "/img/gorilla.jpg",
  },
];

let itemImg = [
  {
    id: 3,
    imgURL: "/img/sheep.jpg",
  },
  {
    id: 4,
    imgURL: "/img/lion.jpg",
  },
  {
    id: 4,
    imgURL: "/img/gorilla.jpg",
  },
];

export const projects = [
  {
    title: "Explore",
    icon: <PiCompassToolThin />,
    link: "/",
  },
  {
    title: "Templates",
    icon: <PiFramerLogoThin />,
    link: "/template",
  },
  {
    title: "Courses",
    icon: <SiConcourse />,
    link: "/courses",
  },

  {
    title: "Newsletter",
    icon: <CiMail />,
    link: "newsletter",
  },
  {
    title: "Consulting",
    icon: <VscSend />,
    link: "consulting",
  },
  {
    title: "Post",
    icon: <GiFairyWand />,
    link: "/post",
  },
  {
    title: "Stack",
    icon: <LuSettings2 />,
    link: "stack",
  },
  {
    title: "Blog",
    icon: <SiSparkpost />,
    link: "/blog",
  },

  {
    title: "Twitter",
    icon: <PiTwitterLogoThin />,
    link: "https://twitter.com/Joenaldo",
  },
  {
    title: "Youtube",
    icon: <PiYoutubeLogoThin />,
    link: "https://youtube.com/@joscript7846?si=uqkyWQXr07ZKM5um",
  },
  {
    title: "Read CV",
    icon: <PiReadCvLogoThin />,
    link: "https://github.com/Joscriptt",
  },

  // ...rest of the projects
];

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 500, damping: 60 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

function Headerpage() {
  let path = usePathname();

  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  // let [hoveredIndexx, setHoveredIndexx] = useState(null);

  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  let [hoveredIndex, setHoveredIndex] = useState(null);
  let [resourcesIndex, setResourcesIndex] = useState(null);
  let [socialIndex, setSocilaIndex] = useState(null);
  let [hoveredIndexBigScreen, setHoveredIndexBigScreen] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= item.length - 1) return 0;
        return state + 1;
      });
    }, 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Snowfall
        snowflakeCount={70}
        color="grey"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
        }}
        speed={"140"}
        radius={"12"}
      />
      <div
        className={`fixed top-0 z-40 dark:bg-[#161616] backdrop-blur-md px-7  flex items-center h-20 border-b border-neutral-900 border-opacity-10 dark:border-neutral-800 w-full `}
      >
        {/* hide this on a small device */}
        <div className="flex justify-between items-center w-full">
          <Link href={"/"}>
            <div className="flex  gap-x-2">
              <Image
                width={100}
                height={100}
                className="w-11 h-11 object-cover ring-1 p-1 rounded-full"
                src="/img/gorilla.jpg"
                alt=""
              />
              <div className="leading-5">
                <h4>JoScriptt</h4>
                <AnimatePresence>
                  <motion.div
                    key={item[index].id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ ease: "easeInOut" }}
                    style={{ position: "absolute" }}
                  >
                    <span className="text-neutral-400">
                      {item[index].content}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Link>

          {!isOpen && (
            <button
              className="fancy-burger lg:hidden mr-5 "
              onClick={() => setIsOpen(!isOpen)}
            >
              Open
            </button>
          )}
        </div>

        <motion.nav
          initial={false}
          animate={isOpenDropDown ? "open" : "closed"}
          className="mt-[6.5rem] hidden md:block"
        >
          <motion.div
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpenDropDown(!isOpenDropDown)}
            className="dark:bg-neutral-700  bg-black cursor-pointer text-white dark:text-neutral-300  px-3 h-8 gap-x-4 mr-3 flex items-center justify-between  rounded-md"
          >
            <span>Create</span>
            <PiPlus />
          </motion.div>
          <motion.ul
            className="dark:bg-neutral-700 backdrop-blur-md bg-neutral-100/75 border border-neutral-200 border-opacity-10 dark:border-neutral-800 mt-2  flex flex-col w-40 "
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",

                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",

                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpenDropDown ? "auto" : "none" }}
          >
            <Link href="/post">
              <motion.div
                variants={itemVariants}
                className="flex group items-center justify-between  gap-x-2 p-3"
              >
                <div className="flex cursor-pointer items-center gap-x-2 justify-between">
                  <SiSparkpost className="group-hover:text-[#40f877]" />
                  <span className="group-hover:text-[#40f877] text-neutral-500 ">
                    Blog Post
                  </span>
                </div>
                <Image
                  width={20}
                  height={20}
                  className="w-6"
                  src="/img/rocket.png"
                  alt="rocket"
                />
              </motion.div>
            </Link>

            <Link href="/newsletter">
              <motion.div
                variants={itemVariants}
                className="flex group items-center justify-between  gap-x-2 p-3"
              >
                <div className="flex cursor-pointer items-center gap-x-2 justify-between">
                  <PiNewspaperClippingThin className="group-hover:text-[#40f877]" />
                  <span className="group-hover:text-[#40f877] text-neutral-500 ">
                    Newsletter
                  </span>
                </div>
                <Image
                  width={20}
                  height={20}
                  className="w-6"
                  src="/img/newsletter.png"
                  alt=""
                />
              </motion.div>
            </Link>
          </motion.ul>
        </motion.nav>

        <div className="relative z-50">
          <Switch checked={checked} setChecked={setChecked} />
        </div>
      </div>

      <div className="dark:bg-[#1C1C1C] bg-white hidden border border-r border-t-0 border-b-0 border-l-0 border-opacity-10 border-neutral-700 top-0 lg:flex  shadow-lg fixed w-[16rem] p-5 left-0 z-50 h-screen">
        <div className="w-full">
          <Link href={"/"}>
            <div className="flex gap-x-2">
              <AnimatePresence>
                <motion.div
                  key={item[index].id}
                  initial={{ y: 20, opacity: 0, transition: {} }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 1 },
                  }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ ease: "easeInOut" }}
                  style={{ position: "fixed " }}
                >
                  <Image
                    width={100}
                    height={100}
                    className="w-11 h-11 object-cover ring-1 p-1 rounded-full"
                    src={itemImg[index].imgURL}
                    alt="url"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="leading-5 relative left-12 w-full">
                <h4 className="font-PoppinsMedium">JoScript full</h4>
                <AnimatePresence>
                  <motion.div
                    key={item[index].id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ ease: "easeInOut" }}
                    style={{ position: "absolute" }}
                  >
                    <span className="dark:text-neutral-400 w-full font-PoppinsRegular text-sm">
                      {item[index].content}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Link>
          <div className="overflow-y-auto mt-14 h-screen scroll-smooth scrollbar-hide">
            <ul>
              {projects.slice(0, 6).map((project, idx) => (
                <div
                  key={project?.link}
                  className="relative group  my-1 block p-1 h-full w-full "
                  onMouseEnter={() => setHoveredIndexBigScreen(idx)}
                  onMouseLeave={() => setHoveredIndexBigScreen(null)}
                >
                  <AnimatePresence>
                    {hoveredIndexBigScreen === idx && (
                      <motion.span
                        className="absolute inset-0 h-full w-full  gap-x-3 items-center  pl-5 max-w-md border-2 border-[#40f877] drop-shadow-md rounded-lg bg-[#40f877]/10 dark:text-white"
                        layoutId="hoverBackground"
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

                  {path === project.link && (
                    <motion.div className="dark:bg-[#2B2B2B]  text-neutral-200 p-0 rounded-md absolute inset-0" />
                  )}
                  <div className=" rounded-md h-full w-full text-white dark:bg-[#2b2b2b7e]/10  overflow-hidden  p-2 relative z-50">
                    <div className="relative  z-50">
                      <Link href={project.link}>
                        <div className="flex group items-center  gap-x-3">
                          <span className="group-hover:text-[#40f877] text-neutral-500">
                            {project.icon}
                          </span>
                          <p
                            className={`${
                              path === project.link && "dark:text-neutral-200"
                            } text-sm bg-clip-text text-transparent dark:bg-gradient-to-r  from-neutral-500 to-neutral-200 dark:to-neutral-100 font-PoppinsMedium bg-slate-800   `}
                          >
                            {project.title}
                          </p>
                        </div>
                      </Link>
                      {/* <p className=" text-zinc-400  leading-relaxed text-sm">
                          {project.description}
                        </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </ul>

            <p className="my-3 text-[11px] text-neutral-400 ml-3  uppercase">
              Resources
            </p>

            <ul>
              {projects.slice(6, 8).map((project, idx) => (
                <div
                  key={project?.link}
                  className="relative group  my-1 block p-1 h-full w-full "
                  onMouseEnter={() => setResourcesIndex(idx)}
                  onMouseLeave={() => setResourcesIndex(null)}
                >
                  {path === project.link && (
                    <motion.div className="dark:bg-[#2B2B2B] text-neutral-200 p-0 rounded-md absolute inset-0" />
                  )}
                  <div className=" rounded-md h-full w-full text-white dark:bg-[#2b2b2b7e]/10  overflow-hidden  p-2 relative z-50">
                    <div className="relative z-50">
                      <Link href={project.link}>
                        <div className="flex group items-center  gap-x-3">
                          <span className="group-hover:text-[#40f877] text-neutral-500">
                            {project.icon}
                          </span>
                          <p
                            className={`${
                              path === project.link && "dark:text-neutral-200"
                            } text-sm bg-clip-text text-transparent dark:bg-gradient-to-r  from-neutral-500 to-neutral-200 dark:to-neutral-100 bg-slate-800
                            group-hover:text-[#40f877] font-PoppinsMedium
                            `}
                          >
                            {project.title}
                          </p>
                        </div>
                      </Link>
                      {/* <p className=" text-zinc-400  leading-relaxed text-sm">
                          {project.description}
                        </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </ul>

            <p className="my-3 text-[11px] text-neutral-400 ml-3  uppercase">
              Social
            </p>

            <ul>
              {projects.slice(8, 11).map((project, idx) => (
                <div
                  key={project?.link}
                  className="relative group  my-2 block p-1 h-full w-full "
                  onMouseEnter={() => setSocilaIndex(idx)}
                  onMouseLeave={() => setSocilaIndex(null)}
                >
                  <AnimatePresence>
                    {socialIndex === idx && (
                      <motion.span
                        className="absolute inset-0 h-full w-full bg-slate-800 block  rounded-md p-1   border dark:border-[#0952a5]/30 border-[#704705]  gap-x-3 items-center  pl-5 max-w-md bg-gradient-to-r  dark:from-[#0952a5]/60 from-45%% dark:via-transparent via-45% text-[#3a2503] from-[#f5a524]  dark:to-transparent to-100% to-[#704705]   dark:text-white"
                        layoutId="hoverBackground"
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

                  {path === project.link && (
                    <motion.div className="dark:bg-[#2B2B2B] bg-[#2e53db] text-neutral-200 p-0 rounded-md absolute inset-0" />
                  )}
                  <div className=" rounded-md h-full w-full text-white bg-[#2b2b2b7e]/10  overflow-hidden  p-2 relative z-50">
                    <div className="relative  z-50">
                      <Link href={project.link}>
                        <div className="flex group items-center  gap-x-3">
                          <span>{project.icon}</span>
                          <p
                            className={`${
                              path === project.link && "text-neutral-200"
                            } text-sm text-neutral-400 group-hover:text-neutral-200 font-PoppinsMedium  `}
                          >
                            {project.title}
                          </p>
                        </div>
                      </Link>
                      {/* <p className=" text-zinc-400  leading-relaxed text-sm">
                          {project.description}
                        </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ x: !isOpen ? -500 : 0, opacity: 0 }}
          animate={{ x: isOpen ? 0 : -900, opacity: 1 }}
          exit={{ x: !isOpen ? -900 : 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className=" bg-white  w-full shadow-lg fixed p-5 z-40  lg:hidden  sm:hidden left-1 top-0  dark:bg-black/80 h-screen"
        >
          <div
            className="absolute top-4 right-20 bg-gradient-to-tl from-neutral-800 to-neutral-500 border-r-0 border-b-0 border border-t  px-5 flex items-center cursor-pointer justify-center  rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            close
          </div>
          <div
            className="w-[17rem] dark:bg-[#1C1C1C]   border border-neutral-700/30 top-0 left-0  lg:hidden md:hidden  fixed p-5 z-50
         h-screen"
          >
            <div className="flex gap-x-2">
              <Image
                width={100}
                height={100}
                className="w-11 h-11 object-cover ring-1 p-1 rounded-full"
                src="/img/gorilla.jpg"
                alt=""
              />
              <div className="leading-5">
                <h4>JoScriptt small page</h4>
                <AnimatePresence>
                  <motion.div
                    key={item[index].id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ ease: "easeInOut" }}
                    style={{ position: "absolute" }}
                  >
                    <span className="text-neutral-400">
                      {item[index].content}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="overflow-y-auto mt-7 h-screen scroll-smooth scrollbar-hide">
              <ul>
                {projects.slice(0, 6).map((project, idx) => (
                  <div
                    key={project?.link}
                    className="relative group  my-1 block p-1 h-full w-full "
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <AnimatePresence>
                      {hoveredIndex === idx && (
                        <motion.span
                          className="absolute inset-0 h-full w-full  gap-x-3 items-center  pl-5 max-w-md border-2 border-[#40f877] drop-shadow-md rounded-lg bg-[#40f877]/40 dark:text-white"
                          layoutId="hoverBackground"
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

                    {path === project.link && (
                      <motion.div className="dark:bg-[#2B2B2B] dark:text-neutral-200 p-0 rounded-md absolute inset-0" />
                    )}
                    <div className=" rounded-md h-full w-full dark:text-white bg-[#2b2b2b7e]/10  overflow-hidden  p-2 relative z-50">
                      <div className="relative  z-50">
                        <Link href={project.link}>
                          <div className="flex group items-center  gap-x-3">
                            <span>{project.icon}</span>
                            <p
                              className={`${
                                path === project.link && "dark:text-neutral-200"
                              } text-sm bg-clip-text  dark:bg-gradient-to-r  dark:from-neutral-500  dark:to-neutral-100 `}
                            >
                              {project.title}
                            </p>
                          </div>
                        </Link>
                        {/* <p className=" text-zinc-400  leading-relaxed text-sm">
                          {project.description}
                        </p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </ul>

              <p className="my-3 text-[11px] text-neutral-400 ml-3  uppercase">
                Resources
              </p>

              <ul>
                {projects.slice(6, 8).map((project, idx) => (
                  <div
                    key={project?.link}
                    className="relative group  my-2 block p-1 h-full w-full "
                    onMouseEnter={() => setResourcesIndex(idx)}
                    onMouseLeave={() => setResourcesIndex(null)}
                  >
                    <AnimatePresence>
                      {resourcesIndex === idx && (
                        <motion.span
                          className="absolute inset-0 h-full w-full bg-slate-800 block  rounded-md p-1   border dark:border-[#0952a5]/30 border-[#704705]  gap-x-3 items-center  pl-5 max-w-md bg-gradient-to-r  dark:from-[#0952a5]/60 from-45%% dark:via-transparent via-45% text-[#3a2503] from-[#f5a524]  dark:to-transparent to-100% to-[#704705]   dark:text-white"
                          layoutId="hoverBackground"
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

                    {path === project.link && (
                      <motion.div className="dark:bg-[#2B2B2B] bg-[#2e53db] text-neutral-200 p-0 rounded-md absolute inset-0" />
                    )}
                    <div className=" rounded-md h-full w-full text-white bg-[#2b2b2b7e]/10  overflow-hidden  p-2 relative z-50">
                      <div className="relative  z-50">
                        <Link href={project.link}>
                          <div className="flex group items-center  gap-x-3">
                            <span>{project.icon}</span>
                            <p
                              className={`${
                                path === project.link && "text-neutral-200"
                              } text-sm text-neutral-400 group-hover:text-neutral-200   `}
                            >
                              {project.title}
                            </p>
                          </div>
                        </Link>
                        {/* <p className=" text-zinc-400  leading-relaxed text-sm">
                          {project.description}
                        </p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </ul>

              <p className="my-3 text-[11px] text-neutral-400 ml-3  uppercase">
                Social
              </p>

              <ul>
                {projects.slice(8, 11).map((project, idx) => (
                  <div
                    key={project?.link}
                    className="relative group  my-2 block p-1 h-full w-full "
                    onMouseEnter={() => setSocilaIndex(idx)}
                    onMouseLeave={() => setSocilaIndex(null)}
                  >
                    <AnimatePresence>
                      {socialIndex === idx && (
                        <motion.span
                          className="absolute inset-0 h-full w-full bg-slate-800 block  rounded-md p-1   border dark:border-[#0952a5]/30 border-[#704705]  gap-x-3 items-center  pl-5 max-w-md bg-gradient-to-r  dark:from-[#0952a5]/60 from-45%% dark:via-transparent via-45% text-[#3a2503] from-[#f5a524]  dark:to-transparent to-100% to-[#704705]   dark:text-white"
                          layoutId="hoverBackground"
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

                    {path === project.link && (
                      <motion.div className="dark:bg-[#2B2B2B] bg-[#2e53db] text-neutral-200 p-0 rounded-md absolute inset-0" />
                    )}
                    <div className=" rounded-md h-full w-full text-white bg-[#2b2b2b7e]/10  overflow-hidden  p-2 relative z-50">
                      <div className="relative  z-50">
                        <Link href={project.link}>
                          <div className="flex group items-center  gap-x-3">
                            <span>{project.icon}</span>
                            <p
                              className={`${
                                path === project.link && "text-neutral-200"
                              } text-sm text-neutral-400 group-hover:text-neutral-200   `}
                            >
                              {project.title}
                            </p>
                          </div>
                        </Link>
                        {/* <p className=" text-zinc-400  leading-relaxed text-sm">
                          {project.description}
                        </p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Headerpage;

const Switch = ({ checked, setChecked }) => {
  // for our theme toggle
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  let toggleTheme = (e) => {
    setChecked(e.target.checked);
    setTheme(otherTheme);
  };

  return (
    <form className="flex space-x-4 items-center">
      <label
        htmlFor="checkbox"
        className={twMerge(
          twMerge(
            "h-7  px-1  flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[60px] relative cursor-pointer transition duration-200",
            checked ? "bg-cyan-500" : "bg-[#07070A] border-slate-800"
          )
        )}
      >
        <motion.div
          initial={{
            width: "20px",
            x: checked ? 0 : 32,
          }}
          animate={{
            height: ["20px", "10px", "20px"],
            width: ["20px", "30px", "20px", "20px"],
            x: checked ? 32 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          className={twMerge(
            "h-[20px] block rounded-full bg-white shadow-md z-10"
          )}
        ></motion.div>
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleTheme}
          className="hidden"
          id="checkbox"
        />
      </label>
    </form>
  );
};

// WITH TWMERGE U CAN EASILY RENDER CONDITION IN UR TAILWINDCSS
