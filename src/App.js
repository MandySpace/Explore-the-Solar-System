import "./sass/main.scss";
import Nav from "./components/Nav";
import SpaceExploration from "./pages/SpaceExploration";
import PlanetsPage from "./pages/PlanetsPage";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NasaEye from "./pages/NasaEye";
import ScrollTop from "./components/ScrollTop";
import { useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, [history]);

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
