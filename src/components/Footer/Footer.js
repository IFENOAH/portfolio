import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className = {styles.footerWrapper}>


            <div className = {styles.media_links}>

                <a href = "https://twitter.com/Noah_ife" target = "_blank" rel = "noopener noreferrer" className = {styles.media}>TWITTER</a>
                <a href = "https://github.com/IFENOAH" target = "_blank" rel = "noopener noreferrer" className = {styles.media}>GIT</a>
                <a href = "https://unsplash.com/@noah_ife" target = "_blank" rel = "noopener noreferrer" className = {styles.media}>UNSPLASH</a>
                <a href = "https://www.linkedin.com/in/ifeoluwadayo-ogunderu-5144561a6/" target = "_blank" rel = "noopener noreferrer" className = {styles.media}>LINKEDIN</a>

            </div>

            <p className = {styles.design}>Designed by: <i><a href = "https://www.behance.net/subomifortune"  target="_blank" rel="noopener noreferrer" className = {styles.subomi} > Olasubomi </a></i> </p>


        </div>
    )
}

export default Footer
