import React from 'react'
import styles from './Navbar.module.css'


function Navbar() {
    return (
        <div className = {styles.navbar}>
            
            <h2>NI</h2>

            <div className = {styles.toggle}>
                <div className = { styles.menu_btn }></div>
            </div>

        </div>
    )
}

export default Navbar
