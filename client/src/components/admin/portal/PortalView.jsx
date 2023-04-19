import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, CardText, CardTitle, ListGroup, ListGroupItem, Table } from 'reactstrap';

function PortalView() {

    // console.log(props); 
    let navigate = useNavigate();
    let { id } = useParams();


    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ phone, setPhone ] = useState();
    const [ time, setTime ] = useState();
    const [ method, setMethod ] = useState();
    const [ message, setMessage ] = useState();
    const [ date, setDate ] = useState();

    const fetchIntake = async () => {
        const url = `http://localhost:4000/intake/${id}`
        const requestOptions = {
            method: 'GET'
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            //console.log(data);

            const { name, email, phone, contactTime, contactMethod, message, date } = data.intake;
            setName(name); 
            setEmail(email);
            setPhone(phone);
            setTime(contactTime);
            setMethod(contactMethod);
            setMessage(message);
            setDate(date);
            console.log(data.intake); 
        } catch (err) {
            console.error(err)
        }
    
    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            fetchIntake();
        }
    }, [localStorage.getItem('token')])


    const handleSubmit = async (e) => {
        e.preventDefault(); 

    }

    return (
    <>
        <>
        <h1 style={{color: "#d2d5d1"}}>Message from {name}</h1>
            <CardGroup>
            <Card>
                <CardBody >
                    <CardTitle>Message received: {date} </CardTitle>
                    <CardText>Message: {message}</CardText>
                    <ListGroup flush>
                        <ListGroupItem>Phone: {phone} </ListGroupItem>
                        <ListGroupItem>Email: {email} </ListGroupItem>
                        <ListGroupItem>Preferred Method of Contact: {method} </ListGroupItem>
                        <ListGroupItem>Preferred Time of Day for Contact: {time} </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
            </CardGroup>
            <Button onClick={() => navigate('/admin')} style={{backgroundColor: "#ffcd51", 
        color: "black"}} >Back to Admin Portal</Button>
        </>
    </>
    )
}

export default PortalView