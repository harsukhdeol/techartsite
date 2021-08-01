import styles from "./LargeComponent.css";

export default function LargeComponent(data) {
  <div className={styles.LargeComponent}>
    <video width="320" height="240" controls>
      <source src={data.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p className={styles.description}>{data.text}</p>
  </div>;
}
