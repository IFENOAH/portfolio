import React from 'react'
import styles from './HeroPage.module.css'
import image1 from '../../Images/ellipse.svg'
import image2 from '../../Images/Arrow-Down.svg'

function HeroPage() {
    return (

        <div className ={ styles.hero_page } >

            <div className =  { styles.hero_header }>
                NOAH 
                <img src = {image1} alt = "dot">
                </img> IFE 
            </div>

            <div tclassName = {styles.hero_content } > 

                <span>
                    <span className = {styles.hero_letter} data-aos='fade-right'>F</span>
                    <span className = {styles.hero_letter} data-aos='fade-left'>R</span>
                    <span className = {styles.hero_letter} data-aos='fade-up'>O</span>
                    <span className = {styles.hero_letter} data-aos='fade-down'>N</span>
                    <span className = {styles.hero_letter} data-aos='flip-down'>T</span>
                </span>

                <span>
                    <span className = {styles.hero_letter} data-aos='zoom-in'>-</span>
                    <span className = {styles.hero_letter} data-aos='fade-left'>E</span>
                    <span className = {styles.hero_letter} data-aos='fade-right'>N</span>
                    <span className = {styles.hero_letter} data-aos='fade-up'>D</span>
                </span>

                <br></br>

                <span>
                    <span className = {styles.hero_letter} data-aos='flip-up'>D</span>
                    <span className = {styles.hero_letter} data-aos='spin-up'>E</span>
                    <span className = {styles.hero_letter} data-aos='fade-right'>V</span>
                    <span className = {styles.hero_letter} data-aos='fade-up'>E</span>
                </span>
                <span>
                    <span className = {styles.hero_letter} data-aos='fade-left'>L</span>
                    <span className = {styles.hero_letter} data-aos='fade-down'>O</span>
                    <span className = {styles.hero_letter} data-aos='fade-down'>P</span>
                    <span className = {styles.hero_letter} data-aos='flip-right'>E</span>
                    <span className = {styles.hero_letter} data-aos='flip-left'>R</span>
                </span>

            </div>

            {/* <div className = {styles.scroll_button} data-aos='flip-down'>
                <span className = { styles.scroll } >Scroll</span>
                <img src = { image2 } alt = "arrow"></img>
            </div> */}

        </div>
    )
}

export default HeroPage
