import styles from "./MenuButton.module.css";

export default function MenuButton(data) {
  return (
    <div className={styles.MenuButton}>
      <h2 className={styles.text}>{data.text}</h2>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${data.image})` }}
      />
    </div>
  );
}
