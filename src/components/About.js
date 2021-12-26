import astronaut from "../img/astronaut_looking_up.jpg";
import spaceShuttle from "../img/space_shuttle_orbit.jpg";
import useScroll from "./useScroll";
import { moveLeftAnim, moveRightAnim, moveUpAnim } from "../animations";
import { motion } from "framer-motion";

function About() {
  const [title, titleControl] = useScroll(0.5);
  const [containerFirst, containerFirstControl] = useScroll(0.5);
  const [containerSecond, containerSecondControl] = useScroll(0.5);

  return (
    <section className="about">
      <motion.h2
        className="about__heading"
        ref={title}
        variants={moveUpAnim}
        initial="hidden"
        animate={titleControl}
      >
        What is a Solar System?
      </motion.h2>
      <motion.div
        className="about__flex-container"
        ref={containerFirst}
        variants={moveRightAnim}
        initial="hidden"
        animate={containerFirstControl}
      >
        <div className="about__img">
          <img src={spaceShuttle} alt="astronaut in orbit" />
        </div>
        <div className="about__info">
          <p className="about__info__paragraph">
            The Solar System is the gravitationally bound system of the Sun and
            the objects that orbit it, either directly or indirectly. Of the
            objects that orbit the Sun directly, the largest are the eight
            planets, with the remainder being smaller objects, the dwarf planets
            and small Solar System bodies.
          </p>
          <p className="about__info__paragraph">
            The vast majority of the system's mass is in the Sun, with the
            majority of the remaining mass contained in Jupiter. The four
            smaller inner system planets, Mercury, Venus, Earth and Mars, are
            terrestrial planets, being primarily composed of rock and metal. The
            four outer system planets are giant planets, being substantially
            more massive than the terrestrials.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="about__flex-container"
        ref={containerSecond}
        variants={moveLeftAnim}
        initial="hidden"
        animate={containerSecondControl}
      >
        <div className="about__info flex-order-1">
          <p className="about__info__paragraph">
            For most of history, humanity did not recognize or understand the
            concept of the Solar System. Most people up to the Late Middle
            Ages–Renaissance believed Earth to be stationary at the centre of
            the universe and categorically different from the divine or ethereal
            objects that moved through the sky.
          </p>
          <p className="about__info__paragraph">
            Around 1677, Edmond Halley observed a transit of Mercury across the
            Sun, leading him to realise that observations of the solar parallax
            of a planet could be used to trigonometrically determine the
            distances between Earth, Venus, and the Sun. In 1705, Halley
            realised that repeated sightings of a comet were of the same object,
            returning regularly once every 75–76 years. This was the first
            evidence that anything other than the planets orbited the Sun.
          </p>
        </div>
        <div className="about__img flex-order-2">
          <img src={astronaut} alt="astronaut looking up" />
        </div>
      </motion.div>
    </section>
  );
}

export default About;
