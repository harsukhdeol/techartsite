import styles from "./Slide.module.css";
import Page from "../Page/Page";
function Slide(data) {
  return (
    <div className={styles.Slide}>
      <div className={styles.header}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url( ${data.image})` }}
        >
          <h1 className={styles.text}>{data.text}</h1>
        </div>
      </div>
      <Page {...data} />
    </div>
  );
}

export default Slide;
