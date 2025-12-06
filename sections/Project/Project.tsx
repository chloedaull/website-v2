"use client";

import React from "react";
import Image from "next/image"; // For optimized images
import { projects } from "@/constant/constant";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ProjectsSectionProps {
  projects: Array<{
    id: number;
    title: string;
    date: string;
    shortDesc: string;
    image: string;
  }>;
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
          {projects.map(
            (
              project: {
                image: string | StaticImport;
                title:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      unknown,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactPortal
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
                date:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      unknown,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactPortal
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
                shortDesc:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      unknown,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactPortal
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              },
              index: React.Key | null | undefined
            ) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer bg-white hover:-translate-y-2"
              >
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500">
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#A67B5B]/90 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
