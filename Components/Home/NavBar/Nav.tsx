"use client";
import React, { useEffect, useState } from "react";
import { Si4Chan } from "react-icons/si";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true);
      if (window.scrollY < 90) setNavbg(false);
    };
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div className="fixed w-full h-[12vh] z-[100] flex flex-col transition-all duration-200">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white-800 rounded-full flex items-center justify-center flex-col">
            <Si4Chan className="w-6 h-6 text-white"></Si4Chan>
          </div>
          <h1 className="text-x1 hidden sm:block md:text-2xl text-white font-block">
            Chloe's Website
          </h1>
        </div>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id} className="relative group">
                <p className="text-white font-semibold">{link.label}</p>
                <span
                  className="absolute left-0 -bottom-5 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "#A67B5B" }}
                ></span>
              </Link>
            );
          })}
        </div>
        {/*Button*/}
        <div className="flex items-center space-x-4">
          <a
            href="#_"
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
          >
            <span
              className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out rounded-md group-hover:mt-0 group-hover:ml-0"
              style={{ backgroundColor: "#A67B5B" }}
            ></span>
            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
            <span
              className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 rounded-md opacity-0 group-hover:opacity-100"
              style={{ backgroundColor: "#A67B5B" }}
            ></span>
            <span className="relative text-black transition-colors duration-200 ease-in-out delay-100 group-hover:text-black">
              Contact
            </span>
          </a>
          {/*Burger menu*/}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
      {/* Bottom bar that appears on scroll */}
      <div
        className={`h-0.5 w-full transition-all duration-200 ${
          navbg ? "bg-black shadow-md" : "bg-transparent"
        }`}
      />
    </div>
  );
};

export default Nav;
