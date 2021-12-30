import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className = {styles.footerWrapper}>

            <div className = {styles.footerContent}>
                <div>
                    <span className = {styles.media}>Twiiter</span>
                    <span className = {styles.media}>Instagram</span>
                    <span className = {styles.media}>FaceBook</span>
                    <span className = {styles.media}>Linkedin</span>
                </div>

                <p className = {styles.design}>Designed by: Subomi</p>
            </div>

            <h3 className = {styles.text}>Have a nice day</h3>

        </div>
    )
}

export default Footer
