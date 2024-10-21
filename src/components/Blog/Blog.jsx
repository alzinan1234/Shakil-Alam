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

      {/* Blog content */}
      <div className="maxWidth mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <a href={blog.link}>
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                  width={500}
                  height={300}
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <span className="text-blue-600 hover:underline">
                    Read more
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
