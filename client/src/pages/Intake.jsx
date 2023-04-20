import { React, useRef } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import "../App.css"

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
    <div>
      <h1 style={{ color: "white" }}>
        <span style={{ color: " #ffcd51" }}>Contact</span>Thomas
      </h1>
      {/* <h6 style={{color: "white"}}>
        If you would like to reach out to me directly as an individual client or a business please fill out the below form and I will contact you ASAP!
      </h6> */}
      <Form className="intake" onSubmit={handleSubmit}>
        <FormGroup
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
          row
        >
          {" "}
          <Label for="exampleName">Name or Name of Organization</Label>
          <Input
            style={{
              width: "450px",
            }}
            id="Name"
            name="name"
            placeholder="Name"
            type="name"
            innerRef={nameRef}
          />
        </FormGroup>{" "}
        <FormGroup style={{ display: "flex", justifyContent: "center" }} row>
          <Label for="exampleEmail">Email</Label>
          <Input
            style={{
              width: "450px",
            }}
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            innerRef={emailRef}
          />
        </FormGroup>{" "}
        <FormGroup style={{ display: "flex", justifyContent: "center" }} row>
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
              width: "450px",
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
                width: "450px",
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
        <FormGroup tag="fieldset" style={{ color: "white" }}>
          <label>Best Method of Contact:</label>
          <FormGroup check>
            <Input
              name="radio1"
              type="radio"
              innerRef={methodRef}
              value={"Email"}
            />{" "}
            <Label check> Email</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="radio1"
              type="radio"
              innerRef={methodRef}
              value={"Phone"}
            />{" "}
            <Label check>Phone</Label>
          </FormGroup>
        </FormGroup>{" "}
        <FormGroup
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Input
            id="Message"
            name="message"
            placeholder="Message"
            type="textarea"
            style={{
              // height: "20vh",
              width: "450px",
              marginLeft: "25px",
            }}
            innerRef={messageRef}
          />

          <Label
            style={{
              margin: "24px",
              width: "450px",
            }}
            for="exampleMessage"
          >
            Leave me a brief message about yourself, your organization, or
            goals!
          </Label>
        </FormGroup>{" "}
        <buttonIntake className="buttonIntake">Submit</buttonIntake>
      </Form>
    </div>
  )
}

export default Intake
