import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Testimonials.module.css";
import AOS from "aos";
import newImage from "../../images/photo1.jpg";

function Testimonials() {
    const navigate = useNavigate();

    const [testimonials, setTestimonials] = useState([]);

    const fetchTestimonials = async () => {
        const url = "http://localhost:4000/testimonialsindex";
        const requestOptions = {
            method: "GET",
        };

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            setTestimonials(data.testimonials);
            console.log(testimonials);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        AOS.init();
        fetchTestimonials();
    }, []);

return (
	<>
    <main className={styles.main}>
      <img className={styles.mainPhoto} src={newImage} alt="mainPhoto" />
  </main>

      <header className={styles.mainHeader}>
        <h1>
          <span>What People Say About</span> Working With Thomas
        </h1>
        <p className={styles.p}> </p>
    </header>

    <div className={styles.container}>
      {
      testimonials.map(testimonial => (


        <section className={styles.card}>
          <img
           data-aos="fade-up"
           data-aos-anchor-placement="top-bottom"
           data-aos-easing="ease-in-sine"
           data-aos-duration="1000" 
           src="" alt=""
            />
            <div className={styles.association}>
              <h3 data-aos="zoom-in-right">{testimonial.caption}</h3>
              <p data-aos="fade-up">{testimonial.quote}</p>
              <p data-aos="fade-left">
                <i> - {testimonial.name}</i>
              </p>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default Testimonials;
