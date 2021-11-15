import Planets from "../components/Planets";
import Weight from "../components/Weight";
import DistanceFromSun from "../components/DistanceFromSun";
import Gravity from "../components/Gravity";
import EscapeVelocity from "../components/EscapeVelocity";
import Jump from "../components/Jump";
import Size from "../components/Size";
import AvgTemp from "../components/AvgTemp";
import Radius from "../components/Radius";

function PlanetsPage() {
  return (
    <main>
      <Planets />
      <Weight />
      <Jump />
      <Size />
      <Gravity />
      <AvgTemp />
      <Radius />
      <EscapeVelocity />
      <DistanceFromSun />
    </main>
  );
}

export default PlanetsPage;
