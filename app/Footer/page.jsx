import Link from "next/link";
import React from "react";

function page() {
  return (
    <footer className="border dark:border-neutral-800 border-t p-7 mt-10  w-full  ">
      <div className="flex justify-center w-full">
        <ul
          className="font-InterMedium text-sm gap-x-7
      grid lg:grid-cols-4  place-content-center lg:place-content-start gap-y-6 lg:gap-y-0
      "
        >
          <li>
            Buy this as a <span className="text-neutral-400">template</span>
          </li>
          {/* <div className="w-1 h-1 hidden lg:block rounded-full bg-[#40f877]" /> */}
          <li>
            Made by <span className="text-neutral-400"> JoScript</span>
          </li>
          {/* <div className="w-1 h-1 hidden lg:block rounded-full bg-[#40f877]" /> */}

          <li>
            Follow me on{" "}
            <Link
              className="text-neutral-400"
              href={"https://twitter.com/Joenaldo"}
            >
              twitter
            </Link>
          </li>
          {/* <div className="w-1 h-1 hidden lg:block rounded-full bg-[#40f877]" /> */}

          <li className="text-neutral-400">
            ©{new Date().getFullYear()} Joscript Inc
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default page;
