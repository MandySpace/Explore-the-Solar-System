import planets from "../img/planets/earth.jpg";
import dwarf_planet from "../img/bodies/dwarf_planet.jpg";
import asteroid from "../img/bodies/asteroid.jpeg";
import comet from "../img/bodies/comet.jpg";
import moon from "../img/bodies/moon.jpg";
import charon from "../img/bodies/charon.jpg";
import { motion } from "framer-motion";
import { fadeInFastAnim, scaleAnim, moveUpAnim } from "../animations";
import useScroll from "./useScroll";

function KnownBodies() {
  const [gridRef, gridControl] = useScroll(0.1);
  const [titleRef, titleControl] = useScroll(0.5);

  return (
    <section className="body">
      <motion.h2
        ref={titleRef}
        variants={moveUpAnim}
        initial="hidden"
        animate={titleControl}
        className="body__title"
      >
        Known bodies in our System
      </motion.h2>
      <motion.div
        ref={gridRef}
        variants={fadeInFastAnim}
        initial="hidden"
        animate={gridControl}
        className="body__container"
      >
        <motion.div variants={scaleAnim} className="body__card">
          <img src={planets} alt="Planets" className="body__card__img" />
          <h3 className="body__card__name">Planets</h3>
          <p className="body__card__count">Known count: 8</p>
          <p className="body__card__detail">
            A planet is an astronomical body orbiting a star or stellar remnant
            that is massive enough to be rounded by its own gravity, is not
            massive enough to cause thermonuclear fusion.
          </p>
        </motion.div>

        <motion.div variants={scaleAnim} className="body__card">
          <img
            src={dwarf_planet}
            alt="Dwarf Planet"
            className="body__card__img"
          />
          <h3 className="body__card__name">Dwarf Planets</h3>
          <p className="body__card__count">Known count: 5</p>
          <p className="body__card__detail">
            A dwarf planet is a small planetary-mass object that is in direct
            orbit of the Sun – something smaller than any of the eight classical
            planets, but still a world in its own right.
          </p>
        </motion.div>

        <motion.div variants={scaleAnim} className="body__card">
          <img src={asteroid} alt="Asteroid" className="body__card__img" />
          <h3 className="body__card__name">Asteroids</h3>
          <p className="body__card__count">Known count: 1,113,527</p>
          <p className="body__card__detail">
            An asteroid is a minor planet of the inner Solar System.
            Historically, these terms have been applied to any astronomical
            object orbiting the Sun that did not resolve into a disc in a
            telescope and was not observed to have a tail.
          </p>
        </motion.div>

        <motion.div variants={scaleAnim} className="body__card">
          <img src={comet} alt="Comet" className="body__card__img" />
          <h3 className="body__card__name">Comets</h3>
          <p className="body__card__count">Known count: 3,743</p>
          <p className="body__card__detail">
            A comet is an icy, small Solar System body that, when passing close
            to the Sun, warms and begins to release gases, a process that is
            called outgassing. This produces a visible atmosphere or coma, and
            sometimes also a tail.
          </p>
        </motion.div>

        <motion.div variants={scaleAnim} className="body__card">
          <img src={moon} alt="Planet Moon" className="body__card__img" />
          <h3 className="body__card__name">Moons</h3>
          <p className="body__card__count">Known count: 205</p>
          <p className="body__card__detail">
            Moons – also known as natural satellites – orbit planets and
            asteroids in our solar system. Moons come in many shapes, sizes, and
            types. A few have atmospheres and even hidden oceans beneath their
            surfaces.
          </p>
        </motion.div>

        <motion.div variants={scaleAnim} className="body__card">
          <img
            src={charon}
            alt="Dwarf Planet Moon"
            className="body__card__img"
          />
          <h3 className="body__card__name">Dwarf Planet Moons</h3>
          <p className="body__card__count">Known count: 9</p>
          <p className="body__card__detail">
            As planets, dwarf planets also have moons orbiting them. Pluto's
            entire moon system is believed to have formed by a collision between
            two the dwarf planet and another Kuiper Belt Object early in the
            history of the solar system.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default KnownBodies;
