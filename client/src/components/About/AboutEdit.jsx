import React, { useEffect, useRef, useState } from 'react'
import { CardGroup, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

function AboutEdit() {

    const [ aboutSection, setAboutSection ] = useState([]); 

    const fetchAboutSection = async () => {
        const url = 'http://localhost:4000/about/643ae5920f74ad63f71a205d';
        const requestOptions = {
            method: 'GET'
        };

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            //console.log(data); 
            setAboutSection(data.about); 
        } catch (err) {
            console.error(err); 
        }
    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            fetchAboutSection();
        }
    }, [localStorage.getItem('token')]) 

    const aboutRef = useRef(); 
    const storyRef = useRef(); 
    const missionRef = useRef(); 
    const valueRef = useRef(); 


    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const about = aboutRef.current.value;
        const story = storyRef.current.value;
        const mission = missionRef.current.value;
        const value = valueRef.current.value;

        const bodyObj = JSON.stringify({ about, story, mission, value })
        const url = 'http://localhost:4000/about/edit'

        const headers = new Headers({
            "Content-Type": "application/json"
        });
      
        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'PATCH'
        };
        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
    
        } catch (err) {
            console.error(err); 
        }
    }

    return (
    <>
        {/* <CardGroup>
            <Card>
                <CardBody>
                    <CardTitle>
                        About Section
                    </CardTitle>
                    <ListGroup>
                        <ListGroupItem>About Description: {aboutSection.about} </ListGroupItem>
                        <ListGroupItem> My Story: {aboutSection.story} </ListGroupItem>
                        <ListGroupItem> My Mission: {aboutSection.mission} </ListGroupItem>
                        <ListGroupItem> My Values: {aboutSection.value} </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </CardGroup> */}
        <Form onSubmit={handleSubmit} >
            <FormGroup style={{width: "50vw"}}>
                <Label for="exampleName">
                About Description:           
                </Label>
                <Input 
                placeholder={aboutSection.about}
                type='textarea'
                style={{height: "inherit", width: "inherit"}}
                innerRef={aboutRef}
                /> 
                <Label for="exampleName">
                My Story:           
                </Label>
                <Input 
                placeholder={aboutSection.story}
                type='textarea'
                innerRef={storyRef}
                style={{height: "15em"}}
                /> 
                <Label for="exampleName">
                My Mission:           
                </Label>
                <Input 
                placeholder={aboutSection.mission}
                type='textarea'
                style={{height: "5em"}}
                innerRef={missionRef}
                /> 
                <Label for="exampleName">
                My Values:           
                </Label>
                <Input 
                placeholder={aboutSection.value}
                type='textarea'
                style={{height: "15vh"}}
                innerRef={valueRef}
                /> 
            </FormGroup>
        </Form>
        <Button>Edit</Button>
    </>
  )
}

export default AboutEdit