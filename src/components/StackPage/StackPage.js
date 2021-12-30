import React from 'react'
import styles from './StackPage.module.css'

function StackPage() {
    return (
        <div className = {styles.stack_container}>

        <h2 className = {styles.stack_header}>STACK</h2>

        <div className = { styles.stack_holder }>
            <h5> HTML </h5>
            <h5>CSS</h5>
            <h5>SCSS</h5>
            <h5>TAILWIND CSS</h5>
            <h5>JAVASCRIPT</h5>
            <h5>REACT</h5>
            <h5>REDUX</h5>
            <h5>NEXT.JS</h5>
            <h5>GIT</h5>
            <h5>PHOTOSHOP</h5>
        </div>


    </div>
    )
}

export default StackPage
