import { useState } from "react";
import { motion } from "framer-motion";
import { moveRightAnim } from "../animations";
import useScroll from "../components/useScroll";

function Weight({ gravity, planetName }) {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("kg");

  const [element, control] = useScroll(0.5);

  const calcWeightOnPlanet = (e) => {
    if (e.target.value.split("").length > 3) return;
    setWeight(e.target.value);
  };

  const changeUnitHandler = (e) => {
    setUnit(e.target.value);
  };

  return (
    <motion.section
      variants={moveRightAnim}
      initial="hidden"
      animate={control}
      ref={element}
      className="weight max-width"
    >
      <div className="weight__main-container">
        <form action="#" className="weight__form">
          <label htmlFor="weight" className="weight__form__input-label">
            Enter your weight
          </label>

          <input
            id="weight"
            type="number"
            className="weight__form__input"
            value={weight}
            onChange={calcWeightOnPlanet}
            max="500"
          />

          <div className="weight__radio-button-container">
            <input
              type="radio"
              name="weight_unit"
              value="kg"
              id="kg"
              className="weight__form__radio weight__form__radio-1"
              checked={unit === "kg" ? true : false}
              onClick={changeUnitHandler}
              readOnly
            />
            <label htmlFor="kg" className="weight__form__radio-label">
              Kg
            </label>
            <input
              type="radio"
              name="weight_unit"
              value="lb"
              id="lb"
              className="weight__form__radio weight__form__radio-2"
              checked={unit === "lb" ? true : false}
              onClick={changeUnitHandler}
              readOnly
            />
            <label htmlFor="lb" className="weight__form__radio-label">
              Lb
            </label>
          </div>
        </form>
        <div className="weight__result">
          {weight && (
            <p className="weight__result__answer big-font">
              {(
                +weight *
                (+gravity.split(" ")[0] / 9.807) *
                (unit === "kg" ? 1 : 2.2)
              ).toFixed(1)}
              {unit === "kg" ? "Kilos" : "Lbs"}
              <span className="weight__result__answer__text">
                on {planetName}
              </span>
            </p>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default Weight;
