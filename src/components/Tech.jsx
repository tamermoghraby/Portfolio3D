import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const isMobile = window.innerWidth <= 768;
  const filteredTechnologies = isMobile
    ? technologies.slice(6, 11)
    : technologies;
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {filteredTechnologies.map((technology, index) => (
        <div className="w-20 h-20 md:w-28 md:h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
