import React, { useEffect, useState, useRef } from "react"
import styles from "./Home.module.css"
import mainPhoto from "../../images/mainPhoto.png"
import TestimonialCarousel from "../../components/carousel/Carousel"
import aboutImage from "../../images/site_photo_6.jpg"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { Outlet, Link, useNavigate } from "react-router-dom"
import AOS from "aos"
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap"
import newImage from "../../images/site_photo_2.jpg"

function Home() {
  const navigate = useNavigate()
  const [story, setStory] = useState()

  const emailRef = useRef()
  const nameRef = useRef()

  //fetch about section
  const fetchAbout = async () => {
    const url = `http://localhost:4000/about/643ae5920f74ad63f71a205d`
    const requestOptions = {
      method: "GET",
    }

    try {
      const res = await fetch(url, requestOptions)
      const data = await res.json()
      // console.log(data);
      const { about, story, mission, value } = data.about
      setStory(story)
    } catch (err) {
      console.error(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const name = nameRef.current.value

    let bodyObj = JSON.stringify({ email, name })
    const url = `http://localhost:4000/subscribe`
    const headers = new Headers({
      "Content-Type": "application/json",
    })

    const requestOptions = {
      headers,
      body: bodyObj,
      method: "POST",
    }

    try {
      const res = await fetch(url, requestOptions)
      const data = await res.json()

      console.log(data)
      if (data.newSubscriber) {
        alert("Thanks for subscribing!")
      } else {
        alert(data.Error)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    // scrolling effect
    AOS.init()
    fetchAbout()
  }, [])

  //Header Ideas
  //Create A Plan, Change Careers, Transform Your Life!
  return (
    <>
      <main className={styles.main}>
        <img className={styles.mainPhoto} src={newImage} alt="mainPhoto" />
      </main>
      <div className={styles.container}>
        <section className={styles.card}>
          <img
            id="about-image"
            className="img-fluid"
            src={aboutImage}
            alt="My Story"
          />
          <div className={styles.description}>
            <h3 className={styles.titles}>About Thomas Edwards</h3>
            <p className={styles.paragraph} data-aos="fade-up">
              {story}
            </p>
            <Link to="/about">
              <button
                className={styles.button}
                style={{ maxWidth: "120px", padding: "5.5px" }}
              >
                Read My Story
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* carousel component */}
      <div
        class="container-fluid py-2"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <TestimonialCarousel />
      </div>

      {/* How can I help section */}
      <h1 className={styles.titles}>How I Can Help You</h1>
      <br />
      <Container>
        <Row>
          <Col md="8">
            <div data-aos="fade-up">
              {/* <AiOutlineMail size={70} />
                    <br />
                    
                    <a id="bottom">
                        <button className={styles.buttonHelp}>Sign Up Here</button>
                        </a>  */}
              {/* <h4 >Let's Connect</h4> */}
              <Form onSubmit={handleSubmit} className={styles.formHelp}>
                <FormGroup>
                  <Input placeholder="Email" innerRef={emailRef} />
                  <Input placeholder="Name" innerRef={nameRef} />
                </FormGroup>
                <button
                  className={styles.button}
                  style={{
                    marginBottom: "20px",
                    maxWidth: "120px",
                    padding: "5.5px",
                  }}
                >
                  Subscribe
                </button>
              </Form>
            </div>
          </Col>

          <Col>
            <div data-aos="fade-up">
              <BsTelephone style={{ color: "white" }} size={80} />
              <br />
              <Link
                to="https://calendly.com/innerfamous"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={styles.button}
                  style={{
                    maxWidth: "120px",
                    padding: "5.5px",
                    marginTop: "15px",
                  }}
                >
                  Schedule A Meeting
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
