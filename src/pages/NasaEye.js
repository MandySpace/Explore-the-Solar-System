import { fadeIn } from "../animations";
import { motion } from "framer-motion";

function NasaEye() {
  return (
    <motion.section
      className="nasa-eye"
      variants={fadeIn}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2 className="nasa-eye-title">Virtual Tour</h2>
      <iframe
        src="https://eyes.nasa.gov/apps/orrery/#/home"
        frameBorder="0"
        title="nasa-eye"
        width="100%"
      ></iframe>
    </motion.section>
  );
}

export default NasaEye;
