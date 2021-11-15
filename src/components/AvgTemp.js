import temperature from "../img/temperature.jpg";
function AvgTemp() {
  return (
    <section className="temp">
      <div>
        <h2 className="temp__title">Avg Temperature</h2>
        <p className="temp__desc">
          Planetary surface temperatures tend to get colder the farther a planet
          is from the Sun. Venus is the exception, as its proximity to the Sun
          and dense atmosphere make it our solar system's hottest planet.
        </p>
        <p className="temp__answer big-font">29&#176;C</p>
      </div>
      <img src={temperature} alt="thermometer" />
    </section>
  );
}

export default AvgTemp;
