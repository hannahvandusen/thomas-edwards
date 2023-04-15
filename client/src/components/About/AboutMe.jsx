import React, { useEffect } from "react"
import photo1 from "../assets/site photo 2.jpg"
import photo2 from "../assets/site photo 3.jpg"
import photo3 from "../assets/love.jpg"

import styles from "./AboutMe.module.css"

import AOS from "aos"

//Scrolling Effect
const AboutMe = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <header className={styles.mainHeader}>
        <h1>
          <span>About</span>Thomas
        </h1>
        <p className={styles.p}>
          My gift is to Inspire others, and make dreams come true
        </p>
        <main></main>
      </header>

      <div className={styles.container}>
        <section className={styles.card}>
          <img className={styles.image} src={photo1} alt="My Story" />
          <div className={styles.description}>
            <h3>My Story</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              est quia officia, sunt odio minima harum rerum assumenda
              asperiores perspiciatis nobis id excepturi
              doloremipsum20,animirepellendus hic voluptatibus maxime eius.Lorem
              ipsum dolor sit ametsdfs consectetur adipisicing elithbsll.
              GreatInventore est quia officia, sunt odio minima harum rerum
              assumenda asperiores perspiciatis nobis id excepturi dolorem,
              animi repellendus hic hic voluptatibus maxime eius.
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img className={styles.image} src={photo2} alt="My Mission" />
          <div className={styles.description}>
            <h3 data-aos="zoom-in-right">My Mission</h3>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              est quia officia, sunt odio minima harum rerum assumenda
              asperiores perspiciatis nobis id excepturi
              doloremipsum20,animirepellendus hic voluptatibus maxime eius.Lorem
              ipsum dolor sit ametsdfs consectetur adipisicing elithbsll.
              asperiores perspiciatis nobis id excepturi
              doloremipsum20,animirepellendus hic voluptatibus maxime eius.Lorem
              ipsum dolor sit ametsdfs consectetur adipisicing elithbsll.
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img className={styles.image} src={photo3} alt="My Mission" />
          <div className={styles.description}>
            <h3 data-aos="zoom-in-left">My Values</h3>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              est quia officia, sunt odio minima harum rerum assumenda
              asperiores perspiciatis nobis id excepturi
              doloremipsum20,animirepellendus hic voluptatibus maxime eius.Lorem
              ipsum dolor sit ametsdfs consectetur adipisicing elithbsll.
              asperiores perspiciatis nobis id excepturi
              doloremipsum20,animirepellendus hic voluptatibus maxime eius.Lorem
              ipsum dolor sit ametsdfs consectetur adipisicing elithbsll.
            </p>
          </div>
        </section>
      </div>
      <div className={styles.form}>
        <h1 data-aos="fade-down">Get in Touch</h1>
      </div>
    </>
  )
}

export default AboutMe
