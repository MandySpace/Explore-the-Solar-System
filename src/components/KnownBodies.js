import planets from "../img/planets/earth.jpeg";
import dwarf_planet from "../img/bodies/dwarf_planet.jpeg";
import asteroid from "../img/bodies/asteroid.jpeg";
import comet from "../img/bodies/comet.jpeg";
import moon from "../img/bodies/moon.jpeg";
import charon from "../img/bodies/charon.jpeg";

function KnownBodies() {
  return (
    <section class="body">
      <h2 class="body__title">Known bodies in our System</h2>
      <div class="body__container">
        <div class="body__card">
          <img src={planets} alt="Planets" class="body__card__img" />
          <h3 class="body__card__name">Planet</h3>
          <p class="body__card__count">Known count:</p>
          <p class="body__card__detail">
            A planet is an astronomical body orbiting a star or stellar remnant
            that is massive enough to be rounded by its own gravity, is not
            massive enough to cause thermonuclear fusion.
          </p>
          <p class="body__card__date-updated">Date Updated:</p>
        </div>

        <div class="body__card">
          <img src={dwarf_planet} alt="Dwarf Planet" class="body__card__img" />
          <h3 class="body__card__name">Dwarf Planet</h3>
          <p class="body__card__count">Known count:</p>
          <p class="body__card__detail">
            A dwarf planet is a small planetary-mass object that is in direct
            orbit of the Sun – something smaller than any of the eight classical
            planets, but still a world in its own right.
          </p>
          <p class="body__card__date-updated">Date Updated:</p>
        </div>

        <div class="body__card">
          <img src={asteroid} alt="Asteroid" class="body__card__img" />
          <h3 class="body__card__name">Asteroid</h3>
          <p class="body__card__count">Known count:</p>
          <p class="body__card__detail">
            An asteroid is a minor planet of the inner Solar System.
            Historically, these terms have been applied to any astronomical
            object orbiting the Sun that did not resolve into a disc in a
            telescope and was not observed to have a tail.
          </p>
          <p class="body__card__date-updated">Date Updated:</p>
        </div>

        <div class="body__card">
          <img src={comet} alt="Comet" class="body__card__img" />
          <h3 class="body__card__name">Comet</h3>
          <p class="body__card__count">Known count:</p>
          <p class="body__card__detail">
            A comet is an icy, small Solar System body that, when passing close
            to the Sun, warms and begins to release gases, a process that is
            called outgassing. This produces a visible atmosphere or coma, and
            sometimes also a tail.
          </p>
          <p class="body__card__date-updated">Date Updated:</p>
        </div>

        <div class="body__card">
          <img src={moon} alt="Planet Moon" class="body__card__img" />
          <h3 class="body__card__name">Moon</h3>
          <p class="body__card__count">Known count:</p>
          <p class="body__card__detail">
            Moons – also known as natural satellites – orbit planets and
            asteroids in our solar system. Moons come in many shapes, sizes, and
            types. A few have atmospheres and even hidden oceans beneath their
            surfaces.
          </p>
          <p class="body__card__date-updated">Date Updated:</p>
        </div>

        <div class="body__card">
          <img src={charon} alt="Dwarf Planet Moon" class="body__card__img" />
          <h3 class="body__card__name">Dwarf Planet Moon</h3>
          <p class="body__card__count">Known count:</p>
          <p class="body__card__detail">
            As planets, dwarf planets also have moons orbiting them. Pluto's
            entire moon system is believed to have formed by a collision between
            two the dwarf planet and another Kuiper Belt Object early in the
            history of the solar system.
          </p>
          <p class="body__card__date-updated">Date Updated:</p>
        </div>
      </div>
    </section>
  );
}

export default KnownBodies;
