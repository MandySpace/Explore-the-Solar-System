import Planets from "../components/Planets";
import Weight from "../components/Weight";
import DistanceFromSun from "../components/DistanceFromSun";
import Gravity from "../components/Gravity";
import EscapeVelocity from "../components/EscapeVelocity";
import Jump from "../components/Jump";
import Size from "../components/Size";
import AvgTemp from "../components/AvgTemp";
import Radius from "../components/Radius";
import { planetData } from "../data";
import { useState } from "react";
import PlanetButtons from "../components/PlanetButtons";
import { fadeIn } from "../animations";
import { motion } from "framer-motion";

function PlanetsPage() {
  const [planet, setPlanet] = useState(2);

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      exit="exit"
      className="main-planets"
    >
      <PlanetButtons planet={planet} setPlanet={setPlanet} />
      <Planets
        planetName={planetData[planet].planetName}
        description={planetData[planet].description}
        distanceFromSun={planetData[planet].distanceFromSun}
        gravity={planetData[planet].gravity}
        volume={planetData[planet].volume}
        noOfMoons={planetData[planet].noOfMoons}
        escapeVelocity={planetData[planet].escapeVelocity}
        radius={planetData[planet].radius}
        tilt={planetData[planet].tilt}
        image={planetData[planet].image}
      />
      <Weight
        planetName={planetData[planet].planetName}
        gravity={planetData[planet].gravity}
      />
      <Jump
        planetName={planetData[planet].planetName}
        gravity={planetData[planet].gravity}
      />
      <Size
        planetName={planetData[planet].planetName}
        mass={planetData[planet].mass}
        density={planetData[planet].density}
        volume={planetData[planet].volume}
      />
      <Gravity gravity={planetData[planet].gravity} />
      <AvgTemp temp={planetData[planet].temp} />
      <Radius radius={planetData[planet].radius} />
      <EscapeVelocity escapeVelocity={planetData[planet].escapeVelocity} />
      <DistanceFromSun distanceFromSun={planetData[planet].distanceFromSun} />
    </motion.div>
  );
}

export default PlanetsPage;
