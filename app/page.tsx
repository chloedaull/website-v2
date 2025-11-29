import React from "react";
import Image from "next/image";
import Home from "@/Segments/Home/Home";

const HomePage = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      {/* HERO */}
      <div className="relative h-[100vh] w-full">
        <Image
          src="/background.webp"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex justify-center items-center">
          <h1 className="text-white text-5xl font-bold">Bienvenue</h1>
        </div>
      </div>

      <section className="p-10 min-h-[150vh]">
        <Home />
      </section>
    </div>
  );
};

export default HomePage;
