import React, { useEffect } from 'react'
import photo1 from '../assets/site photo 2.jpg'
import photo2 from '../assets/site photo 3.jpg'
import photo3 from '../assets/love.jpg'

import styles from './AboutMe.module.css'

import AOS from 'aos';

//Scrolling Effect
const AboutMe = () => {
    useEffect(() => {
        AOS.init();
    }, [])


  return (
    <>
        <header className={styles.mainHeader}>
            <h1><span>About</span>Thomas</h1>
            <p>My gift is to Inspire, and make dreams come true</p>
            <main></main>
        </header>
        <div className={styles.container}>
            <section className={styles.card}>
                <img className={styles.image} src={photo1} alt="My Story" />
                <div>
                    <h3>My Story</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est quia officia, sunt odio minima harum rerum assumenda asperiores perspiciatis nobis id excepturi dolorem, animi repellendus hic voluptatibus maxime eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est quia officia, sunt odio minima harum rerum assumenda asperiores perspiciatis nobis id excepturi dolorem, animi repellendus hic voluptatibus maxime eius.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </section>

            <section data-aos="fade-left" className={styles.card}>
                <img className={styles.image} src={photo2} alt="My Values" />
                <div>
                    <h3 data-aos="fade-down">My Values</h3>
                    <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est quia officia, sunt odio minima harum rerum assumenda asperiores perspiciatis nobis id excepturi dolorem, animi repellendus hic voluptatibus maxime eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est quia officia, sunt odio minima harum rerum assumenda asperiores perspiciatis nobis id excepturi dolorem, animi repellendus hic voluptatibus maxime eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </section>

            <section data-aos="fade-right" className={styles.card}>
                <img className={styles.image} src={photo3} alt="My Mission" />
                <div>
                    <h3>My Mission</h3>
                    <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est quia officia, sunt odio minima harum rerum assumenda asperiores perspiciatis nobis id excepturi dolorem, animi repellendus hic voluptatibus maxime eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est quia officia, sunt odio minima harum rerum assumenda asperiores perspiciatis nobis id excepturi dolorem, animi repellendus hic voluptatibus maxime eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </section>
                <div data-aos="fade-up"  className={styles.values}>
                    <h1 data-aos="fade-down" >Connect</h1>
                    <div className={styles.description1}>
                    <h3>Respect.</h3>
                    <h3>Empathy.</h3>
                    <h3>Respect.</h3>
                </div>
                
                <div className={styles. description2}>
                    <h3>Realness.</h3>
                    <h3>Value.</h3>
                    <h3>Community.</h3>
                    </div>
                 </div>
        </div>      
    </> 
  )
}

export default AboutMe