import styles from "./Slide.module.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function Slide({ data, index }) {
  const video = useRef(null);
  const slide = useRef(null);

  useEffect(() => {
    // video.current.play();
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 24, delay: 6 * index });

    tl.to([slide.current], {
      opacity: 1,
      duration: 2,
    })
      .to([slide.current], {
        opacity: 1,
        duration: 2,
      })
      .to([slide.current], {
        opacity: 0,
        duration: 2,
      });
  });
  return (
    <div ref={slide} className={styles.Slide}>
      <div className={styles.background}>
        <video ref={video} autoPlay muted controls loop>
          <source src={data.video} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.text}>{data.text}</h1>
      </div>
    </div>
  );
}

export default Slide;
