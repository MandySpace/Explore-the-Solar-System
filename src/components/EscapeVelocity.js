import escape from "../img/escape_velocity.jpg";
import { motion } from "framer-motion";
import { moveRightAnim } from "../animations";
import useScroll from "../components/useScroll";

function EscapeVelocity({ escapeVelocity }) {
  const [element, control] = useScroll(0.5);

  return (
    <motion.section
      variants={moveRightAnim}
      initial="hidden"
      animate={control}
      ref={element}
      className="escape-velocity max-width"
    >
      <div>
        <h2 className="escape-velocity__title">Escape Velocity</h2>
        <p className="escape-velocity__desc">
          Escape velocity is the minimum speed needed for a free, non-propelled
          object to escape from the gravitational influence of a primary body.
          It is the speed at which the sum of an object's kinetic energy and its
          gravitational potential energy is equal to zero.
        </p>
        <p className="escape-velocity__answer big-font">{escapeVelocity}</p>
      </div>
      <img src={escape} alt="rSpace X rocket launching" />
    </motion.section>
  );
}

export default EscapeVelocity;
