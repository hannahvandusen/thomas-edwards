import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'reactstrap'
import Login from './login/Login'
import Logout from './logout/Logout';
import PortalIndex from './portal/PortalIndex';

function Admin() {


    const [ sessionToken, setSessionToken ] = useState('');

    const updateToken = newToken => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken); 
    }

    const token = {sessionToken}

    // console.log(localStorage.getItem("token"))

    const style = {
        float: "right",
        margin: "1em",
    }

    useEffect(() => {
        if(localStorage.getItem('token')) {
        setSessionToken(localStorage.getItem('token'));
        }
    }, [])
    
    const displayForm = () => {
        return (
            localStorage.getItem('token') === null ?
            <Container>
            <Row>
                <Col>
                    <Login updateToken={sessionToken}/> 
                </Col>
            </Row>
            </Container> :
            <Container>
                <h1 style={{color: "white"}}>Admin Portal</h1>
                <Row>
                
                    <Col md="8">
                        <PortalIndex />
                    </Col>
                    <Col md="3">
                        <Button 
                        href="/admin/account" 
                        color="primary" 
                        style={style} 
                        outline>
                            Update Email/Password 
                        </Button>
                        <Button 
                        href="/testimonialsindex"
                        color="primary" 
                        style={style} 
                        outline
                        >Edit Testimonials</Button>
                        <Button
                        color="primary" 
                        style={style} 
                        outline
                        href="/about/edit"
                        >Edit About</Button>
                    </Col>
                    <Logout setToken={setSessionToken}/> 
                </Row>
            </Container>
        )
    }

    return (
        <>
            {displayForm()}
        </>
    )
}

export default Admin