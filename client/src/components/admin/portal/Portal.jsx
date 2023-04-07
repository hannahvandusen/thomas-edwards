import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Portal() {
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <h1 style={{color: "white", fontSize: "large"}}>Analytics</h1>
                </Col>
                <Col>
                    <h1 style={{color: "white", fontSize: "large"}}>Messages</h1>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Portal