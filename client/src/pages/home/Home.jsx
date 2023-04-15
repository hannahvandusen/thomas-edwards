import React from "react"
import styles from "./Home.module.css"
import mainPhoto from "../../images/mainPhoto.png"
import aboutImage from "../../images/site_photo_6.jpg"
import { useEffect } from "react"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { Link } from "react-router-dom"
import AOS from "aos"

function Home() {
  //Scrolling Effect

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <main className={styles.main}>
        <img className={styles.mainPhoto} src={mainPhoto} alt="mainPhoto" />

        <h3 className={styles.mainHeader}>
          Create A Plan, Change Careers, Transform Your Life!
        </h3>
      </main>
      <div className={styles.container}>
        <section className={styles.card}>
          <img className={styles.image} src={aboutImage} alt="My Story" />
          <div className={styles.description}>
            <h3>About Thomas Edwards</h3>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              est quia officia, sunt odio minima harum rerum assumenda
              asperiores perspiciatis nobis id excepturi
              doloremipsum20,animirepellendus hic voluptatibus maxime eius.Lorem
              ipsum dolor sit ametsdfs consectetur adipisicing elithbsll.
              GreatInventore est quia officia, sunt odio minima harum rerum
              assumenda asperiores perspiciatis nobis id excepturi dolorem.
            </p>
            <Link to="./about">
              <button className={styles.buttonStory}>Read My Story</button>
            </Link>
          </div>
        </section>
      </div>

      <h1>How I can Help You</h1>

      <div className={styles.help}>
        <div data-aos="fade-up" className="box1">
          <AiOutlineMail size={45} />
          <span>My Free Newsletter;</span>
          <p className={styles.helpDescription}>
            Join the Newsletter to keep up to date with the latest greatest
            things!
          </p>
          <Link to="./newsletter">
            <button className={styles.button2}>Sign Up Here</button>
          </Link>
        </div>
        <div data-aos="fade-up" className="box2">
          <BsTelephone size={40} />

          <span>1:1 Coaching</span>
          <p className={styles.helpDescription}>
            Schdeule a call and lets build a bright future!
          </p>
          <Link to="./contact">
            <button className={styles.button2}>Book A Call</button>
          </Link>
        </div>
      </div>

      <form className={styles.form}>
        <label>
          <h1>Lets Connect</h1>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Email"
          />
        </label>
        <input className={styles.button} type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Home
