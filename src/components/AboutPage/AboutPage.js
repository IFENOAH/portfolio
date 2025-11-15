import React from "react";
import styles from "./AboutPage.module.css";
import Pdf from "../../Documents/ogunderu Noah.pdf";

function AboutPage() {
  return (
    <div className={styles.about_container}>
      <h2 className={styles.about_header}>ABOUT ME</h2>

      <div className={styles.about_holder}>
        <p className={styles.about_content}>
          Hi, my name is Noah Ife, a Software Engineer focused on crafting
          precise, high-impact digital experiences. I design and build systems
          that are intuitive for users, reliable for teams, and scalable for the
          long term. When I’m not writing code, I'm usually diving into anime,
          exploring photography, or hunting for new coffee blends. I have a deep
          appreciation for good music, thoughtful art, and anything that sparks
          creativity.
          <i className={styles.italics}>Interesting guy? </i>
        </p>
      </div>

      <a
        href={Pdf}
        type="application/pdf"
        width="100%"
        height="600px"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={styles.aboutButton}>Get Resume...</button>
      </a>
    </div>
  );
}

export default AboutPage;
