import React from 'react'
import styles from './ContactPage.module.css'

function ContactPage() {
    return (

        <div className = {styles.contactPage}>
            <h6 className = {styles.locate}>Have a Project in Mind?</h6>

            <div className = {styles.contactLink}>
                <div className={styles.marqueeContainer}>
                    <a href= "mailto:ifeoluwadayonoah@gmail.com?subject=Hey there!" target="_blank" rel = "noopener noreferrer" className = {styles.slide}> CONTACT ME - LET'S WORK TOGETHER </a>
                    <a href= "mailto:ifeoluwadayonoah@gmail.com?subject=Hey there!" target="_blank" rel = "noopener noreferrer" className = {styles.slide}> CONTACT ME - LET'S WORK TOGETHER </a>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
