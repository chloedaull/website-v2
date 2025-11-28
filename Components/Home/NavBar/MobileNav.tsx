import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

const MobileNav = () => {
  return (
    <div>
      {/*Overlay*/}
      <div className="fixed insert-0 tranform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen"></div>
      {/*NavLink*/}
      <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-black space-y-6 z-[1050]">
        {navLinks.map((link) => {
          {
            /*NavLink content*/
          }
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-[20px] ml-6 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.url}
              </p>
            </Link>
          );
        })}
        {/*Close Icon*/}
        <CgClose className="absolute border-white top-[0.7rem] left-[1.4rem] sm:w-8 sm:h-8 w-6 h-10" />
      </div>
    </div>
  );
};

export default MobileNav;
