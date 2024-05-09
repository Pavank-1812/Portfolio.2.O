import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pavan Kanamarlapudi</h1>
        <p className={styles.description}>I'm a MERN Stack Developer. Reach out to know more.</p>
        <a className={styles.contactBtn} href="mailto:pavankanamarlapudi18@gmail.com">Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.jpg")} alt="hero_Image" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>

  );
};

export default Hero;
