import radius_img from "../img/radius.jpg";
import { motion } from "framer-motion";
import { moveLeftAnim } from "../animations";
import useScroll from "../components/useScroll";

function Radius({ radius }) {
  const [element, control] = useScroll(0.5);
  return (
    <motion.section
      variants={moveLeftAnim}
      initial="hidden"
      animate={control}
      ref={element}
      className="radius max-width"
    >
      <img src={radius_img} alt="planet semi" className="radius__img" />
      <div className="radius__info-container">
        <h2 className="radius__title">Radius</h2>
        <p className="radius__desc">
          Radius refers to a line that connects to the centre point of a circle
          to any point on its outside layer. In simple words, radius refers to
          that line, which originates from any point of the circle and touches
          the centre point the circle.
        </p>
        <p className="radius__answer big-font">{radius}</p>
      </div>
    </motion.section>
  );
}

export default Radius;
