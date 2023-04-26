import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
// import {Image} from "cloudinary-react"
import styles from "./Testimonials.module.css";
import AOS from "aos";

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
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        AOS.init();
        fetchTestimonials();
    }, []);

    // const [ uploadFile, setUploadFile ] = useState("");
    // const [ cloudinaryImage, setCloudinaryImage ] = useState("")

    // const handleUpload = (e) => {
    //   e.preventDefault();
    //   const formData = new FormData();
    //   formData.append("file", uploadFile);
    //   formData.append("upload_preset", "qhhdabdz");

    // Axios.post("https://api.cloudinary.com/v1_1/dfofj3ppu/image/upload", formData).then((response) => {
    //   console.log(response);
    //   setCloudinaryImage(response.data.secure_url);
    // }).catch((error) => {
    //   console.log(error);
    // });

    return (
        <>
            <header className={styles.mainHeader}>
                <h1>
                    <span>What People Say About</span> Working With Thomas
                </h1>
                <p className={styles.p}> </p>
            </header>
            {testimonials.map((testimonial) => (
                <div className={styles.container}>
                    <section className={styles.card}>
                        <img
                            className={styles.image}
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            src={testimonial.photo}
                            alt="Testimonial Photo"
                        />
                        <div className={styles.association}>
                            <h3 data-aos="zoom-in-right">
                                {testimonial.caption}
                            </h3>
                            <p data-aos="fade-up">{testimonial.quote}</p>
                            <p data-aos="fade-left">
                                <i> - {testimonial.name}</i>
                            </p>
                        </div>
                    </section>
                </div>
            ))}
            ;
        </>
    );
}
export default Testimonials;
