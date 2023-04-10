import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { baseURL } from '../../environment'
import TestimonialsCreate from './TestimonialsCreate'
import TestimonialsTable from './TestimonialsTable'

function TestimonialsIndex(props) {

    const [ testimonials, setTestimonials ] = useState([]);

    const fetchTestimonials = async () => {
        const url = `${baseURL}/testimonialsindex`;

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
        if(props.token) {
            fetchTestimonials();
        }
    }, [props.token]) 

    return (
        <>
            <Container >
                <Row>
                    <Col md="4" >
                        <TestimonialsCreate token={props.token} fetchTestimonials={fetchTestimonials} />
                    </Col>
                    <Col md="8">
                        <TestimonialsTable
                            fetchTestimonials={fetchTestimonials}
                            token={props.token}
                            testimonials={testimonials} />
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default TestimonialsIndex