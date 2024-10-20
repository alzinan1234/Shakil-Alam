import About from "@/components/About/About";
import { Banner } from "@/components/banner/Banner";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experiences/Experience";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
