import React, { useEffect, useState } from 'react'
import { CardGroup, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

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

  return (
    <>
        <CardGroup>
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
        </CardGroup>
    </>
  )
}

export default AboutEdit