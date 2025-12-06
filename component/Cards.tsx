"use client";

import React, { useState } from "react";
import { sections } from "@/constant/constant";

export default function Cards() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const handleTitleInteraction = (index: number) => {
    setActiveSection(index);
  };

  const handleTitleLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveSection(null);
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-12 sm:py-20 px-4 sm:px-8 min-h-[70vh]">
      <h2 className="text-4xl font-bold tracking-wide text-[#3A2F2A] text-center mb-12">
        About Me
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-16 min-h-[450px] sm:min-h-[500px] lg:min-h-[550px]">
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group cursor-pointer py-3 sm:py-4 lg:py-6 border-b border-gray-100 last:border-b-0 hover:border-[#A67B5B]/30 transition-all"
              onMouseEnter={() => handleTitleInteraction(index)}
              onMouseLeave={handleTitleLeave}
              onClick={() => handleTitleInteraction(index)}
              onTouchStart={() => handleTitleInteraction(index)}
            >
              <h2
                className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#3A2F2A] transition-all duration-300 leading-tight
                ${
                  activeSection === index
                    ? "text-[#A67B5B] translate-x-3 lg:translate-x-4 scale-[1.02]"
                    : "hover:text-[#A67B5B] hover:translate-x-1 lg:hover:translate-x-2"
                }`}
              >
                {section.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/3 flex items-stretch lg:items-center">
          <div className="w-full max-w-2xl flex-1 p-4 sm:p-6 lg:p-8 mx-auto bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl lg:shadow-2xl border border-[#A67B5B]/10 transition-all duration-500 min-h-[300px] sm:min-h-[350px]">
            {activeSection !== null ? (
              /* EXISTING CARD CONTENT */
              <div className="space-y-4 sm:space-y-6 h-full flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#3A2F2A]">
                  {sections[activeSection].title}
                </h3>

                <p className="text-base sm:text-lg text-[#3A2F2A]/80 leading-relaxed flex-1">
                  {sections[activeSection].description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
                  {sections[activeSection].listItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-[#A67B5B]/5 to-[#DCC4B5]/5 rounded-lg hover:bg-[#A67B5B]/10 transition-all group"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A67B5B] rounded-full scale-0 group-hover:scale-100 transition-transform origin-center flex-shrink-0" />
                      <span className="font-medium text-[#3A2F2A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              /* DEFAULT BOILERPLATE IMAGE CARD */
              <div className="flex flex-col items-center justify-center h-full w-full">
                <img
                  src="flowers.JPG"
                  alt="Default illustration"
                  className="w-150 h-60 object-cover"
                />
                <p className="text-lg sm:text-xl text-[#3A2F2A] mt-5">
                  Select a section to learn more
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
