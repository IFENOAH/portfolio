import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.project_container}>
      <h2 className={styles.project_header}>...PROJECTS</h2>

      <div className={styles.project_holder}>
        <a
          href="https://talentapply.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects1}
        >
          <h4 className={styles.hoverGuy}>TALENTAPPLY</h4>
          <h6 className={styles.tool}> REACT/REDUX/RTKQUERY/TAILWIND/SCSS</h6>
        </a>

        <a
          href="https://talkam.net"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects2}
        >
          <h4 className={styles.hoverGuy}>TALKAM</h4>
          <h6 className={styles.tool}>REACT/TAILWIND/RTKQUERY</h6>
        </a>

        <a
          href="https://yourmentra.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects3}
        >
          <h4 className={styles.hoverGuy}>YOURMENTRA</h4>
          <h6 className={styles.tool}>REACT/TAILWIND/RTKQUERY</h6>
        </a>

        <a
          href="https://useklak.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects4}
        >
          <h4 className={styles.hoverGuy}>USEKLAK</h4>
          <h6 className={styles.tool}> REACT/TAILWIND/RTKQUERY</h6>
        </a>

        <a
          href="https://publicdisplay.cc/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects5}
        >
          <h4 className={styles.hoverGuy}>PUBLICDISPLAY</h4>
          <h6 className={styles.tool}>VITE/REACT/TAILWIND</h6>
        </a>

        <a
          href="https://www.iverify.ng/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects6}
        >
          <h4 className={styles.hoverGuy}>IVERIFY</h4>
          <h6 className={styles.tool}>REACT/TYPESCRIPT/TAILWIND</h6>
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
