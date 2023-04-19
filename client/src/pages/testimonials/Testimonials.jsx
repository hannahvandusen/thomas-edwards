import { React, useEffect, useState } from "react";
// import {  Button, Card, CardImg, CardGroup, CardTitle, CardText, CardBody, CardSubtitle, Row, Col } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import styles from "./Testimonials.module.css"
import AOS from "aos";

function Testimonials() {

  const navigate = useNavigate();
  const [ testimonials, setTestimonials ] = useState([]);

  const fetchTestimonials = async () => {
    const url = 'http://localhost:4000/testimonialsindex'
    const requestOptions = {
      method: 'GET'
    }

    try {
      const res = await fetch(url, requestOptions);
      const data = await res.json();
      // console.log(data);

      setTestimonials(data.testimonials);

    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    AOS.init()
    fetchTestimonials();
  }, [])

  return (
	<>
    <header className={styles.mainHeader}>
        <h1>
          <span>What People Say About</span>Working With Thomas
        </h1>
        <p className={styles.p}> </p>
        {/* <main></main> */}
      </header>

      {testimonials.map(testimonial => (

      <div className={styles.container}>

        <section className={styles.card}>
          <img className={styles.image} data-aos="fade-up"
           data-aos-anchor-placement="top-bottom"
           data-aos-easing="ease-in-sine"
           data-aos-duration="1000" src="./images/photo2.jpg" alt="Thomas Photo" />
            <div className={styles.association}>
              <h3 data-aos="zoom-in-right">{testimonial.caption}</h3>
                <p data-aos="fade-up">{testimonial.quote}</p>
                  <p data-aos="fade-left"><i> - {testimonial.name}</i></p>
            </div>
        </section>

    </div>
  //   <h1 style={{color: "#c59045"}}>What People Are Saying About Thomas</h1>
        
  //   {/* <CardGroup> */}
  // <Row style={{justifyContent: "space-evenly", padding: "1em"}}>
  //   {testimonials.map(testimonial => ( 
  //   <Card className="my-2" color="#ffcd51"
  //     outline
  //     key={testimonial._id}
  //     style={{
  //       width: '18rem'
  //     }}>

  //       <CardBody>
  //         <CardImg
  //          data-aos="fade-up"
  //          data-aos-anchor-placement="top-bottom"
  //          data-aos-easing="ease-in-sine"
  //          data-aos-duration="1000"
  //         alt="Thomas photo 2"
  //         src="./images/photo2.jpg"
  //         top
  //         width="100%"
  //         />
  //       <CardTitle tag="h5">
  //       {testimonial.name}
  //       </CardTitle>
  //       <CardSubtitle
  //         className="mb-2 text-muted"
  //         tag="h6"
  //       >
  //         Thomas {testimonial.association}
  //       </CardSubtitle>
  //       <CardText data-aos="fade-right">
  //       {testimonial.quote}
  //       </CardText>
  //       </CardBody>
  //   </Card>
    
  //   ))} */}
      ))};
      </>
);
};

export default Testimonials;