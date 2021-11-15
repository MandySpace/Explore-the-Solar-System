import "./sass/main.scss";
import Nav from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import PlanetsPage from "./pages/PlanetsPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/" exact>
          <AboutPage />
        </Route>

        <Route path="/planets" exact>
          <PlanetsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
