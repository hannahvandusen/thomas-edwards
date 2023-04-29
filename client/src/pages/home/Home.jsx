import React, { useEffect, useState, useRef } from "react";
import styles from "./Home.module.css";
import mainPhoto from "../../images/mainPhoto.png";
import TestimonialCarousel from '../../components/carousel/Carousel';
import aboutImage from "../../images/site_photo_6.jpg";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Outlet, Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import { Form, FormGroup, Input, Label, Button, Container, Row, Col } from "reactstrap"
import newImage from "../../images/site_photo_2.jpg";

function Home() {

  const navigate = useNavigate(); 

    const [story, setStory] = useState();
    const [ testimonials, setTestimonials ] = useState();
    const emailRef = useRef();
    const nameRef = useRef();


  const fetchAbout = async () => {
    const url = `http://localhost:4000/about/643ae5920f74ad63f71a205d`
    const requestOptions = {
          method: "GET",
    }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            // console.log(data); 
            const { about, story, mission, value } = data.about;
            setStory(story);
        } catch (err) {
            console.error(err)
        }
    }
    const fetchTestimonials = async () => {
      const url = 'http://localhost:4000/testimonialsindex'
      const requestOptions = {
        method: 'GET'
      }
  
      try {
        const res = await fetch(url, requestOptions);
        const data = await res.json();
  
        setTestimonials(data.testimonials);
        console.log(testimonials);
  
      } catch (err) {
        console.log(err)
      }
    }; 
  


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
            const res = await fetch(url, requestOptions);
            const data = await res.json();

      console.log(data)
      if(data.newSubscriber) {
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
    fetchTestimonials()
  }, [])

    //Header Ideas
    //Create A Plan, Change Careers, Transform Your Life!
    return (
        <>
            <main className={styles.main}>
                <img className={styles.mainPhoto} src={newImage} alt="mainPhoto" />

                {/* <h3 className={styles.mainHeader}>
          Lets Create a Bright Future Together!
        </h3> */}

            </main>
            <div className={styles.container}>
                <section className={styles.card}>
                    <img id="about-image" className='img-fluid' src={aboutImage} alt="My Story" />
                    <div className={styles.description}>
                        <h3 className={styles.titles}>About Thomas Edwards</h3>
                        <p className={styles.paragraph} data-aos="fade-up">
                            {story}
                        </p>
                          <a>
                            <button onClick={() => navigate('/about')} href='#top' className={styles.buttonStory}>Read My Story</button>
                          </a>
                    </div>
                </section>
            </div>
            <div class="container-fluid py-2">
    {/* <div class="d-flex flex-row flex-nowrap">
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
    </div> */}
    
    <div>
      <TestimonialCarousel testimonials={testimonials} /> 
    </div>

</div>
            <h1 className={styles.titles}>How I Can Help You</h1>
            <br /> 
            <Container>
              <Row>
                <Col>
                <div data-aos="fade-up" >
                    {/* <AiOutlineMail size={70} />
                    <br />
                    
                    <a id="bottom">
                        <button className={styles.buttonHelp}>Sign Up Here</button>
                        </a>  */}
                          {/* <h4 >Let's Connect</h4> */}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input placeholder="Email" innerRef={emailRef} />
            <Input placeholder="Name" innerRef={nameRef} />
          </FormGroup>
          <button className={styles.button2}>Subscribe</button>
        </Form>


                </div>

                </Col>

                <Col>
                <div data-aos="fade-up" >
                    <BsTelephone size={60} />
                    <br />
                    <Link to="https://calendly.com/innerfamous" target="_blank" rel="noopener noreferrer">
                        <button className={styles.buttonHelp} style={{color: "white"}}>Schedule A Meeting</button>
                    </Link>
                </div>

                </Col>
              </Row>
            </Container>
    </>
  )
}
export default Home