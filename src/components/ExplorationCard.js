import { motion } from "framer-motion";
import { moveHorizontalAnim } from "../animations";
import useScroll from "../components/useScroll";

function ExplorationCard({
  mission,
  year,
  description,
  country,
  image,
  index,
}) {
  const [element, control] = useScroll(0.5);

  return (
    <motion.div
      variants={moveHorizontalAnim(index % 2 === 0 ? 80 : -80)}
      initial="hidden"
      animate={control}
      className="timeline-card"
      ref={element}
    >
      <div
        className="timeline-card__info"
        style={{ order: index % 2 === 0 ? `1` : `2` }}
      >
        <p className="timeline-card__info__year">{year}</p>
        <p className="timeline-card__info__mission">{mission}</p>
        <p className="timeline-card__info__description">{description}</p>
        <div className="timeline-card__info__country">
          <img src={country} alt="country flag" />
        </div>
        <div className="line"></div>
      </div>
      <div
        className="timeline-card__img"
        style={{ order: index % 2 === 0 ? `2` : `1` }}
      >
        <img src={image} alt="Mission" />
      </div>
    </motion.div>
  );
}

export default ExplorationCard;
