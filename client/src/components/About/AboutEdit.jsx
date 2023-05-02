import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import styles from "./AboutMe.module.css"

function AboutEdit() {

    const navigate = useNavigate(); 

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
            console.log(data); 
    
        } catch (err) {
            console.error(err); 
        }
    }

    return (
    <div className={styles.aboutedit}>
        <Form onSubmit={handleSubmit} style={{color: "white"}} >
            <Label>About Description:</Label>
            <Input type='textarea' defaultValue={aboutSection.about} innerRef={aboutRef}/> 
            
            {/* <EditTextarea defaultValue={aboutSection.about} />  */}
            <Label>My Story:</Label>
            <Input 
            type='textarea' 
            defaultValue={aboutSection.story} 
            innerRef={storyRef}
            style={{height: "30vh"}}
            /> 
            <Label>My Mission:</Label>
            <Input 
            type='textarea' 
            defaultValue={aboutSection.mission} 
            innerRef={missionRef}
            style={{height: "20vh"}}
            /> 
            <Label>My Values:</Label>
            <Input 
            type='textarea' 
            defaultValue={aboutSection.value} 
            innerRef={valueRef}
            style={{height: "20vh"}}
            
            /> 
            <Button type='submit' style={{backgroundColor: "#ffcd51", 
        color: "black", margin: "1%"}}> Publish Changes</Button>
        <Button style={{backgroundColor: "#ffcd51", 
        color: "black"}} onClick="window.location.href='#top'" href="/about">View About Page</Button>
        </Form>
        <Button onClick={() => navigate('/admin')} href='#top' style={{backgroundColor: "#ffcd51", 
        color: "black", margin: "1%"}}>Admin Portal</Button>
    </div>
  )
}

export default AboutEdit
