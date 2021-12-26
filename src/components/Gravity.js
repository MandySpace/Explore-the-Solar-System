import gravity_img from "../img/gravity.jpg";
import { motion } from "framer-motion";
import { moveLeftAnim } from "../animations";
import useScroll from "../components/useScroll";

function Gravity({ gravity }) {
  const [element, control] = useScroll(0.5);

  return (
    <motion.section
      variants={moveLeftAnim}
      initial="hidden"
      animate={control}
      ref={element}
      className="gravity max-width"
    >
      <img src={gravity_img} alt="apple falling" className="gravity__img" />
      <div className="gravity__info-container">
        <h2 className="gravity__title">Gravity</h2>
        <p className="gravity__desc">
          Gravity, or gravitation, is a natural phenomenon by which all things
          with mass or energy—including planets, stars, galaxies, and even light
          are attracted to (or gravitate toward) one another. Gravity has an
          infinite range, although its effects become weaker as objects get
          farther away.
        </p>
        <p className="gravity__answer big-font">
          {(+gravity.split(" ")[0]).toFixed(1)} m/s<sup>2</sup>
        </p>
      </div>
    </motion.section>
  );
}

export default Gravity;
