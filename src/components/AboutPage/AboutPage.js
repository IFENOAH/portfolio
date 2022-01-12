import React from 'react'
import styles from './AboutPage.module.css'
import Pdf from '../../Documents/MyResume.pdf'

function AboutPage() {

    return (
    
        <div className = {styles.about_container}>

            <h2 className = {styles.about_header} >ABOUT ME</h2>

            <div className = { styles.about_holder }>
                <p className = {styles.about_content} >
                    Hi, my name is Noah Ife, a Front end Developer based in Lagos. 
                    I find creative ways to build bilateral digital experiences in order to meet users needs and solve their problem.
                    When I’m not coding, I am an anime junkie and a coffee lover. My other interests includes photography, good music and art. <i className = {styles.italics}>Interesting guy? </i>
                </p>
            </div>



            <a href = { Pdf } type = "application/pdf" width = "100%" height = "600px" target = "_blank" rel = "noopener noreferrer" >
                <button className = {styles.aboutButton}>
                    Find out more
                </button>
            </a>

        </div>

    )
}

export default AboutPage
