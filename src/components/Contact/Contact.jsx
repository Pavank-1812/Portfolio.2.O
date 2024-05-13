import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils.js";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div class={styles.text}>
        <h2>Contact Me 📞</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul class={styles.links}>
        <li class={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email-Icon" />
          <a target="_blank" href="mailto:pavankanamarlapudi18@gmail.com">
            pavankanamarlapudi18@gmail.com
          </a>
        </li>
        <li class={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn-Icon"
          />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pavan-kanamarlapudi-124958214/"
          >
            LinkedIn.com/PavanK
          </a>
        </li>
        <li class={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github-Icon" />
          <a target="_blank" href="https://github.com/PavanK-1812">
            github.com/PavanK-1812
          </a>
        </li>
        <li class={styles.link}>
           <h2 className={styles.phone}>PH: +91 9000483109</h2>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
