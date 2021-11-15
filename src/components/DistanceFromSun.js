import sun from "../img/planets/sun.jpeg";

function DistanceFromSun() {
  return (
    <section className="distance">
      <h2 className="distance__title">Distance from Sun</h2>
      <p className="distance__answer big-font">1,234,890km</p>

      <img src={sun} alt="sun" className="distance__sun-img" />
    </section>
  );
}

export default DistanceFromSun;
