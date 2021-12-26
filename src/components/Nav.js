import logo from "../img/logo.png";
import { Link, useLocation } from "react-router-dom";
import menu from "../img/menu.svg";
import close from "../img/close.png";
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const navItems = ["Home", "Planets", "Space Exploration", "Virtual Tour"];

  const navLinks = ["/", "/planets", "/space-exploration", "/nasa-eye"];

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  const renderNavItems = (className) => {
    return navItems.map((item, i) => (
      <Link
        key={i}
        to={navLinks[i]}
        className={`${className} ${
          location.pathname === navLinks[i] ? "active-page" : ""
        }`}
        onClick={closeMenuHandler}
      >
        <li>{item}</li>
      </Link>
    ));
  };

  return (
    <div className="header max-width">
      <Link to="/" className="header__logo-box">
        <img src={logo} alt="Website logo" className="header__logo" />
        <h2 className="header__name">Astra</h2>
      </Link>
      <div className="hamburger" onClick={openMenuHandler}>
        <img src={menu} alt="menu icon" className="hamburger__icon" />
      </div>

      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="modal"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              exit={{ width: "0%" }}
              transition={{ type: "tween" }}
              className="overlay"
            >
              <div className="close" onClick={closeMenuHandler}>
                <img src={close} alt="close icon" className="close-icon" />
              </div>
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                exit={{ opacity: 0, transition: { delay: 0, duration: 0.2 } }}
                className="menu-nav"
              >
                <ul className="menu-nav-list">
                  {renderNavItems("menu-nav-items")}
                </ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById("menu-overlay")
      )}
      <nav className="header__nav">
        <ul className="header__nav-list">
          {renderNavItems("header__nav-item")}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
