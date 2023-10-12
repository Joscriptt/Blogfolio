import React from "react";

import HoverBack from "@/app/components/HoverBack";
import Image from "next/image";
import parser from "html-react-parser";
import ImageAnimation from "@/app/components/ImageAnimation";
import Link from "next/link";

import { format, parseISO } from "date-fns";

const getSinglePost = async (id) => {
  let res = await fetch(`http://localhost:3000/api/email/${id}`);
  return res.json();
};

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/email`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

async function page({ params }) {
  const { id } = params;
  let single = await getSinglePost(id);

  const posts = await getData();

  return (
    <div className=" max-w-5xl lg:max-w-[750px]  lg:mx-auto mx-auto mt-20 p-5 sm:pl-8 md:pl-20 lg:pl-0">
      <div className="w-fit">
        <HoverBack />
        <div>
          <h1 className="text-4xl  text-sm:text-4xl xl:text-5xl  bg-clip-text text-transparent bg-gradient-to-r  from-neutral-500 to-[#382504] dark:to-neutral-100 text-neutral-200   mt-8 font-PoppinsBold">
            {single.title}
          </h1>
          <p className="text-base mt-4 font-PoppinsMedium dark:text-[#7D8084]">
            {single.summary}
          </p>

          <button className="dark:bg-neutral-900 mt-3  p-1 px-3  rounded-md w-fit text-[10px] dark:text-[#7D8084] border border-neutral-700/50 uppercase font-PoppinsMedium ">
            {single.tags}
          </button>
        </div>

        <ImageAnimation single={single} />

        <div className="my-4 dark:text-[#83868A]">{parser(single.content)}</div>

        <div className="border md:flex mt-3 md:justify-around md:items-center  text-sm border-opacity-30 border-neutral-700  rounded-lg  ">
          <div className="flex items-center p-4 gap-x-3 md:border-r border-opacity-30 border-b border-neutral-700  md:p-10 ">
            <p>{single.howManyWidgets}</p>
            <span className="text-neutral-500 md:mr-12">{single.widgets}</span>
          </div>

          <div className="flex items-center p-4 gap-x-3 md:border-r border-opacity-30 border-b border-neutral-700 md:p-10  ">
            <p>{single.madeFor}</p>
            <span className="text-neutral-500 md:mr-12">
              {single.designType}
            </span>
          </div>

          <div className="flex items-center p-4 gap-x-3 md:border-0 border-opacity-30 border-b border-neutral-700 md:p-10  ">
            <p>{single.howManythemes}</p>
            <span className="text-neutral-500 md:mr-12">{single.themes}</span>
          </div>
        </div>

        <div className="md:flex  lg:flex items-center gap-x-3 mt-5">
          <button
            className="dark:bg-neutral-800/5 bg-black px-4 py-2 rounded-md border border-zinc-800 text-sm text-white
                       font-InterBold md:w-full md:mt-2 lg:mt-0  w-full"
          >
            View Demo
          </button>
          <button className="dark:bg-[#ff5715]   py-2 rounded-md border dark:border-zinc-800/60 text-sm font-InterBold md:w-full mt-3 dark:text-black w-full">
            Buy Now - ${single.price}
          </button>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-xl font-PoppinsBold">More templates</h2>
        <div>
          {posts.map((project, idx) => (
            <Link key={project?.title} href={`post/${project._id}`}>
              <div className="h-80 w-full relative my-10 rounded-lg overflow-hidden ">
                <div
                  className={` absolute top-2 z-10 rounded-full object-cover  flex  p-1 dark:bg-black/75 backdrop-blur-sm`}
                >
                  <Image
                    width={8}
                    height={8}
                    alt="Holder"
                    // src="/img/paint.jpg"
                    className="w-8 h-8 object-cover border-[#f02c56] border-2 rounded-full  "
                  />
                  <div className="ml-2 pr-4">
                    <p className="text-xs font-PoppinsMedium">JoScript</p>
                    <p className="text-xs font-light">@{project.tags}</p>
                  </div>
                </div>
                <span className="absolute top-3 z-10 right-2 font-PoppinsRegular text-sm">
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
                  width={400}
                  height={400}
                  className=" relative  h-full dark:opacity-50 w-full object-cover"
                  src={project.image[0].base64}
                  alt="project "
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
