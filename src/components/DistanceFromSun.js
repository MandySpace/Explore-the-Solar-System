import sun from "../img/planets/sun.jpeg";
import { motion } from "framer-motion";
import { moveLeftAnim } from "../animations";
import useScroll from "../components/useScroll";

function DistanceFromSun({ distanceFromSun }) {
  const [element, control] = useScroll(0.5);

  return (
    <section className="distance">
      <h2 className="distance__title max-width">Distance from Sun</h2>
      <motion.p
        variants={moveLeftAnim}
        initial="hidden"
        animate={control}
        ref={element}
        className="distance__answer big-font max-width"
      >
        {distanceFromSun}
      </motion.p>

      <img src={sun} alt="sun" className="distance__sun-img" />
    </section>
  );
}

export default DistanceFromSun;
