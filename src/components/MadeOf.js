import iss_window from "../img/looking_through_iss_window.jpg";
import { motion } from "framer-motion";
import { moveRightAnim, moveUpAnim } from "../animations";
import useScroll from "./useScroll";

function MadeOf() {
  const [titleRef, titleControl] = useScroll(0.5);
  const [paraRef, paraControl] = useScroll(0.5);

  return (
    <section className="made-of max-width">
      <motion.h2
        ref={titleRef}
        variants={moveUpAnim}
        initial="hidden"
        animate={titleControl}
        className="body__title"
      >
        What else does our Solar System consist of?
      </motion.h2>
      <motion.div
        ref={paraRef}
        variants={moveRightAnim}
        initial="hidden"
        animate={paraControl}
        className="body__header"
      >
        <div className="body__header-img">
          <img src={iss_window} alt="Man looking at sky full of stars" />
        </div>

        <p className="body__header-p">
          The Solar System also contains smaller objects. The asteroid belt,
          which lies between the orbits of Mars and Jupiter, mostly contains
          objects composed of rock and metal. Beyond Neptune's orbit lie the
          Kuiper belt and scattered disc, which are populations of
          trans-Neptunian objects composed mostly of ices. Some objects are
          large enough to have rounded under their own gravity and such objects
          are categorized as dwarf planets. Many of the smaller bodies are
          orbited by natural satellites, usually termed "moons" after the Moon.
        </p>
      </motion.div>
    </section>
  );
}

export default MadeOf;
