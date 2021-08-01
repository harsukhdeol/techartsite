import styles from "./Slide.module.css";
import Page from "../Page/Page";
import { useEffect, useRef } from "react";

function Slide(data) {
  const video = useRef(null);
  useEffect(() => {
    video.current.play();
  });
  return (
    <div className={styles.Slide}>
      <div className={styles.header}>
        <div className={styles.background}>
          <video ref={video} autoplay muted controls loop>
            <source src={data.video} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
          <h1 className={styles.text}>{data.text}</h1>
        </div>
      </div>
    </div>
  );
}

export default Slide;
