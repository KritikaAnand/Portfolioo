import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Kritika Anand</h1>
        <p className={styles.description}>
        
        </p>
        <a href="https://drive.google.com/uc?export=download&id=1MuKa6pHZ0cZBKaOQT9K9Bg5guD-0EAbv
" className={styles.contactBtn}>
          Check Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};