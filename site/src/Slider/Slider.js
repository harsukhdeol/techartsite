import pages from "../data/data";
import Slide from "../Slide/Slide";
import styles from "./Slider.module.css";

function Slider() {
  function currentSlide(i) {
    showSlides(i);
  }
  function showSlides(i) {
    console.log(i);
  }
  return (
    <div className={styles.Slider}>
      <div className={styles.slideshowContainer}>
        {pages.map((page, i) => (
          <Slide key={i} {...page} />
        ))}
      </div>
      <div className={styles.navButton}>
        <a className={styles.prev} onClick="plusSlides(-1)">
          &#10094;
        </a>
        <a className={styles.next} onClick="plusSlides(1)">
          &#10095;
        </a>
      </div>
      <div className={styles.dots}>
        {pages.map((page, i) => (
          <span key={i} className={styles.dot} onClick={currentSlide(i)} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
