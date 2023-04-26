import React, { useEffect, useState, useRef } from "react";
import styles from "./Home.module.css";
import mainPhoto from "../../images/mainPhoto.png";
//import Carousel from 'react';
import aboutImage from "../../images/site_photo_6.jpg";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import AOS from "aos";
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";
import newImage from "../../images/site_photo_2.jpg";

function Home() {
    const [story, setStory] = useState();
    const emailRef = useRef();
    const nameRef = useRef();

    const fetchAbout = async () => {
        const url = `http://localhost:4000/about/643ae5920f74ad63f71a205d`;
        const requestOptions = {
            method: "GET",
        };

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            // console.log(data);
            const { about, story, mission, value } = data.about;
            setStory(story);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const name = nameRef.current.value;

        let bodyObj = JSON.stringify({ email, name });
        const url = `http://localhost:4000/subscribe`;
        const headers = new Headers({
            "Content-Type": "application/json",
        });

        const requestOptions = {
            headers,
            body: bodyObj,
            method: "POST",
        };

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            console.log(data);
            alert("Thanks for subscribing!");
            localStorage.setItem("subscriber", `${data.token}`);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        // scrolling effect
        AOS.init();
        fetchAbout();
    }, []);

    //Header Ideas
    //Create A Plan, Change Careers, Transform Your Life!
    return (
        <>
            <main className={styles.main}>
                <img
                    className={styles.mainPhoto}
                    src={newImage}
                    alt="mainPhoto"
                />

                {/* <h3 className={styles.mainHeader}>
          Lets Create a Bright Future Together!
        </h3> */}
            </main>
            <div className={styles.container}>
                <section className={styles.card}>
                    <img
                        className={styles.image}
                        src={aboutImage}
                        alt="My Story"
                    />
                    <div className={styles.description}>
                        <h3 style={{ color: "#ffcd51" }}>
                            About Thomas Edwards
                        </h3>
                        <p className={styles.paragraph} data-aos="fade-up">
                            {story}
                        </p>
                        <Link to="/about" href="#top">
                            <button className={styles.buttonStory}>
                                Read My Story
                            </button>
                        </Link>
                    </div>
                </section>
            </div>

            <Container>
                <Row>
                    <h1 className={styles.titles}>How I Can Help You</h1>

                    <Col>
                        <div data-aos="fade-up" className="box2">
                            <BsTelephone size={60} />
                            <br />
                            <Link
                                to="https://calendly.com/innerfamous"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={styles.buttonHelp}>
                                    Schedule A Meeting
                                </button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h1 className={styles.titles}>Let's Connect</h1>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Input
                                        placeholder="Email"
                                        innerRef={emailRef}
                                    />
                                    <Input
                                        placeholder="Name"
                                        innerRef={nameRef}
                                    />
                                </FormGroup>
                                <button className={styles.button2}>
                                    Subscribe
                                </button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <div className={styles.help}> */}
            {/* <div data-aos="fade-up" className="box1">
          <AiOutlineMail size={70} />
          <br />
          <Link to="/newsletter">
            <button className={styles.buttonHelp}>Sign Up Here</button>
          </Link>
        </div> */}
            {/* <div data-aos="fade-up" className="box2">
          <BsTelephone size={60} />
          <br />
          <Link to="https://calendly.com/innerfamous" target="_blank" rel="noopener noreferrer"
>
            <button className={styles.buttonHelp}>Schedule A Meeting</button>
          </Link>
        </div>
      </div> */}

            {/* <form className={styles.form}> */}
            {/* <label > */}
            <br />
            {/* <input
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
                    /> */}
            {/* </label> */}
            {/* <input className={styles.button} type="submit" value="Submit" /> */}
            {/* </form> */}
        </>
    );
}

export default Home;
