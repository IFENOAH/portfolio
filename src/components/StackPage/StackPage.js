import React from 'react'
import styles from './StackPage.module.css'
import image2 from '../../Images/html_icon.svg'
import image3 from '../../Images/css.png'
import image4 from '../../Images/sass_icon.svg'
import image5 from '../../Images/tailwind.svg'
import image6 from '../../Images/js_logo.svg'
import image7 from '../../Images/react_icon.svg'
import image8 from '../../Images/redux.svg'
import image9 from '../../Images/next_icon.svg'
import image10 from '../../Images/git.svg'
import image11 from '../../Images/photoshop.png'


function StackPage() {
    return (
        <div className = {styles.stack_container}>

        <h2 className = {styles.stack_header} data-aos='fade-right'>STACK</h2>

        <span className = {styles.text}> I make use of technologies and languages such as: </span>

        <div className = { styles.stack_holder }>
            <span className = {styles.tool} data-aos='fade-right'> <img src = {image2} alt = "dot" className = { styles.img }></img> HTML </span>
            <span className = {styles.tool} data-aos='fade-right'> <img src = {image3} alt = "dot" className = { styles.img }></img>CSS</span>
            <span className = {styles.tool} data-aos='fade-right'> <img src = {image4} alt = "dot" className = { styles.img }></img>SCSS</span>
            <span className = {styles.tool} data-aos='fade-left'> <img src = {image5} alt = "dot" className = { styles.img2 }></img>TAILWIND CSS</span>
            <span className = {styles.tool} data-aos='fade-left'> <img src = {image6} alt = "dot" className = { styles.img2 }></img>JAVASCRIPT</span>
            <span className = {styles.tool} data-aos='fade-left'> <img src = {image7} alt = "dot" className = { styles.img3 }></img>REACT</span>
            <span className = {styles.tool} data-aos='fade-right'> <img src = {image8} alt = "dot" className = { styles.img3 }></img>REDUX</span>
            <span className = {styles.tool} data-aos='fade-right'> <img src = {image9} alt = "dot" className = { styles.img3 }></img>NEXT.JS</span>
            <span className = {styles.tool} data-aos='fade-left'> <img src = {image10} alt = "dot" className = { styles.img }></img>GIT</span>
            <span className = {styles.tool} data-aos='fade-left'> <img src = {image11} alt = "dot" className = { styles.img2 }></img>PHOTOSHOP</span>
        </div>


    </div>
    )
}

export default StackPage
