import React from 'react'
import styles from './Projects.module.css'

function Projects() {
    return (
        <div className = {styles.project_container}> 

            <h2 className = {styles.project_header} data-aos='flip-up'>MY WORKS</h2>

            <div className = { styles.project_holder }>

                <a href =  "https://sifuse.com/" target="_blank" rel="noopener noreferrer"  className = {styles.projects1} data-aos='fade-left'>
                    <h4>SIFUSE</h4>
                    <h6 className = {styles.tool}> NEXT.JS/REDUX/TAILWIND/SCSS</h6>
                </a>

                <a href = "https://fartra.netlify.app/" target="_blank" rel="noopener noreferrer" className = {styles.projects2} data-aos='fade-right'>
                    <h4>FARTRA</h4>
                    <h6 className = {styles.tool}>HTML/SCSS/JAVASCRIPT</h6>
                </a>

                <a  href =  "https://net-cloned.netlify.app" target="_blank" rel="noopener noreferrer" className = {styles.projects3} data-aos='fade-left'>
                    <h4>NETFLIX CLONE</h4>
                    <h6 className = {styles.tool}>REACT</h6>
                </a>

                <a href = "https://ifenoah.github.io/DevNoah/" target="_blank" rel="noopener noreferrer" className = {styles.projects4} data-aos='fade-right'>
                    <h4>OLD FOLIO</h4>
                    <h6 className = {styles.tool}>REACT</h6>
                </a>

            </div>

            {/* <button className = {styles.projectButton} data-aos='fade-up'>
                nice work? <br></br>
                Exlpore More
            </button> */}

        </div>
    )
}

export default Projects
