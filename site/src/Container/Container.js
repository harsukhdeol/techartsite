import styles from "./Container.module.css";
import Slider from "../Slider/Slider";
import Page from "../Page/Page";
import { pages } from "../data/data";
import { useEffect, useRef } from "react";

export default function Container() {
  const pagesRef = useRef([]);
  useEffect(() => {
    console.log(pagesRef);
  }, [pagesRef]);
  function onClick(i) {
    pagesRef.current[i].scrollIntoView();
  }
  return (
    <div className={styles.Container}>
      <Slider onClickFunc={onClick} />
      <div className={styles.body}>
        {pages.map((page, i) => (
          <Page
            key={i}
            index={i}
            data={page}
            ref={(pageRef) => pagesRef.current.push(pageRef)}
          />
        ))}
      </div>
    </div>
  );
}
