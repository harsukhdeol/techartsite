import React from "react";
import { pages, menu } from "../data/data";
import Slide from "../Slide/Slide";
import MenuButton from "../MenuButton/MenuButton";
import styles from "./Slider.module.css";

const Slider = React.forwardRef(({ onClick }, ref) => (
  <div ref={ref} className={styles.Slider}>
    <div className={styles.slideContainer}>
      {pages.map((page, i) => (
        <Slide key={i} index={i} data={page} />
      ))}
    </div>
    <div className={styles.divider} />
    <div className={styles.menuContainer}>
      {menu.map((item, i) => (
        <MenuButton key={i} index={i} data={item} onClick={onClick} />
      ))}
    </div>
  </div>
));

export default Slider;
