import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
// import styles from './Testimonials.module.css'

function TestimonialsEdit(props) {

    const { id } = useParams();
    const navigate = useNavigate();
    const [caption, setCaption] = useState('');
    const [name, setName] = useState('');
    const [association, setAssociation] = useState('');
    const [quote, setQuote] = useState('');

    const url = `http://localhost:4000/testimonialsindex/${id}`;
    
    const fetchTestimonials = async () => {
        
        const requestOptions = {
            method: "GET",
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            console.log(data); 
            
            const {
                caption, name, association, quote
            } = data.testimonial

            setCaption(caption);
            setName(name);
            setAssociation(association);
            setQuote(quote);

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            fetchTestimonials();
        }
    }, [props.token])

    async function handleSubmit(e) {
        e.preventDefault();

        let bodyObj = JSON.stringify({
            caption: caption,
            name: name,
            association: association,
            quote: quote,
        })


        const requestOptions = {
            headers: new Headers({
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
            <h1 style={{color: "#cddee5",
                textAlign: "center",
                fontFamily: "Georgia, serif"

            }}>Edit Testimonial</h1>
            <Container>
                <Row>
                    <Col>
                    <p style={{color: "#cddee5"}}>
                    <h3>Caption: {caption}</h3>
                    <h4>{name}, {association}</h4>
                    <section>
                    {quote}
                    </section>
                    </p>
                    </Col>
                    <Col>
                        <Form onSubmit={handleSubmit} >
                            <FormGroup style={{width: "80%"}}>
                                <Label>Caption</Label>
                                <Input
                                    value={caption}
                                    onChange={e => setCaption(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup 
                            style={{width: "80%"}}
                            >
                                <Label>Name</Label>
                                <Input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup style={{width: "80%"}}>
                                <Label>Association</Label>
                                <Input
                                    value={association}
                                    onChange={e => setAssociation(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup style={{width: "80%"}}>
                                <Label>Quote</Label>
                                <Input
                                    value={quote}
                                    type="textarea"
                                    style={{height: "50vh"}}
                                    onChange={e => setQuote(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <Button 
                            // className={styles.button}
                            >Update Testimonial</Button>
                        </Form>
                    </Col>
                    <Button
                            // className={styles.button}
                            onClick="window.location.href='#top'"
                            href='/testimonialsindex'
                            >Back to Table
                        </Button>

                </Row>

            </Container>
        </>
    )

}


export default TestimonialsEdit