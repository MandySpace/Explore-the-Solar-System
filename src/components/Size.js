import earth from "../img/planets/earth.jpeg";

function Size() {
  return (
    <section className="size">
      <div className="size__main-info-container">
        <h2 className="size__title">How many Earths can fit inside Mercury?</h2>

        <p className="size__desc">
          Density describes the relationship between the mass of a substance and
          its volume. It is given by the formula density equals mass divided by
          volume (density = mass/volume). Therefore, if the density and mass of
          a substance are known, the volume may be determined by dividing the
          mass by the density (volume = mass/density).
        </p>
        <ul>
          <li className="size__data big-font">
            Density: 13141 kg m<sup>-3</sup>
          </li>
          <li className="size__data big-font">Mass: 2334828 kg</li>
        </ul>
        <p className="size__volume big-font">
          60.8 B km<sup>3</sup>
        </p>
      </div>
      <div className="size__info-container">
        <img src={earth} alt="earth" className="size__earth" />
        <span className="size__answer">&#215; .1</span>
      </div>
    </section>
  );
}

export default Size;
