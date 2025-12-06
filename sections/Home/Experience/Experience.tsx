import React from "react";
import { Timeline } from "@/component/Timeline";
import { experiences } from "@/constant/constant";

const Experience = () => {
  return (
    <div className="w-full" id="work">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experience;
{
  /*"use client";

import { experiences } from "@/constant/constant";
import React, { useRef, useState, useEffect } from "react";

const Experience = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionHeight = rect.height;

        const distanceFromTop = Math.min(Math.max(-rect.top, 0), sectionHeight);
        const rawProgress =
          distanceFromTop / Math.max(sectionHeight - viewportHeight, 1);

        const clamped = Math.min(Math.max(rawProgress, 0), 1);
        setScrollProgress(clamped * 100);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }, []);

    return scrollProgress;
  };

  const scrollProgress = useScrollProgress();

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 px-4 sm:px-8 relative"
    >
      <div className="max-w-6xl mx-auto relative">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#3A2F2A] mb-12 text-center">
          Experience
        </h1>

        <div className="absolute left-2 sm:left-4 top-0 h-full w-[3px] bg-gray-200 rounded-full overflow-hidden">
          <div
            className="w-full h-16 bg-[#0a0a0a] rounded-xl shadow-[0_0_20px_5px_rgba(0,255,255,0.4)] transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        <div className="pl-8 sm:pl-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col lg:flex-row gap-10 sm:gap-16 mt-16"
            >
              <div className="lg:w-1/3 space-y-2 sm:space-y-3 sticky top-20 h-fit">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
                  {exp.title}
                </h2>
                <p className="text-lg sm:text-xl opacity-80">{exp.company}</p>
                <p className="text-md sm:text-lg opacity-60">{exp.location}</p>
                <p className="text-sm sm:text-md opacity-60">{exp.period}</p>
              </div>

              <div className="lg:w-2/3 space-y-3 sm:space-y-4">
                {exp.bullets.map((bullet, index) => (
                  <p key={index} className="text-md sm:text-lg opacity-80">
                    • {bullet}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;*/
}
