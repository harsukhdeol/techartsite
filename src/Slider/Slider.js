import React, { useRef, useEffect } from "react";
import { pages, menu } from "../data/data";
import Slide from "../Slide/Slide";
import MenuButton from "../MenuButton/MenuButton";
import { gsap } from "gsap";
import styles from "./Slider.module.css";

const Slider = React.forwardRef(({ onClick }, ref) => {
  const slidesRef = useRef([menu.length]);

  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1 });
    slidesRef.current.forEach((slide, i) => {
      tl.to(
        [slide],
        {
          opacity: 1,
          duration: 2,
        },
        ">"
      ).to(
        [slide],
        {
          opacity: 0,
          duration: 1,
        },
        ">+=2"
      );
    });
    /*   tl.to(
      [slidesRef.current[0]],
      {
        opacity: 1,
        duration: 2,
      },
      ">"
    ); */
  }, []);
  return (
    <div ref={ref} className={styles.Slider}>
      <div className={styles.slideContainer}>
        <div>
          {pages.map((page, i) => (
            <Slide
              ref={(slide) => {
                slidesRef.current[i] = slide;
              }}
              key={i}
              index={i}
              data={page}
            />
          ))}
        </div>
        <div className={styles.overlay} />
      </div>
      <div className={styles.divider} />
      <div className={styles.menuContainer}>
        {menu.map((item, i) => (
          <MenuButton key={i} index={i} data={item} onClick={onClick} />
        ))}
      </div>
    </div>
  );
});

export default Slider;
