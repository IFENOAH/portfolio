import React from 'react'
import styles from './AboutPage.module.css'

function AboutPage() {

    return (
    
        <div className = {styles.about_container}>

            <h2 className = {styles.about_header} data-aos='fade-left'>ABOUT ME</h2>

            <div className = { styles.about_holder }>
                <p className = {styles.about_content} data-aos='fade-up'>
                    Hi, my name is Noah Ife, a Front end Developer based in Lagos. 
                    I find creative ways to build bilateral digital experiences in order to meet users needs and solve their problem.
                    When I’m not coding, I am an anime junkie and a coffee lover. My other interests includes photography, good music and art.
                </p>
            </div>

            <button className = {styles.aboutButton}>
                interesting Guy? <br></br>
                Find out more
            </button>

        </div>

    )
}

export default AboutPage
