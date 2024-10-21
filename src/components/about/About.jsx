import React from "react";
import "./About.css";
import image from "../../app/assets/home/shanto-vsi2.png";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="py-20 px-4">
      <div className="maxWidth mx-auto">
        <div className="title-line mb-10"></div>
        <div className="text-center mb-10 flex justify-center items-center">
          <h1 className="text-4xl md:text-[84px] mt-8 font-bold uppercase ">
            About me
          </h1>
        </div>
        <div className="title-line mt-4"></div>

        <div className=" blog-Bg flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Text Section */}

          <div className="lg:w-1/2 text-center lg:text-left mb-10">
            <div>
              <h1 className="text-black font-extrabold text-3xl  md:mb-5">
                Experience & Education
              </h1>
            </div>
            <p className="text-lg md:text-xl">
              Hello,{" "}
              <span className="text-green-600 font-semibold">
                I am Shakil Alam
              </span>
              , 3+ years of hands-on experience in Manual and Automation
              testing. Strong understanding of Software Development Life Cycle
              (SDLC), ISO standards, and Agile methodology. Proficient in
              developing test plans, test cases, and other test activities for
              both manual and automated testing.
            </p>
            <p className="mt-4">
              I graduated from{" "}
              <span className="text-green-600 font-semibold">
                Southeast University
              </span>
              with a Bachelor’s degree in Computer Science & Engineering. I am
              currently working as a{" "}
              <span className="text-green-600 font-semibold">SQA Engineer</span>{" "}
              in a software development company specializing in mobile
              applications. We have more than 10+ subscription-based mobile
              applications in the iOS App Store.
            </p>
          </div>

          {/* Image & Social Section */}
          <div className="flex flex-col items-center">
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] mb-7 mt-10 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center bg-image"></div>
              <Image
                className="rounded-full border-radius"
                src={image}
                alt="Profile Pic"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex space-x-4">
              <a
                href="/"
                className="text-[40px] text-[#19d532] hover:text-green-500 transition-all duration-500"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-[40px] text-[#19d532] hover:text-green-500 transition-all duration-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-[40px] text-[#19d532] hover:text-green-500 transition-all duration-500"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-[40px] text-[#19d532] hover:text-green-500 transition-all duration-500"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-[40px] text-[#19d532] hover:text-green-500 transition-all duration-500"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
