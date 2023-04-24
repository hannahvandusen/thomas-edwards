import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

function TestimonialsEdit(props) {

    const { id } = useParams();
    const navigate = useNavigate();
    const [caption, setCaption] = useState('');
    const [name, setName] = useState('');
    const [association, setAssociation] = useState('');
    const [quote, setQuote] = useState('');
    const [photo, setPhoto] = useState('');

    // setting photo URL
    const [ photoUrl, setPhotoUrl ] = useState("")

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
            setPhoto(photo);

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            fetchTestimonials();
        }
    }, [props.token])

    function previewFile() {
        const preview = document.querySelector("img");
        const file = document.querySelector("input[type=file]").files[0];
        const reader = new FileReader();
      
        reader.addEventListener(
          "load",
          () => {
            preview.src = reader.result;
          },
          false
        );
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }

    async function handleSubmit(e) {
        e.preventDefault();

        let bodyObj = JSON.stringify({
            caption: caption,
            name: name,
            association: association,
            quote: quote,
            photo: photo
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

    // uploading image
    const uploadPhoto = () => {
        const data = new FormData()
        data.append("file", photo)
        data.append("upload_preset", "pwhkfjz3")
        data.append("cloud_name", "dfofj3ppu")
        fetch("  https://api.cloudinary.com/v1_1/dfofj3ppu/image/upload",{
            method:"post",
            body: data
        })
        .then(resp =>resp.json())
        .then(data => {
            setPhotoUrl(data.photoUrl)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <h1 style={{color: "#cddee5",
                textAlign: "center", textDecoration: "underline"
            }}>Edit Testimonial</h1>
            <Container>
                <Row>
                    <Col md="4">
                    <p style={{color: "#cddee5"}}><b style={{color: "#cddee5"}}>Current Testimonial</b>: <br/>{caption} {name}, Thomas's {association}, said: {quote}. <br/> What should be edited?</p>
                            <Button
                                color='info'
                                outline
                                onClick={() => navigate('/testimonialsindex')}
                            >Back to Table</Button>
                    </Col>
                    <Col md="8">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Caption</Label>
                                <Input
                                    value={caption}
                                    onChange={e => setCaption(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
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
                            <FormGroup>
                                <Label>Photo</Label>
                                <Input
                                    value={photo}
                                    type='file'
                                    onChange={e => setPhoto(e.target.files[0])}
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