import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { moveLeftAnim } from "../animations";
import useScroll from "../components/useScroll";

function Jump({ gravity, planetName }) {
  const [jump, setJump] = useState("");
  const [unit, setUnit] = useState("m");
  const [jumpOnPlanet, setJumpOnPlanet] = useState("");

  const [element, control] = useScroll(0.5);

  const calcJump = (e) => {
    if (e.target.value.split("").length > 2) return;
    setJump(e.target.value);
  };

  const changeUnitHandler = (e) => {
    setUnit(e.target.value);
  };

  useEffect(() => {
    if (unit === "m")
      setJumpOnPlanet((+jump * (9.807 / +gravity.split(" ")[0])).toFixed(1));
    if (unit === "ft")
      setJumpOnPlanet(
        (+jump * (9.807 / +gravity.split(" ")[0]) * 3.281).toFixed(1)
      );
  }, [jump, unit, setJumpOnPlanet, gravity]);

  return (
    <motion.section
      variants={moveLeftAnim}
      initial="hidden"
      animate={control}
      ref={element}
      className="jump max-width"
    >
      <div className="jump__main-container">
        <div className="jump__result">
          {jump && (
            <p className="jump__result__answer big-font">
              {jumpOnPlanet}m
              <span className="jump__result__answer__text">
                on {planetName}
              </span>
            </p>
          )}
        </div>
        <form action="#" className="jump__form">
          <label htmlFor="jump" className="jump__form__input-label">
            How high can you jump?
          </label>

          <input
            id="jump"
            type="number"
            className="jump__form__input"
            onChange={calcJump}
            value={jump}
          />

          <div className="jump__radio-button-container">
            <input
              type="radio"
              name="jump_unit"
              value="m"
              id="m"
              className="jump__form__radio jump__form__radio-1"
              checked={unit === "m" ? true : false}
              onClick={changeUnitHandler}
              readOnly
            />
            <label htmlFor="m" className="jump__form__radio-label">
              m
            </label>
            <input
              type="radio"
              name="jump_unit"
              value="ft"
              id="ft"
              className="jump__form__radio jump__form__radio-2"
              checked={unit === "ft" ? true : false}
              onClick={changeUnitHandler}
              readOnly
            />
            <label htmlFor="ft" className="jump__form__radio-label">
              ft
            </label>
          </div>
        </form>
      </div>
    </motion.section>
  );
}

export default Jump;
