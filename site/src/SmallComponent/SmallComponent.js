import styles from "./SmallComponent.module.css";

export default function SmallComponent(data) {
  return (
    <div className={styles.SmallComponent}>
      <video controls>
        <source src={data.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className={styles.description}>{data.text}</p>
    </div>
  );
}
