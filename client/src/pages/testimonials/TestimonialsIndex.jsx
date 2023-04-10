import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { baseURL } from '../../environment'
import TestimonialsCreate from './TestimonialsCreate'
import TestimonialsTable from './TestimonialsTable'

function TestimonialsIndex(props) {

    const [ testimonials, setTestimonials ] = useState([]);

    const fetchTestimonials = async () => {
        const url = `http://localhost:4000/testimonialsindex`;

        const requestOptions = {
            headers: new Headers({
                "Authorization": props.token
            }),
            method: "GET"
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            setTestimonials(data.testimonials);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            fetchTestimonials();
        }
    }, [localStorage.getItem('token')]) 

    return (
        <>
            <Container >
                <Row>
                    <Col md="4" >
                        <TestimonialsCreate fetchTestimonials={fetchTestimonials} />
                    </Col>
                    <Col md="8">
                        <TestimonialsTable
                            fetchTestimonials={fetchTestimonials}
                            testimonials={testimonials} />
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default TestimonialsIndex