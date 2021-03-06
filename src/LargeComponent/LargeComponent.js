import styles from "./LargeComponent.module.css";

export default function LargeComponent(data) {
  return (
    <div className={styles.LargeComponent}>
      <video autoPlay controls>
        <source src={data.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className={styles.description}>{data.text}</p>
    </div>
  );
}
