import React from "react";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Resume from "./Resume/Resume";
import Image from "next/image";
import Footer from "./Footer/Footer";
//import { Project } from "../Project/Project";
//import { projects } from "@/constant/constant"; <Project projects={projects} />

const Home = () => {
  return (
    <div className="overflow-hidden" id="about">
      <About />
      <Experience />
      <div className="relative h-[100vh] w-full">
        <Image
          src="/picHat.JPG"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Resume />
      <Footer />
    </div>
  );
};

export default Home;
