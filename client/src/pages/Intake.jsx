import "../App.css"
import "./intake.css"

import { React, useRef } from "react"
import photo from "../images/photo5.jpg"
import contactImage from "../images/contact.jpg"
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap"
import styles from "../pages/home/Home.module.css"

const Intake = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const timeRef = useRef()
  const methodRef = useRef()
  const messageRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const name = nameRef.current.value
    const email = emailRef.current.value
    const phone = phoneRef.current.value
    const time = timeRef.current.value
    const method = methodRef.current.value
    const message = messageRef.current.value

    const bodyObj = JSON.stringify({
      name,
      email,
      phone,
      time,
      method,
      message,
    })

    const url = `http://localhost:4000/intake`
    const headers = new Headers({
      "Content-Type": "application/json",
    })

    const requestOptions = {
      headers,
      body: bodyObj,
      method: "POST",
    }

    try {
      const res = await fetch(url, requestOptions)
      const data = await res.json()

      // console.log(data);

      if (data.newIntake) {
        alert(`Thank you for reaching out! Thomas will be in touch soon!`)
      } else {
        alert(`${data.error}. Try again!`)
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="idea">
      <Container>
        <Row>
          <h1 style={{ color: "white", fontFamily: "Georgia, serif" }}>
            <span style={{ color: "#ffcd51" }}>Contact</span> Thomas
          </h1>
          <Col md="6" className="photo-section">
            <img className="contactPhoto" src={photo} alt="contact image" />
          </Col>
          <Col md="6">
            <Form onSubmit={handleSubmit}>
              <FormGroup
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px",
                  color: "white",
                }}
                row
              >
                {" "}
                <Label for="exampleName">Name or Name of Organization</Label>
                <Input
                  style={{
                    width: "25rem",
                  }}
                  id="Name"
                  name="name"
                  placeholder="Name"
                  type="name"
                  innerRef={nameRef}
                />
              </FormGroup>{" "}
              <FormGroup
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                }}
                row
              >
                <Label for="exampleEmail">Email</Label>
                <Input
                  style={{
                    width: "25rem",
                  }}
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  innerRef={emailRef}
                />
              </FormGroup>{" "}
              <FormGroup
                style={{ display: "flex", justifyContent: "center" }}
                row
              >
                <Label
                  style={{
                    // opacity: ".4",
                    color: "white",
                  }}
                  for="examplePhone"
                >
                  Phone Number
                </Label>
                <Input
                  style={{
                    width: "25rem",
                  }}
                  id="Phone"
                  name="phone"
                  placeholder="Phone"
                  innerRef={phoneRef}
                />
              </FormGroup>{" "}
              <FormGroup style={{ color: "white" }}>
                <label>Best Time to Contact You: </label>
                <div
                  className="timeContainer"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Input
                    style={{
                      width: "25rem",
                    }}
                    name="select"
                    type="select"
                    innerRef={timeRef}
                  >
                    <option></option>
                    <option value={"Morning"}>Morning</option>
                    <option value={"Afternoon"}>Afternoon</option>
                    <option value={"Evening"}>Evening</option>
                  </Input>
                </div>
              </FormGroup>
              <FormGroup style={{ color: "white" }}>
                <label>Best Method of Contact: </label>
                <div
                  className="timeContainer"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Input
                    style={{
                      width: "25rem",
                    }}
                    name="select"
                    type="select"
                    innerRef={methodRef}
                  >
                    <option></option>
                    <option value={"Phone"}>Phone</option>
                    <option value={"Email"}>Email</option>
                  </Input>
                </div>
              </FormGroup>
              <FormGroup style={{ color: "white" }}>
                <label>Leave Thomas a Message:</label>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Input
                    id="Message"
                    name="message"
                    placeholder="Leave a brief message about yourself, your organization, or
            goals!"
                    type="textarea"
                    style={{
                      height: "20vh",
                      width: "25rem",
                    }}
                    innerRef={messageRef}
                  />
                </div>
              </FormGroup>
              <br />
              <button
                style={{
                  maxWidth: "120px",
                  padding: "5.5px",
                  marginBottom: "30px",
                }}
                type="submit"
                className={styles.button}
              >
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intake
