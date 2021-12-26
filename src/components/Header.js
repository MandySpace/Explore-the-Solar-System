import { Link } from "react-router-dom";
import { fadeInAnim, heroAnim, heroSmallAnim } from "../animations";
import { motion } from "framer-motion";

function Header() {
  return (
    <section className="top">
      <div className="top__container">
        <motion.h1
          className="top__heading"
          variants={fadeInAnim(1, 1, 0.98)}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={
              window.screen.width >= 988 ? heroAnim(100) : heroSmallAnim(150)
            }
          >
            Explore the
          </motion.span>{" "}
          <motion.span
            variants={
              window.screen.width >= 988 ? heroAnim(-100) : heroSmallAnim(-150)
            }
          >
            Solar System
          </motion.span>
        </motion.h1>
        <p className="top__sub-heading">Like never before</p>
      </div>
      <Link to="/planets">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="top__btn btn"
        >
          Explore &rarr;
        </motion.button>
      </Link>
    </section>
  );
}

export default Header;
