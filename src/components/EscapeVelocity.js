import escape from "../img/escape_velocity.jpg";

function EscapeVelocity() {
  return (
    <section className="escape-velocity">
      <div>
        <h2 className="escape-velocity__title">Escape Velocity</h2>
        <p className="escape-velocity__desc">
          Escape velocity is the minimum speed needed for a free, non-propelled
          object to escape from the gravitational influence of a primary body.
          It is the speed at which the sum of an object's kinetic energy and its
          gravitational potential energy is equal to zero.
        </p>
        <p className="escape-velocity__answer big-font">9 m/s</p>
      </div>
      <img src={escape} alt="rSpace X rocket launching" />
    </section>
  );
}

export default EscapeVelocity;
