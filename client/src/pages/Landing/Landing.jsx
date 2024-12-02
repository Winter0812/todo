import React from 'react'
import Navbar from '../../components/Navbar'
import landing from '../../assets/landing.jpg'
import styles from './Landing.module.css'
import { Link } from 'react-router'

function Landing(){
    return (
        <div>
            <Navbar active={"home"}/>
            <div className={styles.landing__wrapper}>
                <div className={styles.landing__text}>
                    <h1>Schedule your daily tasks with <span className = "primaryText">DoDo!</span></h1>
                    <div className = "btnWrapper">
                        <Link to="/register" className="primaryBtn">Register</Link>
                        <Link to="/login" className="primaryBtn">Login</Link>
                    </div>
                </div>
                <div className={styles.landing__img}>
                    <img src={landing} alt = "Landing" />
                </div>
            </div>
        </div>
    )
}

export default Landing