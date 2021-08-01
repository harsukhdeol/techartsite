import styles from "./Page.module.css";
import LargeComponent from "../LargeComponent/LargeComponent";
import SmallComponent from "../SmallComponent/SmallComponent";

export default function Page(data) {
  return (
    <div className={styles.Page}>
      <LargeComponent {...data.large} />
      <div className={styles.grid}>
        {data.small.map((item, i) => (
          <SmallComponent key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
