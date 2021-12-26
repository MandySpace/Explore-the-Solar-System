import Header from "../components/Header";
import About from "../components/About";
import KnownBodies from "../components/KnownBodies";
import Footer from "../components/Footer";
import { fadeIn } from "../animations";
import { motion } from "framer-motion";
import MadeOf from "../components/MadeOf";

function LandingPage() {
  return (
    <motion.div variants={fadeIn} initial="hidden" animate="show" exit="exit">
      <Header />
      <About />
      <MadeOf />
      <KnownBodies />
      <Footer />
    </motion.div>
  );
}

export default LandingPage;
