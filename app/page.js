import React from "react";
import HomePage from "@/app/components/HomePage/Page";

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
  const posts = await getData();

  // console.log(posts);
  return (
    <div>
      <HomePage posts={posts} />
      {/* <HomePage /> */}
    </div>
  );
}

export default page;
