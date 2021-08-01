import { pages, menu } from "../data/data";
import Slide from "../Slide/Slide";
import MenuButton from "../MenuButton/MenuButton";
import styles from "./Slider.module.css";

function Slider() {
  return (
    <div className={styles.Slider}>
      <div className={styles.slideContainer}>
        {pages.map((page, i) => (
          <Slide key={i} {...page} />
        ))}
      </div>
      <div className={styles.menuContainer}>
        {menu.map((item, i) => (
          <MenuButton {...item} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
