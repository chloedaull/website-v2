"use client";
import React, { useEffect, useRef, useState } from "react";

const AnimatedLetters = ({ text, isActive }) => {
  const [highlightCount, setHighlightCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setHighlightCount(0);
      return;
    }

    let current = 0;
    const maxCount = text.length;
    const interval = setInterval(() => {
      current++;
      if (current > maxCount) {
        clearInterval(interval);
      } else {
        setHighlightCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isActive, text.length]);

  return (
    <span>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            color: i < highlightCount ? "#4A5568" : "#A0AEC0",
            transition: "color 0.3s ease",
            whiteSpace: "pre-wrap",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const windowHeight = window.innerHeight;

      let closestIndex = 0;
      let closestDistance = Infinity;

      data.forEach((_, i) => {
        const item = document.getElementById(`timeline-item-${i}`);
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(windowHeight / 2 - itemCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [data]);

  return (
    <div ref={containerRef} className="c-space pt-10 pb-20 mx-4 md:mx-20">
      <h2 className="text-4xl font-bold tracking-wide text-[#3A2F2A] text-center mb-12">
        My Work Experience
      </h2>

      {data.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            id={`timeline-item-${index}`}
            className={`flex flex-col md:flex-row justify-start pt-4 md:pt-16 md:gap-8 transition-colors duration-500 ${
              isActive ? "text-gray-700" : "text-gray-400"
            }`}
          >
            <div className="sticky top-20 z-40 flex flex-col self-start max-w-xs md:max-w-sm md:w-full">
              <div className="hidden md:flex flex-col gap-2 text-xl font-bold md:text-4xl">
                <h3>
                  <AnimatedLetters text={item.date} isActive={isActive} />
                </h3>
                <h3 className="text-3xl">
                  <AnimatedLetters text={item.title} isActive={isActive} />
                </h3>
                <h3 className="text-3xl">
                  <AnimatedLetters text={item.job} isActive={isActive} />
                </h3>
                <h4 className="text-2xl">
                  <AnimatedLetters text={item.location} isActive={isActive} />
                </h4>
              </div>
            </div>

            <div className="relative w-full max-w-full overflow-hidden pl-0 md:pl-4 mt-6 md:mt-0">
              <div className="block mb-4 text-xl font-bold text-left md:hidden break-words leading-snug">
                <h3>{item.date}</h3>
                <h3>{item.title}</h3>
                <h3>{item.job}</h3>
                <h3>{item.location}</h3>
              </div>

              {item.contents.map((content, i) => (
                <p
                  key={i}
                  className="mb-3 font-normal text-gray-600 break-words ml-20"
                >
                  <AnimatedLetters text={content} isActive={isActive} />
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
