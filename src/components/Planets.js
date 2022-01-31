import { useEffect, useRef } from "react";

function Planets({
  planetName,
  description,
  distanceFromSun,
  gravity,
  noOfMoons,
  escapeVelocity,
  radius,
  tilt,
  image,
}) {
  const imgRef = useRef(null);

  useEffect(() => {
    imgRef.current.style.opacity = 0;
  }, [image]);

  const loadEventHandler = () => {
    imgRef.current.style.opacity = 1;
  };

  return (
    <section className="planets max-width">
      <h3 className="planets__title-mobile">{planetName}</h3>
      <div className="planets__info">
        <h3 className="planets__info__title">{planetName}</h3>

        <div className="planets__info-container">
          <p className="planets__info__about">{description}</p>
          <ul className="planets__info__data-list">
            <li className="planets__info__data-list__items">
              Distance from Sun: {distanceFromSun}
            </li>
            <li className="planets__info__data-list__items">
              Gravity: {gravity}
            </li>
            <li className="planets__info__data-list__items">
              No of Moons: {noOfMoons}
            </li>
            <li className="planets__info__data-list__items">
              Escape Velocity: {escapeVelocity}
            </li>
            <li className="planets__info__data-list__items">
              Radius: {radius}
            </li>
            <li className="planets__info__data-list__items">Tilt: {tilt}</li>
          </ul>
        </div>
      </div>
      <div className="planets__img-cont">
        <img
          ref={imgRef}
          src={image}
          onLoad={loadEventHandler}
          alt="planet"
          className="planets__img-cont__img"
        />
      </div>
    </section>
  );
}

export default Planets;
