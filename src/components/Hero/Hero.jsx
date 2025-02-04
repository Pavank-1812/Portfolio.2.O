import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import resume from "../../Resume/Pavan_Kanamarlapudi.pdf";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pavan Kanamarlapudi</h1>
        <p className={styles.description}>
          I'm a Data Engineer. Reach out to know more.
        </p>
        <div className={styles.link}>
          <a
            target="_blank"
            className={styles.contactBtn}
            href="mailto:pavankanamarlapudi18@gmail.com"
          >
            Get in touch🤝
          </a>
          <a
          target="_blank"
            className={styles.contactBtn}
            href={resume}
          >
            Resume⬇️
          </a>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="hero_Image"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
