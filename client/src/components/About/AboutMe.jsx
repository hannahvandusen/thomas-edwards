import React, { useEffect, useState } from "react"
import photo1 from "../../images/Thomas_Square.png"
import photo2 from "../assets/site photo 3.jpg"
import photo3 from "../assets/love.jpg"
import thomasNews from "../assets/thomasNews.jpg"
import styles from "./AboutMe.module.css"
import AOS from "aos"
// import { Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
import styles2 from "../../pages/home/Home.module.css"

//Scrolling Effect
const AboutMe = () => {
  const navigate = useNavigate()

  const [about, setAbout] = useState()
  const [story, setStory] = useState()
  const [mission, setMission] = useState()
  const [value, setValue] = useState()

  const fetchAbout = async () => {
    const url = `http://localhost:4000/about/643ae5920f74ad63f71a205d`
    const requestOptions = {
      method: "GET",
    }

    try {
      const res = await fetch(url, requestOptions)
      const data = await res.json()
      console.log(data)
      const { about, story, mission, value } = data.about
      setAbout(about)
      setStory(story)
      setMission(mission)
      setValue(value)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    AOS.init()
    fetchAbout()
  }, [])

  return (
    <>
      <header className={styles.mainHeader}>
        <h1>
          <span>About </span>Thomas
        </h1>
        <p> {about} </p>
      </header>

      <div className={styles.container}>
        <section className={styles.card}>
          <img className={styles.image} src={thomasNews} alt="My Story" />

          <div className={styles.description}>
            <h3>My Story</h3>
            <p>{story}</p>
          </div>
        </section>

        <section className={styles.card}>
          <img className={styles.image} src={photo2} alt="My Mission" />
          <div className={styles.description}>
            <h3 data-aos="zoom-in-right">My Mission</h3>
            <p data-aos="fade-up">{mission}</p>
          </div>
        </section>

        <section className={styles.card}>
          <img className={styles.image} src={photo3} alt="My Mission" />
          <div className={styles.description}>
            <h3 data-aos="zoom-in-left">My Values</h3>
            <p data-aos="fade-up">{value}</p>
          </div>
        </section>
      </div>
      <div className={styles.form}>
        <button
          className={styles2.button}
          data-aos="fade-up"
          onClick={() => navigate("/intake")}
          href="#top"
          style={{
            maxWidth: "120px",
            padding: "5.5px",
          }}
        >
          Get in Touch
        </button>
      </div>
    </>
  )
}

export default AboutMe
