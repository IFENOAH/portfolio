import React from 'react'
import styles from './Interests.module.css'

const Interests = () => {

    return (

        <div className = {styles.interests_container}>

            <h2 className = {styles.interests_header} >INTERESTS</h2>

            <div className = { styles.interests_holder }>

                <p className = {styles.interests_content} >
                    I started a career in photography which is still ongoing on the side. I take amazing potraits,
                    wedding images and nature.
                    You can please your eyes with some of my works <a href = "https://unsplash.com/@noah_ife" target = "_blank" rel = "noopener noreferrer" className = { styles.links }>here</a>. 
                    Also, I compete in professional chess tournaments, part of the Nigerian Chess Players Association and have won a few accolades,
                    being my faculty and departmental champion in the university on separate occasions. You can engage me in a chess game online <a href = "https://lichess.org/@/noah_ife" target = "_blank" rel = "noopener noreferrer" className = {styles.links}>here</a>.
                </p>

            </div>

        </div>

    )
}

export default Interests
