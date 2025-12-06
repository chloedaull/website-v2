"use client";

import React, { useState } from "react";
import { folders } from "@/constant/constant";

export const ResumeAnimation = () => {
  const [hoveredCV, setHoveredCV] = useState(null);

  return (
    <div className="w-full py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-center">
        {folders.map(({ id, label, cvLink, thumbnail }) => {
          const isHovered = hoveredCV === id;
          return (
            <div
              key={id}
              className="flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-8 w-full max-w-sm cursor-pointer select-none"
              onMouseEnter={() => setHoveredCV(id)}
              onMouseLeave={() => setHoveredCV(null)}
              onClick={() => setHoveredCV(id === hoveredCV ? null : id)}
            >
              <span className="text-base sm:text-lg lg:text-xl text-gray-700 font-semibold text-center">
                {label}
              </span>

              <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 mx-auto">
                <a
                  href={cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute top-0 left-0 w-full h-full rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transition-all duration-500 ease-out z-10
                  ${
                    isHovered
                      ? "rotate-[20deg] sm:rotate-[25deg] translate-x-4 sm:translate-x-5 translate-y-4 sm:translate-y-6 scale-95 shadow-xl sm:shadow-2xl"
                      : "scale-100"
                  }`}
                  style={{ transformOrigin: "bottom right" }}
                >
                  <img
                    src={thumbnail}
                    alt={`${label} Thumbnail`}
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl pointer-events-none"
                    draggable={false}
                  />
                </a>

                <img
                  src="/folder-front.png"
                  alt="Folder Front"
                  className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 scale-[1.03] sm:scale-105 pointer-events-none z-20"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
