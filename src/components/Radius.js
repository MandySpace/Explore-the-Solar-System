import radius from "../img/radius.jpg";

function Radius() {
  return (
    <section className="radius">
      <img src={radius} alt="apple falling" className="radius__img" />
      <div className="radius__info-container">
        <h2 className="radius__title">Radius</h2>
        <p className="radius__desc">
          radius, or gravitation, is a natural phenomenon by which all things
          with mass or energy—including planets, stars, galaxies, and even light
          are attracted to (or gravitate toward) one another. radius has an
          infinite range, although its effects become weaker as objects get
          farther away.
        </p>
        <p className="radius__answer big-font">5 m/s&#xb2;</p>
      </div>
    </section>
  );
}

export default Radius;
