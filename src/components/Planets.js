function Planets() {
  return (
    <section className="planets">
      <div className="planets__main-container">
        <div className="planets__button">
          <a href="" className="planets__button__name btn-square">
            Mercury
          </a>
          <a href="" className="planets__button__name btn-square">
            Venus
          </a>
          <a href="" className="planets__button__name btn-square">
            Earth
          </a>
          <a href="" className="planets__button__name btn-square">
            Mars
          </a>
          <a href="" className="planets__button__name btn-square">
            Jupiter
          </a>
          <a href="" className="planets__button__name btn-square">
            Saturn
          </a>
          <a href="" className="planets__button__name btn-square">
            Uranus
          </a>
          <a href="" className="planets__button__name btn-square">
            Neptune
          </a>
        </div>
        <div className="planets__info">
          <h3 className="planets__info__title">Mercury</h3>
          <div className="planets__info-container">
            <p className="planets__info__about">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio dolor rerum et vel deserunt saepe consectetur maiores
              inventore aut itaque. Sint cum atque magni aperiam delectus
              laudantium deserunt dignissimos a?
            </p>
            <ul className="planets__info__data-list">
              <li className="planets__info__data-list__items">
                Distance from Sun:
              </li>
              <li className="planets__info__data-list__items">Gravity:</li>
              <li className="planets__info__data-list__items">Mass:</li>
              <li className="planets__info__data-list__items">Density:</li>
              <li className="planets__info__data-list__items">
                Average Temperature:
              </li>
              <li className="planets__info__data-list__items">No of Moons:</li>
              <li className="planets__info__data-list__items">
                Escape Velocity:
              </li>
              <li className="planets__info__data-list__items">Radius:</li>
              <li className="planets__info__data-list__items">Inclination:</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planets;
