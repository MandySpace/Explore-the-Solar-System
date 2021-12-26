import ExplorationCard from "../components/ExplorationCard";
import img0 from "../img/mission/img0-min.jpeg";
import img1 from "../img/mission/img1-min.jpeg";
import img2 from "../img/mission/img2-min.jpeg";
import img3 from "../img/mission/img3-min.jpeg";
import img4 from "../img/mission/img4-min.jpeg";
import img5 from "../img/mission/img5-min.jpeg";
import img6 from "../img/mission/img6-min.jpeg";
import img7 from "../img/mission/img7-min.jpeg";
import img8 from "../img/mission/img8-min.jpeg";
import img9 from "../img/mission/img9-min.jpeg";
import img10 from "../img/mission/img10-min.jpeg";
import img11 from "../img/mission/img11-min.jpeg";
import img12 from "../img/mission/img12-min.jpeg";
import img13 from "../img/mission/img13-min.jpeg";
import img14 from "../img/mission/img14-min.jpeg";
import img15 from "../img/mission/img15-min.jpeg";
import img16 from "../img/mission/img16-min.jpeg";
import img17 from "../img/mission/img17-min.jpeg";
import img18 from "../img/mission/img18-min.jpeg";
import img19 from "../img/mission/img19-min.jpg";
import img20 from "../img/mission/img20-min.jpeg";
import img21 from "../img/mission/img21-min.jpeg";
import img22 from "../img/mission/img22-min.jpeg";
import img23 from "../img/mission/img23-min.jpeg";
import img24 from "../img/mission/img24-min.jpeg";
import img25 from "../img/mission/img25-min.jpeg";
import img26 from "../img/mission/img26-min.jpeg";
import img27 from "../img/mission/img27-min.jpeg";
import img28 from "../img/mission/img28-min.jpeg";
import img29 from "../img/mission/img29-min.jpeg";
import img30 from "../img/mission/img30-min.jpeg";
import img31 from "../img/mission/img31-min.jpeg";
import img32 from "../img/mission/img32-min.jpeg";
import USA from "../img/mission/flag/usa-min.png";
import Japan from "../img/mission/flag/japan-min.png";
import USSR from "../img/mission/flag/ussr-min.jpeg";
import Russia from "../img/mission/flag/russia-min.jpeg";
import esa from "../img/mission/flag/esa-min.gif";
import { fadeIn } from "../animations";
import { motion } from "framer-motion";

function SpaceExploration() {
  const mission = [
    "WAC Corporal",
    "V-2",
    "R-1",
    "R-7",
    "Sputnik 1",
    "Sputnik 2",
    "Explorer 6",
    "Vostok I",
    "OSO-1",
    "Vostok 6",
    "Luna 10",
    "Apollo 8",
    "Apollo 11",
    "Luna 16",
    "Salyut 1",
    "Pioneer 10",
    "Mariner 10",
    "Venera 13",
    "STS-41-B",
    "Voyager 1",
    "Mir",
    "HALCA",
    "NEAR Shoemaker",
    "NEAR Shoemaker",
    "Genesis",
    "Cassini Huygens",
    "Hayabusa",
    "Stardust",
    "Kepler Mission",
    "MESSENGER",
    "Voyager 1",
    "Rosetta",
    "",
  ];

  const year = [
    "1946",
    "1946",
    "1951",
    "1957",
    "1957",
    "1957",
    "1959",
    "1961",
    "1962",
    "1963",
    "1966",
    "1968",
    "1969",
    "1970",
    "1971",
    "1972",
    "1974",
    "1982",
    "1984",
    "1990",
    "1995",
    "1997",
    "2000",
    "2001",
    "2004",
    "2005",
    "2005",
    "2006",
    "2009",
    "2011",
    "2012",
    "2014",
    "2015",
  ];

  const description = [
    "It was the first (US designed) rocket that reached the edge of space.	",
    "The first pictures of the Earth were taken from an altitude of 105 km.	",
    "First time dogs were sent to space.	",
    "First intercontinental Ballistic Missile (ICBM) developed.	",
    "First artificial satellite.	",
    "First animal (dog named Laika) sent to the orbit.	",
    "First photograph of Earth taken from the orbit (by NASA).	",
    "First manned flight carrying Yuri Gagarin	",
    "First orbital solar observatory (by NASA).	",
    "First woman in space (Valentina Tereshkova).	",
    "First artificial satellite around the Moon.	",
    "First piloted orbital mission of Moon (by NASA).	",
    "First human on the Moon and first space launch from a celestial body (by NASA) - Commander Neil Armstrong and Pilot Buzz Aldrin.	",
    "First automatic sample return from the Moon.	",
    "First space station.	",
    "First human made object that had been sent on escape trajectory away from the Sun (by NASA).	",
    "First photograph of Venus from Space (by NASA).	",
    "First Venus soil samples and sound recording of another world.	",
    "First untethered spacewalk, Bruce McCandless II (by NASA).	",
    "First photograph of the whole Solar System (by NASA).	",
    "First Record longest duration spaceflight (i.e. 437.7 days) set by Valeri Polyakov.	",
    "First orbital radio observatory.	",
    "First orbiting of an asteroid (433 Eros) – by NASA.	",
    "First landing on an asteroid (433 Eros) – by NASA.	",
    "First sample return beyond lunar orbit (solar wind)- by NASA.	",
    "First soft landing on Titan (Moon of Saturn).	",
    "First interplanetary escape without undercarriage cutoff.	",
    "First sample return from comet (81P/Wild) – by NASA.	",
    "First space telescope designated to search for Earth-like exoplanets – by NASA.	",
    "First orbit of Mercury – by NASA.	",
    "First manmade probe in interstellar space – by NASA.	",
    "First man-made probe to make a planned and soft landing on a comet.	",
    "Lettuce was the first food eaten that was grown in space.",
  ];

  const country = [
    USA,
    USA,
    USSR,
    USSR,
    USSR,
    USSR,
    USA,
    USSR,
    USA,
    USSR,
    USSR,
    USA,
    USA,
    USSR,
    USSR,
    USA,
    USA,
    USSR,
    USA,
    USA,
    Russia,
    Japan,
    USA,
    USA,
    USA,
    USA,
    Japan,
    USA,
    USA,
    USA,
    USA,
    esa,
    USA,
  ];

  const image = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
  ];

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="show"
      exit="exit"
      className="exploration-section"
    >
      <h2 className="space-exploration-title">
        Space Exploration by Humans Timeline
      </h2>
      <div className="space-exploration">
        {mission.map((ele, i) => (
          <ExplorationCard
            key={i}
            mission={ele}
            year={year[i]}
            description={description[i]}
            country={country[i]}
            image={image[i]}
            index={i}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default SpaceExploration;
