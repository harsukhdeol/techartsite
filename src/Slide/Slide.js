import React from "react";
import styles from "./Slide.module.css";
import { useRef } from "react";

const Slide = React.forwardRef(({ data, index }, ref) => {
  const video = useRef(null);
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
