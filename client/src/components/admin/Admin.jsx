import React from "react"
import { useState, useEffect } from "react"
import { Button, Col, Container, Row } from "reactstrap"
import Login from "./login/Login"
import Logout from "./logout/Logout"
import PortalIndex from "./portal/PortalIndex"

function Admin() {
  const [sessionToken, setSessionToken] = useState("")

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken)
    setSessionToken(newToken)
  }

  const token = { sessionToken }

  // console.log(localStorage.getItem("token"))

  const style = {
    float: "right",
    margin: "1em",
    backgroundColor: "#ffcd51",
    color: "black",
    fontFamily: "Georgia, serif",
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  }, [])

  const displayForm = () => {
    return localStorage.getItem("token") === null ? (
      <Container>
        <Row>
          <Col>
            <Login updateToken={sessionToken} />
          </Col>
        </Row>
      </Container>
    ) : (
      <Container style={{height: "80vh"}}>
        <h1 style={{ color: "white", fontFamily: "Georgia, serif" }}>
          Admin Portal
        </h1>
        <Row>
          <Col md="8">
            <PortalIndex />
          </Col>
          <Col md="3">
            <Button
              style={{
                borderRadius: "10px",
                width: "200px",
                fontSize: "15px",
                margin: "10px",
                color: "black",
                backgroundColor: "#ffcd51",
              }}
              href="/admin/account"
            >
              Update Email/Password
            </Button>
            <Button
              style={{
                borderRadius: "10px",
                width: "200px",
                fontSize: "15px",
                margin: "10px",
                color: "black",
                backgroundColor: "#ffcd51",
              }}
              href="/testimonialsindex"
            >
              Edit Testimonials
            </Button>
            <Button
              style={{
                borderRadius: "10px",
                width: "200px",
                fontSize: "15px",
                margin: "10px",
                color: "black",
                backgroundColor: "#ffcd51",
              }}
              href="/about/edit"
            >
              Edit About
            </Button>
            <Button
              style={{
                borderRadius: "10px",
                width: "200px",
                fontSize: "15px",
                color: "black",
                backgroundColor: "#ffcd51",
                margin: "10px",
              }}
              href="/subscribe"
            >
              View Subscribers
            </Button>
          </Col>
          <Logout setToken={setSessionToken} />
        </Row>
      </Container>
    )
  }

  return <>{displayForm()}</>
}

export default Admin
