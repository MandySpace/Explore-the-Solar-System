import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Website logo" className="header__logo" />
        <h2 className="header__name">Astra</h2>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <Link to="/" className="header__nav-item">
            <li>About</li>
          </Link>
          <Link to="/planets" className="header__nav-item">
            <li>Planets</li>
          </Link>
          <Link className="header__nav-item">
            <li>Nasa Eye</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
