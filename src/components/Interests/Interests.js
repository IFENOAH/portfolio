import React from "react";
import styles from "./Interests.module.css";

const Interests = () => {
  return (
    <div className={styles.interests_container}>
      <h2 className={styles.interests_header}>INTERESTS</h2>

      <div className={styles.interests_holder}>
        <p className={styles.interests_content}>
          I have a career in photography which i've nurtured over the past few
          years. I take amazing potraits, some of which include wedding and
          nature photographs. You can satisfy your curiosity{" "}
          <a
            href="https://unsplash.com/@noah_ife"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.links}
          >
            here
          </a>
          . I'm also a part of the Nigerian Chess Players Association, I compete
          in professional chess tournaments occasionally. I've been the faculty
          and departmental champion in my alma-matter at different times. You
          can engage me in a chess game online{" "}
          <a
            href="https://lichess.org/@/noah_ife"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.links}
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Interests;
