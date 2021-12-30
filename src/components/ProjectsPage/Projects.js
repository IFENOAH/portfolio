import React from 'react'
import styles from './Projects.module.css'

function Projects() {
    return (
        <div className = {styles.project_container}> 

            <h2 className = {styles.project_header} data-aos='flip-up'>MY WORKS</h2>

            <div className = { styles.project_holder }>

                <div className = {styles.projects1} data-aos='fade-left'>
                    <h4>DELE'S KITCHEN</h4>
                    <h6 className = {styles.tool}> HTML/CSS/JAVASCRIPT</h6>
                </div>

                <div className = {styles.projects2} data-aos='fade-right'>
                    <h4>FARTRA</h4>
                    <h6 className = {styles.tool}>HTML/SCSS/JAVASCRIPT</h6>
                </div>

                <div className = {styles.projects3} data-aos='fade-left'>
                    <h4>NETFLIX CLONE</h4>
                    <h6 className = {styles.tool}>REACT</h6>
                </div>

                <div className = {styles.projects4} data-aos='fade-right'>
                    <h4>OLD FOLIO</h4>
                    <h6 className = {styles.tool}>REACT</h6>
                </div>
            </div>

            <button className = {styles.projectButton} data-aos='fade-up'>
                nice work? <br></br>
                Exlpore More
            </button>

        </div>
    )
}

export default Projects
