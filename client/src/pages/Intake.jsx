import { React, useRef } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const Intake = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const timeRef = useRef();
  const methodRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const time = timeRef.current.value;
    const method = methodRef.current.value;
    const message = messageRef.current.value;

    const bodyObj = JSON.stringify({ name, email, phone, time, method, message });

    const url = `http://localhost:4000/intake`;
    const headers = new Headers({
      "Content-Type": "application/json"
    });

    const requestOptions = {
      headers,
      body: bodyObj,
      method: 'POST'
    };

    try {
      const res = await fetch(url, requestOptions);
      const data = await res.json();

      // console.log(data);

      if(data.newIntake) {
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
        <h1 style={{color: "white"}}>Contact Thomas</h1>
      {/* <h6 style={{color: "white"}}>
        If you would like to reach out to me directly as an individual client or a business please fill out the below form and I will contact you ASAP!
      </h6> */}
      <Form className="intake" onSubmit={handleSubmit}>
        <FormGroup floating>
          <Input
            id="Name"
            name="name"
            placeholder="Name"
            type="name"
            innerRef={nameRef}
          />
          <Label for="exampleName">
          Name or Name of Organization
          </Label>
        </FormGroup>
        {' '}
        <FormGroup floating>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            innerRef={emailRef}
          />
          <Label for="exampleEmail">
            Email
          </Label>
        </FormGroup>
        {' '}
        <FormGroup floating>
          <Input
            id="Phone"
            name="phone"
            placeholder="Phone"
            type="number"
            innerRef={phoneRef}
          />
          <Label for="examplePhone">
          Phone Number
          </Label>
        </FormGroup>
        {' '}


        <FormGroup style={{color: "white"}}>
          <Label>Best Time to Contact You: </Label>
          <Input name="select" type="select" innerRef={timeRef}>
            <option></option>
            <option value={"Morning"}>Morning</option>
            <option value={"Afternoon"}>Afternoon</option>
            <option value={"Evening"}>Evening</option>
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset" style={{color: "white"}} >
        <legend>
          Best Method of Contact:
        </legend>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
            innerRef={methodRef}
            value={"Email"}
          />
          {' '}
          <Label check> Email</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
            innerRef={methodRef}
            value={"Phone"}
          />
          {' '}
          <Label check>Phone</Label>
        </FormGroup>
      </FormGroup>
        {' '}
        <FormGroup floating>
          <Input
            id="Message"
            name="message"
            placeholder="Message"
            type="textarea"
            style={{height: "15vh"}}
            innerRef={messageRef}
          />
          <Label for="exampleMessage">
          Leave me a brief message about yourself, your organization, or goals!
          </Label>
        </FormGroup>
        {' '}
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>

        );
    };
    
    export default Intake;