import pages from "../data/data";
import Slide from "../Slide/Slide";
import styles from "./Slider.module.css";

function Slider() {
  return (
    <div className={styles.Slider}>
      {pages.map((page, i) => (
        <Slide key={i} {...page} />
      ))}
    </div>
  );
}

export default Slider;
