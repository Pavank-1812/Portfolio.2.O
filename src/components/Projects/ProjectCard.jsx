import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";


//destructuring props
export const ProjectCard = ({project: {title, imageSrc, description, skills, Project_Link, Github_Link}}) => {
  return (
    <div className={styles.container}>
      <img
      className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return <li className={styles.skill} key={id}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} target="_blank" href={Project_Link}>
          Project Link
        </a>
      </div>
      <div className={styles.links}>
        <a className={styles.link} target="_blank" href={Github_Link}>
          Github Link
        </a>
      </div>
    </div>
  );
};
