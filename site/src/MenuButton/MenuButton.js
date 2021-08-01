import styles from "./MenuButton.module.css";

export default function MenuButton({ data, index, onClick }) {
  return (
    <div onClick={() => onClick(index)} className={styles.MenuButton}>
      <h2 className={styles.text}>{data.text}</h2>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${data.image})` }}
      />
    </div>
  );
}
