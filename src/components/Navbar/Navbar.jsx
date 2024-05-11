import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const welcomeTypeSpeed = 120;
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [textToType, setTextToType] = useState("Hey👋🏻! Welcome to my Portfolio");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textToType.length > typedText.length) {
        setTypedText(textToType.substring(0, typedText.length + 1));
      }
    }, welcomeTypeSpeed);

    return () => clearTimeout(timer);
  }, [typedText, textToType]);

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.title} href="#">
          Pavan Kumar
        </a>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu_Icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.sub_header}>
        <p>{typedText}</p>
      </div>
    </>
  );
};

export default Navbar;
