import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import PortalTable from './PortalTable'

function PortalIndex() {

    const [ intakes, setIntakes ] = useState([]);

    const fetchIntakes = async () => {
        const url = `http://localhost:4000/intake`
        const requestOptions = {
            method: 'GET'
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            // console.log(data);

            setIntakes(data.intakeForms);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            fetchIntakes();
        }
    }, [localStorage.getItem('token')])

  return (
    <>
        <Container>
            <Row>
                {/* <Col>
                    <h1 style={{color: "white", fontSize: "large"}}>Analytics</h1>
                </Col> */}
                <h1 style={{color: "white", fontSize: "x-large", fontFamily: "Georgia, serif"}}>Messages</h1>

                <Col>
                    <PortalTable intakes={intakes} />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default PortalIndex