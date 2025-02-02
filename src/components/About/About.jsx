import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.scholarImg} src={getImageUrl("about/scholarIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
              I am a B.Tech graduate Mechanical Engineer from Amrita Vishwa
              Vidyapeetham, Bengaluru. Though I am from mechanical I have always
              had innate interest towards Software tech. I bring concepts to
              life, ensuring each project has functionality and is
              user-friendly.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className = {styles.data} src={getImageUrl("about/data engineer.jpeg")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineer</h3>
              <p>
                I'm a Data Engineer at LTIMindtree with experience in Managing data efficiently
                using Azure Services.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img class={styles.MERN} src={getImageUrl("about/MERN.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>MERN Stack Developer</h3>
              <p>
              I have experience in building responsive
              and optimized sites with optimised back-end systems
                and APIs.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};

export default About;