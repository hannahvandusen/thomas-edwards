import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'reactstrap'
import Account from './account/Account';
import Login from './login/Login'
import Logout from './logout/Logout';
import Portal from './portal/Portal';

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

                    <Col className='md-10'>
                        <Portal />
                    </Col>
                    <Col className='md-2'>
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
            {displayForm()};
        </>
    )
}

export default Admin
