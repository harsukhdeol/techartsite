import styles from "./Slide.module.css";
import Page from "../Page/Page";
function Slide(data) {
  return (
    <div className={styles.Slide}>
      <div className={styles.header}>
        <div className={styles.background}>
          <video width="320" height="240" autoplay>
            <source src={data.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className={styles.text}>{data.text}</h1>
        </div>
      </div>
    </div>
  );
}

export default Slide;
