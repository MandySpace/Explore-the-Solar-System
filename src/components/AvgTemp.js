import { useState } from "react";
import { motion } from "framer-motion";
import { moveRightAnim } from "../animations";
import useScroll from "../components/useScroll";

import temperature from "../img/temperature.jpg";
function AvgTemp({ temp }) {
  const [unit, setUnit] = useState("c");

  const [element, control] = useScroll(0.5);

  const changeUnitHandler = (e) => {
    setUnit(e.target.value);
  };

  return (
    <motion.section
      variants={moveRightAnim}
      initial="hidden"
      animate={control}
      ref={element}
      className="temp max-width"
    >
      <div>
        <h2 className="temp__title">Avg Temperature</h2>
        <p className="temp__desc">
          Planetary surface temperatures tend to get colder the farther a planet
          is from the Sun. Venus is the exception, as its proximity to the Sun
          and dense atmosphere make it our solar system's hottest planet.
        </p>
        <p className="temp__answer big-font">
          {(unit === "c"
            ? temp - 273.15
            : (temp - 273.15) * (9 / 5) + 32
          ).toFixed(1)}
          {unit === "c" ? `°C` : `°F`}
        </p>
        <div className="temp__radio-button-container">
          <input
            type="radio"
            name="temp_unit"
            value="c"
            id="c"
            className="temp__form__radio temp__form__radio-1"
            checked={unit === "c" ? true : false}
            onClick={changeUnitHandler}
            readOnly
          />
          <label htmlFor="c" className="temp__form__radio-label">
            &#176;C
          </label>
          <input
            type="radio"
            name="temp_unit"
            value="f"
            id="f"
            className="temp__form__radio temp__form__radio-2"
            checked={unit === "f" ? true : false}
            onClick={changeUnitHandler}
            readOnly
          />
          <label htmlFor="f" className="temp__form__radio-label">
            &#176;F
          </label>
        </div>
      </div>
      <img src={temperature} alt="thermometer" />
    </motion.section>
  );
}

export default AvgTemp;
