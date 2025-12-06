"use client";

import React, { useState } from "react";
import { folders } from "@/constant/constant";

export const ResumeAnimation = () => {
  const [hoveredCV, setHoveredCV] = useState(null); // 'en' or 'fr' or null

  return (
    <div className="relative flex justify-center gap-32 mt-30 mb-40">
      {/* Increased gap-32 */}
      {folders.map(({ id, label, cvLink, thumbnail }) => {
        const isHovered = hoveredCV === id;
        const positionClass = id === "en" ? "-ml-16" : "ml-16";
        return (
          <div
            key={id}
            className={`flex flex-col items-center space-y-8 cursor-pointer select-none ${positionClass}`}
            onMouseEnter={() => setHoveredCV(id)}
            onMouseLeave={() => setHoveredCV(null)}
          >
            <span className="text-gray-700 font-semibold text-lg">{label}</span>
            <div className="relative w-64 h-80">
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute top-0 left-0 w-full h-full rounded-xl shadow-xl transition-all duration-500 ease-out z-10
                ${
                  isHovered
                    ? "rotate-[25deg] translate-x-5 translate-y-6 scale-95 shadow-2xl"
                    : "scale-100"
                }`}
                style={{ transformOrigin: "bottom right" }}
              >
                <img
                  src={thumbnail}
                  alt={`${label} Thumbnail`}
                  className="w-full h-full object-cover rounded-xl pointer-events-none"
                  draggable={false}
                />
              </a>
              {/* Folder Front */}
              <img
                src="/folder-front.png"
                alt="Folder Front"
                className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 scale-105 pointer-events-none z-20"
                draggable={false}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
