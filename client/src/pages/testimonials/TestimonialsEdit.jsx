import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

function TestimonialsEdit(props) {

    const { id } = useParams();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [association, setAssociation] = useState('');
    const [quote, setQuote] = useState('');

    const url = `http://localhost:4000/testimonialsindex/${id}`;

    const fetchTestimonials = async () => {
        
        const requestOptions = {
            method: "GET",
            headers: new Headers({
                "Authorization": props.token
            })
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            const {
                firstName, lastName, association, quote
            } = data.testimonials

            setFirstName(firstName);
            setLastName(lastName);
            setAssociation(association);
            setQuote(quote);

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        if(props.token) {
            fetchTestimonials();
        }
    }, [props.token])

    async function handleSubmit(e) {
        e.preventDefault();

        let bodyObj = JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            association: association,
            quote: quote
        })

        const requestOptions = {
            headers: new Headers({
                "Authorization": props.token,
                "Content-Type": "application/json"
            }),
            body: bodyObj,
            method: 'PATCH'
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1 style={{
                textAlign: "center", textDecoration: "underline"
            }}>Edit Testimonial</h1>
            <Container>
                <Row>
                    <Col md="4">
                        <p><b>Testimonial</b>: <br/>{firstName} {lastName}, Thomas's {association}, said {quote}. <br/> What should be edited?</p>
                            <Button
                                color='info'
                                outline
                                onClick={() => navigate('/testimonials')}
                            >Back to Table</Button>
                    </Col>
                    <Col md="8">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Association</Label>
                                <Input
                                    value={association}
                                    onChange={e => setAssociation(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Quote</Label>
                                <Input
                                    value={quote}
                                    onChange={e => setQuote(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                                <Button color='success'>Update Testimonial</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}


export default TestimonialsEdit