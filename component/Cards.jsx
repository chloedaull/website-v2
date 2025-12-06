"use client";

import React, { useState } from "react";
import { sections } from "@/constant/constant";

export default function Cards() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-20 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto flex gap-12 lg:gap-24 h-[600px]">
        {/* Left - Titles (BCF Style) */}
        <div className="w-1/3 flex flex-col justify-center space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group cursor-pointer relative"
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              {/* Title */}
              <h2
                className={`text-2xl lg:text-3xl font-bold text-[#3A2F2A] pb-4 relative transition-all duration-300
                ${
                  activeSection === index
                    ? "text-[#A67B5B] translate-x-4 scale-105"
                    : "hover:text-[#A67B5B] hover:translate-x-2"
                }`}
              >
                {section.title}
              </h2>

              {/* Active indicator */}
              {activeSection === index && (
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#A67B5B] rounded-full scale-x-125 origin-left animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Right - Description List (unfolds on hover) */}
        <div className="w-2/3 flex items-center">
          <div className="w-full max-w-2xl p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#A67B5B]/10 transition-all duration-500">
            {activeSection !== null ? (
              <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-700">
                <h3 className="text-3xl font-bold text-[#3A2F2A] mb-6">
                  {sections[activeSection].title}
                </h3>
                <p className="text-lg text-[#3A2F2A]/80 leading-relaxed mb-8">
                  {sections[activeSection].description}
                </p>
                <ul className="grid grid-cols-2 gap-4 text-lg">
                  {sections[activeSection].listItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#A67B5B]/5 to-[#DCC4B5]/5 rounded-xl hover:bg-[#A67B5B]/10 transition-all group"
                    >
                      <div className="w-2 h-2 bg-[#A67B5B] rounded-full scale-0 group-hover:scale-100 transition-transform origin-center" />
                      <span className="font-medium text-[#3A2F2A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-center text-gray-500">
                <div>
                  <div className="w-20 h-20 bg-[#A67B5B]/20 rounded-2xl mx-auto mb-4 animate-pulse" />
                  <p className="text-xl">Survolez une section pour découvrir</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
