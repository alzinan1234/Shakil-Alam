import React from "react";
import "./About.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="py-20">
        <div className="maxWidth mx-auto">
          <div className="title-line"></div>
          <div>
            <div className="flex items-center justify-center">
              <h1 className="title uppercase text-center flex items-center justify-center ">
                About me
              </h1>
            </div>
            <div className="title-line"></div>
            <div>
              <p className="p-title">
                Hello, <span className="text-green-600">I am Shakil Alam</span>,
                3+ years of hands-on experience in Manual and Automation
                testing. Strong understanding of Software Development Life Cycle
                (SDLC), ISO standards, and Agile methodology. Proficient in
                developing test plans, test cases, and others required all test
                activities from scratch for both manual and automated testing.
                <span>
                  I graduated from{" "}
                  <span className="text-green-600">Southeast University </span>{" "}
                  of Science & Technology with a Bachelors degree in Computer
                  Science & Engineering
                </span>
                <span className="text-green-600">
                  {" "}
                  I am SQA Engineer (SQA).
                </span>{" "}
                a software development company currently specialising in Mobile
                applications development in the iOS App Store with more than 10+
                subscription-based mobile applications.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center">
                {/* <Image
                  className="rounded-full w-32 h-32 object-cover"
                  src="https://via.placeholder.com/150"
                  alt="Profile Pic"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
