import earth from "../img/planets/earth.jpg";
import { motion } from "framer-motion";
import { moveRightAnim } from "../animations";
import useScroll from "../components/useScroll";

function Size({ density, mass, volume, planetName }) {
  const [element, control] = useScroll(0.5);

  return (
    <motion.section
      variants={moveRightAnim}
      initial="hidden"
      animate={control}
      ref={element}
      className="size max-width"
    >
      <div className="size__main-info-container">
        <h2 className="size__title">
          How many Earths can fit inside {planetName}?
        </h2>

        <p className="size__desc">
          Density describes the relationship between the mass of a substance and
          its volume. It is given by the formula density equals mass divided by
          volume (density = mass/volume). Therefore, if the density and mass of
          a substance are known, the volume may be determined by dividing the
          mass by the density (volume = mass/density).
        </p>
        <ul>
          <li className="size__data">Density: {density}</li>
          <li className="size__data">
            Mass: {mass.split("^")[0]}
            <sup>{mass.split("^")[1]}</sup> kg
          </li>
        </ul>
        <p className="size__volume big-font">
          {volume} B km<sup>3</sup>
          <span className="size__volume__text">
            Volume of {planetName} is:{" "}
          </span>
        </p>
      </div>
      <div className="size__info-container">
        <img src={earth} alt="earth" className="size__earth" />
        <span className="size__answer">
          &#215; {(+volume / 1083.2).toFixed(1)}
        </span>
      </div>
    </motion.section>
  );
}

export default Size;
