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
          <h4>SIFUSE</h4>
          <h6 className={styles.tool}> NEXT.JS/REDUX/TAILWIND/SCSS</h6>
        </a>

        <a
          href="https://noahs-cuisine.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects2}
        >
          <h4>NOAH'S CUISINE</h4>
          <h6 className={styles.tool}>HTML/SCSS/JAVASCRIPT</h6>
        </a>

        <a
          href="https://net-cloned.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects3}
        >
          <h4>NETFLIX CLONE</h4>
          <h6 className={styles.tool}>REACT</h6>
        </a>

        <a
          href="https://checktemp.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects4}
        >
          <h4>CHECKTEMP</h4>
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
