import About from "@/components/About/About.jsx";
import { Banner } from "@/components/banner/Banner.jsx";

import Blog from "@/components/Blog/Blog.jsx";
import Education from "@/components/Education/Education.jsx";
import Experience from "@/components/Experiences/Experience.jsx";
import Expertise from "@/components/Expertise/Expertise.jsx";
import MarketPlace from "@/components/MarketPlace/MarketPlace.jsx";
import Projects from "@/components/Projects/Projects.jsx";

import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Experience />
      <Education />
      <Expertise />
      <Projects />
      <Blog />
      <MarketPlace />
    </div>
  );
};

export default Home;
