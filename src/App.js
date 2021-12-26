import "./sass/main.scss";
import Nav from "./components/Nav";
import SpaceExploration from "./pages/SpaceExploration";
import PlanetsPage from "./pages/PlanetsPage";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NasaEye from "./pages/NasaEye";
import ScrollTop from "./components/ScrollTop";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollTop />
      <Nav />

      <AnimatePresence exitBeforeEnter>
        <Switch key={location.key} location={location}>
          <Route path="/" exact>
            <LandingPage />
          </Route>

          <Route path="/planets" exact>
            <PlanetsPage />
          </Route>

          <Route path="/space-exploration" exact>
            <SpaceExploration />
          </Route>

          <Route path="/nasa-eye" exact>
            <NasaEye />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
