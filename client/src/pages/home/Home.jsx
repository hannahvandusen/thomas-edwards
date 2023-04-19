<<<<<<< HEAD
import React from "react";
import styles from "./Home.module.css";
import mainPhoto from "../../images/mainPhoto.png";
import aboutImage from "../../images/site_photo_6.jpg";
import { useEffect } from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import AOS from "aos";

function Home() {
    //Scrolling Effect

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <main className={styles.main}>
                <img
                    className={styles.mainPhoto}
                    src={mainPhoto}
                    alt="mainPhoto"
                />

                <h3 className={styles.mainHeader}>
                    Create A Plan, Change Careers, Transform Your Life!
                </h3>
            </main>
            <div className={styles.container}>
                <section className={styles.card}>
                    <img
                        className={styles.image}
                        src={aboutImage}
                        alt="My Story"
                    />
                    <div className={styles.description}>
                        <h3>About Thomas Edwards</h3>
                        <p data-aos="fade-up">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore est quia officia, sunt odio minima
                            harum rerum assumenda asperiores perspiciatis nobis
                            id excepturi doloremipsum20,animirepellendus hic
                            voluptatibus maxime eius.Lorem ipsum dolor sit
                            ametsdfs consectetur adipisicing elithbsll.
                            GreatInventore est quia officia, sunt odio minima
                            harum rerum assumenda asperiores perspiciatis nobis
                            id excepturi dolorem.
                        </p>
                        <button className={styles.buttonStory}>
                            Read My Story
                        </button>
=======
import React, { useEffect, useState, useRef } from "react"
import styles from "./Home.module.css"
import mainPhoto from "../../images/mainPhoto.png"
import aboutImage from "../../images/site_photo_6.jpg"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { Outlet, Link } from "react-router-dom"
import AOS from "aos"
import { FormGroup, Form, Input, Button } from "reactstrap"

import newImage from "../../images/site_photo_2.jpg"

function Home() {

    const [ story, setStory ] = useState(); 
    const emailRef = useRef();
    const nameRef = useRef();


    const fetchAbout = async () => {
        const url = `http://localhost:4000/about/643ae5920f74ad63f71a205d`
        const requestOptions = {
        method: 'GET'
        };

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


    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const name = nameRef.current.value;

        let bodyObj = JSON.stringify({ email, name });
        const url = `http://localhost:4000/subscribe`;
        const headers = new Headers({
            "Content-Type": "application/json"
        });    
    
        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'POST'
        };

        try {
            const res = await fetch(url, requestOptions); 
            const data = await res.json();

            console.log(data); 
            alert('Thanks for subscribing!'); 
            localStorage.setItem("subscriber", `${data.token}`)
        } catch (err) {
            console.error(err); 
        }
    }



    useEffect(() => {
        // scrolling effect
        AOS.init(); 

        fetchAbout(); 
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
                    <img className={styles.image} src={aboutImage} alt="My Story" />
                    <div className={styles.description}>
                        <h3>About Thomas Edwards</h3>
                        <p className={styles.paragraph} data-aos="fade-up">
                            {story}
                        </p>
                        <Link to='/about'>
                        <button className={styles.buttonStory}>Read My Story</button>
                        </Link>
                        
>>>>>>> 98a618ebb63190a386fbf4e9a84b95256bd82cbd
                    </div>
                </section>
            </div>

<<<<<<< HEAD
            <h1>How I can Help You</h1>
=======
            <h1 className="titles" styles={[styles.titles]}>How I can Help You</h1>
>>>>>>> 98a618ebb63190a386fbf4e9a84b95256bd82cbd

            <div className={styles.help}>
                <div data-aos="fade-up" className="box1">
                    <AiOutlineMail size={70} />
<<<<<<< HEAD
                    <span>My Free Newsletter;</span>
                    <p>
                        Join the Newsletter to keep up to date with the latest
                        greatest things!
                    </p>
                    <button>Sign Up Here</button>
                </div>
                <div data-aos="fade-up" className="box2">
                    <BsTelephone size={60} />

                    <span>1:1 Coaching</span>
                    <p>Schdeule a call and lets build a bright future!</p>
                    <button>Book A Call</button>
                </div>
            </div>

            <form className={styles.form}>
                <label>
                    <h1>Lets Connect</h1>
                    <input
=======
                    <br />
                    <Link to='/newsletter'>
                    <button>Sign Up Here</button>
                    </Link>
                    
                </div>
                <div data-aos="fade-up" className="box2">
                    <BsTelephone size={60} />
                    <br />
                    <Link to='/intake'>
                        <button>Book A Call</button>
                    </Link>
                    
                </div>
            </div>

            {/* <form className={styles.form}> */}
                {/* <label > */}
                <div>
                    <h1 className="titles">Let's Connect</h1>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input placeholder="Email" innerRef={emailRef} />
                            <Input placeholder="Name" innerRef={nameRef} />
                        </FormGroup>
                        <Button type="submit">Subscribe</Button>
                    </Form>
                </div>
                    {/* <input
>>>>>>> 98a618ebb63190a386fbf4e9a84b95256bd82cbd
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
<<<<<<< HEAD
                    />
                </label>
                <input className={styles.button} type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Home;
=======
                    /> */}
                {/* </label> */}
                {/* <input className={styles.button} type="submit" value="Submit" /> */}
            {/* </form> */}
        </>
    )
}


export default Home
>>>>>>> 98a618ebb63190a386fbf4e9a84b95256bd82cbd
