import React from "react";
import styles from "./Slide.module.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Slide = React.forwardRef(({ data, index }, ref) => {
  const video = useRef(null);
  const slide = useRef(null);

  useEffect(() => {
    // video.current.play();
    /* setTimeout(() => {
      let tl = gsap.timeline({ repeat: -1, repeatDelay: 19, delay: 6 });
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
    }, index * 6000); */
  });
  return (
    <div ref={ref} className={styles.Slide}>
      <video ref={video} autoPlay muted controls loop>
        <source src={data.video} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        <h1 className={styles.text}>{data.text}</h1>
      </div>
    </div>
  );
});

export default Slide;
