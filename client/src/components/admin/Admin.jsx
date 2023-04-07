import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Login from './login/Login'

function Admin() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Login /> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Admin
