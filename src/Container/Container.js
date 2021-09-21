import styles from "./Container.module.css";
import Slider from "../Slider/Slider";
import Page from "../Page/Page";
import { pages, menu } from "../data/data";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Container() {
  const pagesRef = useRef([]);
  const menuButtonRef = useRef([menu.length]);
  const menuRef = useRef(null);
  const slider = useRef(null);
  const header = useRef(null);
  const footer = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let pos = window.scrollY;
      setScrollPos(pos);
      if (pos > window.innerHeight) {
        gsap.to([footer.current], {
          duration: 1,
          justifyContent: "center",
          height: " auto",
          fill: "#555",
        });
        gsap.to([header.current], {
          duration: 1,
          opacity: 0,
        });
        gsap.to([menuRef.current], { opacity: 1, duration: 1 });
      } else if (pos < window.innerHeight * 1.5) {
        gsap.to([menuRef.current], { opacity: 0, duration: 0.5 });
        gsap.to([footer.current], {
          duration: 1,
          justifyContent: "flex-start",
          height: "170px",
        });

        gsap.to([header.current], {
          duration: 1,
          opacity: 1,
        });
      }

      menuButtonRef.current.forEach((button, i) => {
        let top = window.innerHeight;
        let loc = pagesRef.current[i].getBoundingClientRect();

        if (loc.bottom > top / 2 && loc.top < top) {
          gsap.to([button.children[0]], {
            backgroundColor: "#9922dd",
            duration: 1,
          });
          gsap.to([button.children[1]], {
            color: "#cf7cff",
            duration: 1,
          });
        } else {
          gsap.to([button.children[0]], {
            backgroundColor: "#444",
            duration: 1,
          });
          gsap.to([button.children[1]], {
            color: "#888",
            duration: 1,
          });
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  function onClick(i) {
    pagesRef.current[i].scrollIntoView();
  }

  return (
    <div className={styles.Container}>
      <Slider onClick={onClick} ref={slider} />
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
      <div className={styles.overlay}>
        <div ref={header} className={styles.header}>
          <h2>Harsukh Deol</h2>
          <h3> Technical Artist</h3>
        </div>
        <div ref={footer} className={styles.footer}>
          <ul className={styles.socials}>
            <li>
              <a href="mailto:harsukhkdeol@gmail.com" title="Email">
                <div>
                  <svg
                    viewBox="0 0 512 512"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path>
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a href="https://github.com/harsukhdeol" title="GitHub">
                <div>
                  <svg
                    viewBox="0 0 512 512"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/harsukh.deol/"
                title="Instagram"
              >
                <div>
                  <svg
                    viewBox="0 0 512 512"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                    <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                    <circle cx="351.5" cy="160.5" r="21.5"></circle>
                  </svg>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/harsukh-deol-861920177/"
                title="Linkedin"
              >
                <div>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div ref={menuRef} className={styles.menu}>
          <button
            className={styles.toTop}
            onClick={() => {
              slider.current.scrollIntoView();
            }}
          >
            <div className={styles.icon} />
            <h4>Home</h4>
          </button>
          {menu.map((item, i) => (
            <button
              key={i}
              className={styles.menuButton}
              onClick={() => onClick(i)}
              ref={(btnref) => (menuButtonRef.current[i] = btnref)}
            >
              <div className={styles.icon} />
              <h4>{item.text}</h4>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
