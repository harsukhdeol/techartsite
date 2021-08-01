import styles from "./Slide.module.css";

function Slide(data) {
  return (
    <div className={styles.Slide}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url( ${data.image})` }}
      >
        <h1 className={styles.text}>{data.text}</h1>
      </div>
    </div>
  );
}

export default Slide;
