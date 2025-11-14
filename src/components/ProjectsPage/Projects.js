import React, { useState } from "react";
import styles from "./Projects.module.css";
import talentapplyImg from "../../Images/talentapply.png";
import talkamImg from "../../Images/talkam.png";
import yourmentraImg from "../../Images/mentra.png";
import useklakImg from "../../Images/klak.png";
import publicdisplayImg from "../../Images/pd.png";
import iverifyImg from "../../Images/iverify.png";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectImages = {
    talentapply: talentapplyImg,
    talkam: talkamImg,
    yourmentra: yourmentraImg,
    useklak: useklakImg,
    publicdisplay: publicdisplayImg,
    iverify: iverifyImg,
  };

  return (
    <div className={styles.project_container}>
      <h2 className={styles.project_header}>...PROJECTS</h2>
      <div style={{
          backgroundImage: hoveredProject 
            ? `linear-gradient(rgba(29, 26, 29, 0.85), rgba(29, 26, 29, 0.85)), url(${projectImages[hoveredProject]})`
            : 'none',
          backgroundSize: hoveredProject ? 'cover' : 'auto',
          backgroundPosition: hoveredProject ? 'center' : 'initial',
          backgroundRepeat: hoveredProject ? 'no-repeat' : 'initial',
          transition: 'background-image 0.7s ease-in-out',
          width: '100%',
        }}
      >

        <div className={styles.project_holder}>
          <a
            href="https://talentapply.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projects1}
            onMouseEnter={() => setHoveredProject("talentapply")}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <h4 className={styles.hoverGuy}>TALENTAPPLY</h4>
            <h6 className={styles.tool}> REACT/REDUX/RTKQUERY/TAILWIND/SCSS</h6>
          </a>

          <a
            href="https://talkam.net"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projects2}
            onMouseEnter={() => setHoveredProject("talkam")}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <h4 className={styles.hoverGuy}>TALKAM</h4>
            <h6 className={styles.tool}>REACT/TAILWIND/RTKQUERY</h6>
          </a>

          <a
            href="https://yourmentra.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projects3}
            onMouseEnter={() => setHoveredProject("yourmentra")}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <h4 className={styles.hoverGuy}>YOURMENTRA</h4>
            <h6 className={styles.tool}>REACT/TAILWIND/RTKQUERY</h6>
          </a>

          <a
            href="https://useklak.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projects4}
            onMouseEnter={() => setHoveredProject("useklak")}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <h4 className={styles.hoverGuy}>USEKLAK</h4>
            <h6 className={styles.tool}> REACT/TAILWIND/RTKQUERY</h6>
          </a>

          <a
            href="https://publicdisplay.cc/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projects5}
            onMouseEnter={() => setHoveredProject("publicdisplay")}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <h4 className={styles.hoverGuy}>PUBLICDISPLAY</h4>
            <h6 className={styles.tool}>VITE/REACT/TAILWIND</h6>
          </a>

          <a
            href="https://www.iverify.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projects6}
            onMouseEnter={() => setHoveredProject("iverify")}
            onMouseLeave={() => setHoveredProject(null)}
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
    </div>
  );
}

export default Projects;
