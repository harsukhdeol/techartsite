import styles from "./MenuButton.module.css";

export default function MenuButton({ data, index, onClick }) {
  return (
    <div className={styles.MenuButton}>
      <button onClick={onClick()}>
        <h2 className={styles.text}>{data.text}</h2>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${data.image})` }}
        />
      </button>
    </div>
  );
}
