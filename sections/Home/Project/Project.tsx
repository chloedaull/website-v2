"use client";

import React from "react";
import Image from "next/image";

interface ProjectType {
  id: number;
  title: string;
  date: string;
  shortDesc: string;
  image: string;
}

interface ProjectsSectionProps {
  projects: ProjectType[];
}

export const Project = ({ projects }: ProjectsSectionProps) => {
  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#3A2F2A] text-center mb-4">
          Projects
        </h2>
        <p className="text-xl text-[#3A2F2A]/70 text-center mb-20 max-w-2xl mx-auto">
          Mes réalisations les plus marquantes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer bg-white hover:-translate-y-2 h-64 md:h-80 lg:h-96"
            >
              {/* Image + Spiral Effect */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                />

                {/* SPIRAL OVERLAY - THE MAGIC */}
                <div className="spiral-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base opacity-90 mb-4 drop-shadow-md">
                    {project.date}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed drop-shadow-lg">
                    {project.shortDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx global>{`
          .spiral-effect {
            background: radial-gradient(
                circle at 30% 30%,
                transparent 10%,
                rgba(166, 123, 91, 0.9) 20%
              ),
              radial-gradient(
                circle at 70% 70%,
                transparent 15%,
                rgba(166, 123, 91, 0.9) 25%
              ),
              conic-gradient(
                from 0deg,
                transparent 0deg,
                rgba(166, 123, 91, 0.95) 90deg,
                transparent 180deg
              ),
              linear-gradient(
                45deg,
                rgba(166, 123, 91, 0.3) 0%,
                transparent 50%
              );
            mask: radial-gradient(circle, transparent 0%, black 50%);
            animation: spiralRotate 2s linear infinite;
          }

          @keyframes spiralRotate {
            0% {
              transform: rotate(0deg) scale(0.5);
            }
            50% {
              transform: rotate(180deg) scale(1.2);
            }
            100% {
              transform: rotate(360deg) scale(0.8);
            }
          }
        `}</style>
      </div>
    </section>
  );
};
