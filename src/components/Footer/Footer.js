import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className = {styles.footerWrapper}>


            <div className = {styles.media_links}>

                <span className = {styles.media}>Twitter</span>
                <span className = {styles.media}>Instagram</span>
                <span className = {styles.media}>FaceBook</span>
                <span className = {styles.media}>Linkedin</span>

            </div>

            <p className = {styles.design}>Designed by: <i><a href = "https://www.behance.net/subomifortune"  target="_blank" rel="noopener noreferrer" > Subomi </a></i> </p>


        </div>
    )
}

export default Footer
