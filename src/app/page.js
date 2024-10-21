import About from "@/components/About/About";
import { Banner } from "@/components/banner/Banner";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experiences/Experience";
import Expertise from "@/components/Expertise/Expertise";

import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Experience />
      <Education />
      <Expertise />
    </div>
  );
};

export default Home;
