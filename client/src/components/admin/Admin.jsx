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

    useEffect(() => {
        if(localStorage.getItem('token')) {
        setSessionToken(localStorage.getItem('token'));
        }
    }, [])

    // console.log(localStorage.getItem("token"))

    const style = {
        float: "right",
        margin: "1em"
    }

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
                <Row>
                <h1 style={{color: "white"}}>Admin Portal</h1>

                    <Col md="9">
                        <PortalIndex />
                    </Col>
                    <Col md="3">
                        <Logout setToken={setSessionToken}/> 
                        <Button 
                        href="/admin/account" 
                        color="primary" 
                        style={style} 
                        outline>
                            Update Account 
                        </Button>
                    </Col>
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
