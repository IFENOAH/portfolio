import React from 'react'
import styles from './HeroPage.module.css'
import image1 from '../../Images/ellipse.svg'
import image2 from '../../Images/Arrow-Down.svg'

function HeroPage() {
    return (

        <div className ={ styles.hero_page } >

            <div className =  { styles.hero_header }>
                NOAH 
                <img src = {image1} alt = "dot" className = { styles.dot }>
                </img> IFE 
            </div>

            <div className = {styles.hero_content } > 

                <span>
                    <span className = {styles.hero_letter} >F</span>
                    <span className = {styles.hero_letter} >R</span>
                    <span className = {styles.hero_letter} >O</span>
                    <span className = {styles.hero_letter} >N</span>
                    <span className = {styles.hero_letter} >T</span>
                </span>

                <span>
                    <span className = {styles.hero_letter} >-</span>
                    <span className = {styles.hero_letter} >E</span>
                    <span className = {styles.hero_letter} >N</span>
                    <span className = {styles.hero_letter} >D</span>
                </span>

                <br></br>

                <span >
                    <span className = {styles.hero_letter} >D</span>
                    <span className = {styles.hero_letter} >E</span>
                    <span className = {styles.hero_letter} >V</span>
                    <span className = {styles.hero_letter} >E</span>
                </span>

                <span>
                    <span className = {styles.hero_letter} >L</span>
                    <span className = {styles.hero_letter} >O</span>
                    <span className = {styles.hero_letter} >P</span>
                    <span className = {styles.hero_letter} >E</span>
                    <span className = {styles.hero_letter} >R</span>
                </span>


                <div className = {styles.scroll_button}>
                    <span className = { styles.scroll } >Scroll</span>
                    <img src = { image2 } alt = "arrow" className ={ styles.scroll_icon }></img>
                </div>

            </div>

        
        </div>
    )
}

export default HeroPage
