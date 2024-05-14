import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
              Passionate and results-driven B.Tech IT final year student | CGPA: 8.00 | 
C++, HTML, CSS, JavaScript, C#, SQL | Seeking IT roles to make an impact.
    
              </p>
            </div>
          </li>
         
        </ul>
      </div>
    </section>
  );
};