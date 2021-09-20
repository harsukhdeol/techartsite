import styles from "./Page.module.css";
import LargeComponent from "../LargeComponent/LargeComponent";
import SmallComponent from "../SmallComponent/SmallComponent";
import React from "react";

const Page = React.forwardRef(({ data }, ref) => (
  <div ref={ref} className={styles.Page}>
    <div className={styles.background}>
      <div className={styles.hBorder} />
      <div className={styles.vBorder} />
    </div>
    <h1 className={styles.title}>{data.text}</h1>
    <LargeComponent {...data.large} />
    <div className={styles.grid}>
      {data.small.map((item, i) => (
        <SmallComponent key={i} {...item} />
      ))}
    </div>
  </div>
));
export default Page;
