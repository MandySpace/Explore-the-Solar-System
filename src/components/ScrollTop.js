import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  const location = useLocation();

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);

  return null;
}

export default ScrollTop;
