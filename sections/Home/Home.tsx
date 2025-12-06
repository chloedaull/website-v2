import React from "react";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Resume from "./Resume/Resume";
import Image from "next/image";

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
    </div>
  );
};

export default Home;
