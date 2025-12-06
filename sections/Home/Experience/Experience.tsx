import React from "react";
import { Timeline } from "@/component/Timeline";
import { experiences } from "@/constant/constant";

const Experience = () => {
  return (
    <div className="w-full" id="experience">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experience;
