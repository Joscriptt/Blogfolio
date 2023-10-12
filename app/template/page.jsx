import Link from "next/link";
import React from "react";

import { format, parseISO } from "date-fns";
import Image from "next/image";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/email`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

async function page() {
  let posts = await getData();

  return (
    <div className=" max-w-5xl md:max-w-3xl lg:max-w-[650px]  lg:mx-auto mx-auto mt-24 p-5">
      <h1 className="text-4xl font-PoppinsBlack font-bold  text-sm:text-4xl xl:text-5xl  bg-clip-text text-transparent bg-gradient-to-r  from-neutral-500 to-[#382504] dark:to-neutral-100 text-neutral-200  ">
        Joscript Website Templates
      </h1>

      <svg
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />

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

      <div className="mt-14">
        <div>
          {posts.map((project, idx) => (
            <Link key={project?.title} href={`post/${project._id}`}>
              <div className="h-80 w-full relative my-10 rounded-lg overflow-hidden ">
                <div
                  className={` absolute top-2 z-10 rounded-full object-cover  flex  p-1 dark:bg-black/75 backdrop-blur-sm`}
                >
                  <Image
                    src="/img/paint.jpg"
                    width={100}
                    height={100}
                    alt="propic"
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
                  width={1000}
                  height={400}
                  className=" relative  h-full dark:opacity-50 w-full object-cover"
                  src={project.image[0].base64}
                  alt="post"
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
