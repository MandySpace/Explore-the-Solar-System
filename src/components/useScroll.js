import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function useScroll(when) {
  const control = useAnimation();
  const [element, view] = useInView({ threshold: when });
  view && control.start("show");

  return [element, control];
}

export default useScroll;
