<<<<<<< HEAD
import React, { useEffect, useState, useRef } from "react";
import styles from "./Home.module.css";
import mainPhoto from "../../images/mainPhoto.png";
=======
import React, { useEffect, useState, useRef } from "react"
import styles from "./Home.module.css"
import mainPhoto from "../../images/mainPhoto.png"
>>>>>>> ade5c7869d474622c6591e7c115cdc3175d75170
//import Carousel from 'react';
import aboutImage from "../../images/site_photo_6.jpg";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import AOS from "aos";
import { Form, FormGroup, Input, Label, Button, Container, Row, Col } from "reactstrap"
import newImage from "../../images/site_photo_2.jpg";

function Home() {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
  const [story, setStory] = useState()
  const emailRef = useRef()
  const nameRef = useRef()
>>>>>>> ade5c7869d474622c6591e7c115cdc3175d75170

  const fetchAbout = async () => {
    const url = `http://localhost:4000/about/643ae5920f74ad63f71a205d`
    const requestOptions = {
      method: "GET",
    }

<<<<<<< HEAD
>>>>>>> 16896564cb16fe2bb27bb9a4b2d8ee19a1bc6c02
=======
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
>>>>>>> ade5c7869d474622c6591e7c115cdc3175d75170

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const name = nameRef.current.value

<<<<<<< HEAD
        let bodyObj = JSON.stringify({ email, name });
        const url = `http://localhost:4000/subscribe`;
        const headers = new Headers({
<<<<<<< HEAD
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
=======
            "Content-Type": "application/json"
        });    
    
        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'POST'
        };
=======
    let bodyObj = JSON.stringify({ email, name })
    const url = `http://localhost:4000/subscribe`
    const headers = new Headers({
      "Content-Type": "application/json",
    })
>>>>>>> ade5c7869d474622c6591e7c115cdc3175d75170

    const requestOptions = {
      headers,
      body: bodyObj,
      method: "POST",
    }

    try {
      const res = await fetch(url, requestOptions)
      const data = await res.json()

      console.log(data)
      alert("Thanks for subscribing!")
      localStorage.setItem("subscriber", `${data.token}`)
    } catch (err) {
      console.error(err)
    }
  }

<<<<<<< HEAD
    useEffect(() => {
        // scrolling effect
        AOS.init(); 

        fetchAbout(); 
    }, [])
>>>>>>> 16896564cb16fe2bb27bb9a4b2d8ee19a1bc6c02
=======
  useEffect(() => {
    // scrolling effect
    AOS.init()
    fetchAbout()
  }, [])
>>>>>>> ade5c7869d474622c6591e7c115cdc3175d75170

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
<<<<<<< HEAD
<<<<<<< HEAD
            </main>
            <div className={styles.container}>
                <section className={styles.card}>
                    <img
                        className={styles.image}
                        src={aboutImage}
                        alt="My Story"
                    />
=======
      
            </main>
            <div className={styles.container}>
                <section className={styles.card}>
                    <img id="about-image" className='img-fluid' src={aboutImage} alt="My Story" />
>>>>>>> 16896564cb16fe2bb27bb9a4b2d8ee19a1bc6c02
                    <div className={styles.description}>
                        <h3>About Thomas Edwards</h3>
                        <p className={styles.paragraph} data-aos="fade-up">
                            {story}
                        </p>
<<<<<<< HEAD
                        <Link to="/about">
                            <button className={styles.buttonStory}>
                                Read My Story
                            </button>
                        </Link>
                    </div>
                </section>
            </div>

            <h1 className={styles.titles}>How I can Help You</h1>
            <div className={styles.help}>
                <div data-aos="fade-up" className="box1">
                    <AiOutlineMail size={70} />
                    <br />
                    <Link to="/newsletter">
                        <button className={styles.buttonHelp}>
                            Sign Up Here
                        </button>
                    </Link>
                </div>
                <div data-aos="fade-up" className="box2">
                    <BsTelephone size={60} />
                    <br />
                    <Link to="/intake">
                        <button className={styles.buttonHelp}>
                            Schedule A Meeting
                        </button>
                    </Link>
                </div>
            </div>

            {/* <form className={styles.form}> */}
            {/* <label > */}
            <br />
            <div className={styles.connect}>
                <h1 className={styles.titles}>Let's Connect</h1>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input placeholder="Email" innerRef={emailRef} />
                        <Input placeholder="Name" innerRef={nameRef} />
                    </FormGroup>
                    <button className={styles.button2}>Subscribe</button>
                </Form>
            </div>
            {/* <input
=======
                        <Link to='/about'>

                        <button className={styles.buttonStory}>Read My Story</button>
                        </Link>
                        
                    </div>
                </section>
            </div>

{/* <Carousel /> */} //! TODO fix Carousel functionality

            <h1 className="titles" styles={[styles.titles]}>How I can Help You</h1>

            <div className={styles.help}>
                <div data-aos="fade-up" className="box1">
                    <AiOutlineMail size={70} />
                    <br />
                    <Link to='/newsletter'>
                    <button className={styles.buttonStory} >Sign Up Here</button>
                    </Link>
                    
                </div>
                <div data-aos="fade-up" className="box2">
                    <BsTelephone size={60} />
                    <br />
                    <Link to='/intake'>
                        <button className={styles.buttonStory} >Book A Call</button>
                    </Link>
                    
                </div>
            </div>

            {/* <form className={styles.form}> */}
                {/* <label > */}
                <div>
                    <h1 className="titles">Let's Connect</h1>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input placeholder="Email" aria-label="Email" innerRef={emailRef} />
                            <Input placeholder="Name" aria-label="Password" innerRef={nameRef} />
                        </FormGroup>
                        <button type="submit" className={styles.buttonStory}>Subscribe</button>
                    </Form>
                </div>
                    
{/* <input

=======
>>>>>>> ade5c7869d474622c6591e7c115cdc3175d75170
      </main>
      <div className={styles.container}>
        <section className={styles.card}>
          <img className={styles.image} src={aboutImage} alt="My Story" />
          <div className={styles.description}>
            <h3 style={{color: "#ffcd51"}}>About Thomas Edwards</h3>
            <p className={styles.paragraph} data-aos="fade-up">
              {story}
            </p>
            <Link to="/about" href='#top'>
              <button className={styles.buttonStory}>Read My Story</button>
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
          <Link to="https://calendly.com/innerfamous" target="_blank" rel="noopener noreferrer"
>
            <button className={styles.buttonHelp}>Schedule A Meeting</button>
          </Link>
        </div>

          </Col>
          <Col>
          <div >
        <h1 className={styles.titles}>Let's Connect</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input placeholder="Email" innerRef={emailRef} />
            <Input placeholder="Name" innerRef={nameRef} />
          </FormGroup>
          <button className={styles.button2}>Subscribe</button>
        </Form>
      </div>

<<<<<<< HEAD
>>>>>>> 16896564cb16fe2bb27bb9a4b2d8ee19a1bc6c02
=======
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
>>>>>>> ade5c7869d474622c6591e7c115cdc3175d75170
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
<<<<<<< HEAD
                    /> */}
            {/* </label> */}
            {/* <input className={styles.button} type="submit" value="Submit" /> */}
            {/* </form> */}
        </>
    );
}

export default Home;
=======
                    /> 
*/}
                {/* </label> */}
                {/* <input className={styles.button} type="submit" value="Submit" /> */}
            {/* </form> */}
        </>
    )
}


export default Home
>>>>>>> 16896564cb16fe2bb27bb9a4b2d8ee19a1bc6c02
=======
                    /> */}
      {/* </label> */}
      {/* <input className={styles.button} type="submit" value="Submit" /> */}
      {/* </form> */}
    </>
  )
}

export default Home
>>>>>>> ade5c7869d474622c6591e7c115cdc3175d75170
