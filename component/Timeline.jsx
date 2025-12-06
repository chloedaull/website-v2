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
    <span className="break-words">
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
    <div
      ref={containerRef}
      className="c-space pt-10 pb-20 mx-4 md:mx-20 max-w-full overflow-x-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[#3A2F2A] text-center mb-12">
        My Work Experience
      </h2>

      {data.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            id={`timeline-item-${index}`}
            className={`flex flex-col md:flex-row justify-start py-6 md:py-16 gap-4 md:gap-8 transition-colors duration-500 ${
              isActive ? "text-gray-700" : "text-gray-400"
            } max-w-full`}
          >
            <div className="hidden md:flex md:sticky md:top-20 z-40 flex-col self-start max-w-xs w-full">
              <div className="flex flex-col gap-2 text-xl md:text-4xl font-bold">
                <h3>
                  <AnimatedLetters text={item.date} isActive={isActive} />
                </h3>
                <h3 className="md:text-3xl">
                  <AnimatedLetters text={item.title} isActive={isActive} />
                </h3>
                <h3 className="md:text-3xl">
                  <AnimatedLetters text={item.job} isActive={isActive} />
                </h3>
                <h4 className="md:text-2xl">
                  <AnimatedLetters text={item.location} isActive={isActive} />
                </h4>
              </div>
            </div>

            <div className="md:hidden mb-4 pb-4 border-b border-gray-200 max-w-full">
              <div className="flex flex-col gap-1 font-bold text-left break-words">
                <h3 className="text-lg">{item.date}</h3>
                <h3 className="text-xl">{item.title}</h3>
                <h3 className="text-lg">{item.job}</h3>
                <h4 className="text-base opacity-80">{item.location}</h4>
              </div>
            </div>

            <div className="w-full md:pl-4 flex-1 max-w-full">
              {item.contents.map((content, i) => (
                <p
                  key={i}
                  className="mb-3 text-sm md:text-base font-normal text-gray-600 break-words"
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
