import gravity from "../img/gravity.jpg";

function Gravity() {
  return (
    <section className="gravity">
      <img src={gravity} alt="apple falling" className="gravity__img" />
      <div className="gravity__info-container">
        <h2 className="gravity__title">Gravity</h2>
        <p className="gravity__desc">
          Gravity, or gravitation, is a natural phenomenon by which all things
          with mass or energy—including planets, stars, galaxies, and even light
          are attracted to (or gravitate toward) one another. Gravity has an
          infinite range, although its effects become weaker as objects get
          farther away.
        </p>
        <p className="gravity__answer big-font">5 m/s&#xb2;</p>
      </div>
    </section>
  );
}

export default Gravity;
