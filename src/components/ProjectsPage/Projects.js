import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.project_container}>
      <h2 className={styles.project_header}>MY WORK</h2>

      <div className={styles.project_holder}>
        <a
          href="https://sifuse.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects1}
        >
          <h4 className={styles.hoverGuy}>SIFUSE</h4>
          <h6 className={styles.tool}> NEXT.JS/REDUX/TAILWIND/SCSS</h6>
        </a>

        <a
          href="https://noahs-cuisine.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects2}
        >
          <h4 className={styles.hoverGuy}>NOAH'S CUISINE</h4>
          <h6 className={styles.tool}>REACT/CSS MODULES</h6>
        </a>

        <a
          href="https://net-cloned.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects3}
        >
          <h4 className={styles.hoverGuy}>NETFLIX CLONE</h4>
          <h6 className={styles.tool}>REACT</h6>
        </a>

        <a
          href="https://exstracker.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects4}
        >
          <h4 className={styles.hoverGuy}>E-Tracker</h4>
          <h6 className={styles.tool}> REACT/CSS</h6>
        </a>

        <a
          href="https://checktemp.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects5}
        >
          <h4 className={styles.hoverGuy}>C-WEATHER</h4>
          <h6 className={styles.tool}>REACT</h6>
        </a>
      </div>

      {/* <button className = {styles.projectButton} data-aos='fade-up'>
                nice work? <br></br>
                Exlpore More
            </button> */}
    </div>
  );
}

export default Projects;
