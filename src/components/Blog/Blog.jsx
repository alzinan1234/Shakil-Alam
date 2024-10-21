import Image from "next/image";
import moduleName from "../../app/assets/reviews/ccddb3583f1.avif";
import images2 from "../../app/assets/reviews/image2.avif";
import images3 from "../../app/assets/reviews/image3.avif";
import React from "react";

const Blog = () => {
  const blogData = [
    {
      title: "Exploring Next.js for Web Development",
      description:
        "Next.js is a powerful framework built on top of React. It simplifies the process of building optimized web applications...",
      imageUrl: moduleName,
      link: "/blog/nextjs-web-development",
    },
    {
      title: "Tailwind CSS for Rapid UI Development",
      description:
        "Tailwind CSS is a utility-first CSS framework that allows developers to quickly build modern and responsive designs...",
      imageUrl: images2,
      link: "/blog/tailwind-css-development",
    },
    {
      title: "React Hooks: The Essentials",
      description:
        "Learn the essentials of React Hooks, a powerful feature that allows you to manage state and side effects in function components...",
      imageUrl: images3,
      link: "/blog/react-hooks-essentials",
    },
  ];
  return (
    <>
      <div>
        <div className="py-28">
          <div className="maxWidth mx-auto ">
            <div className="title-line mb-10"></div>
            <div className="text-center mb-10 flex justify-center items-center">
              <h1 className="text-4xl md:text-[84px] mt-8 font-bold uppercase ">
                blog
              </h1>
            </div>
            <div className="title-line mt-4"></div>
          </div>
        </div>
      </div>
      {/* title end */}

      {blogData.map((blog, index) => {})}
    </>
  );
};

export default Blog;
