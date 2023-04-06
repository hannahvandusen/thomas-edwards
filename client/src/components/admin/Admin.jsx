import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Login from './login/Login'

function Admin() {
    return (
        <>
        <h1>Testy</h1>
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