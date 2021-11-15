import planets_split from "../img/planets_split.jpeg";
import planets_size_comparison from "../img/planets_size_comparison.jpeg";
import planets_cartoon from "../img/planets_cartoon.jpeg";
import vertical_planets from "../img/vertical_planets.png";
import neptune_about from "../img/neptune_about.png";

function About() {
  return (
    <section className="about">
      <h2 className="about__heading">About our Solar System</h2>
      <div className="about__flex-container">
        <div className="about__grid">
          <figure className="about__figure-1">
            <img
              src={planets_split}
              alt="Planets of solar system vertical illustration"
              className="about__figure-1__img about__img"
            />
          </figure>

          <figure className="about__figure-2">
            <img
              src={planets_size_comparison}
              alt="Size comparison of Mercury, Venus, Earth , Mars to scale"
              className="about__figure-2__img about__img"
            />
          </figure>

          <figure className="about__figure-3">
            <img
              src={planets_cartoon}
              alt="Illustration of solar system"
              className="about__figure-3__img about__img"
            />
          </figure>

          <figure className="about__figure-4">
            <img
              src={vertical_planets}
              alt="Planets shown in a vertical portrait"
              className="about__figure-4__img about__img"
            />
          </figure>

          <figure className="about__figure-5">
            <img
              src={neptune_about}
              alt="Neptune in space surrounded by stars"
              className="about__figure-5__img about__img"
            />
          </figure>
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
      </div>
    </section>
  );
}

export default About;
