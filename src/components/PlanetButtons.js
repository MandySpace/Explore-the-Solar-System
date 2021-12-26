import { useState } from "react";
import down from "../img/chevron-down.svg";
import { motion } from "framer-motion";

function PlanetButtons({ setPlanet, planet }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  const changePlanetHandler = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn-square")) {
      setPlanet(+e.target.dataset.id);
      setIsMenuOpen(false);
    }
  };

  const toggleMenuHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const renderPlanetButtons = () => {
    return planets.map((planetName, i) => {
      return (
        <motion.button
          key={i}
          data-id={i.toString()}
          className={`planets-button__name btn-square ${
            planet === i ? "active-btn" : ""
          }`}
        >
          {planetName}
        </motion.button>
      );
    });
  };

  const onBlurHandler = () => {
    setTimeout(() => setIsMenuOpen(false), 150);
  };

  return (
    <div className={`buttons-container`}>
      <button
        className="mobile btn-square"
        onBlur={onBlurHandler}
        onClick={toggleMenuHandler}
      >
        <p>{planets[planet]}</p>
        <img src={down} alt="chevron down svg" />
      </button>
      <motion.div className="side-menu-planets" onClick={changePlanetHandler}>
        {isMenuOpen && renderPlanetButtons()}
      </motion.div>
    </div>
  );
}

export default PlanetButtons;
