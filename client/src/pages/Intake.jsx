import { React } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const Intake = () => {
    return (
        <div>
        <h1 style={{color: "white"}}>Contact Thomas</h1>
      {/* <h6 style={{color: "white"}}>
        If you would like to reach out to me directly as an individual client or a business please fill out the below form and I will contact you ASAP!
      </h6> */}
      <Form>
        <FormGroup floating>
          <Input
            id="Name"
            name="name"
            placeholder="Name"
            type="name"
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
          />
          <Label for="examplePhone">
          Phone Number
          </Label>
        </FormGroup>
        {' '}


        <FormGroup style={{color: "white"}}>
          <Label>Best Time to Contact You: </Label>
          <Input name="select" type="select">
            <option></option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
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
          />
          {' '}
          <Label check> Email</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
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
          />
          <Label for="exampleMessage">
          Leave me a brief message about yourself, your organization, or goals!
          </Label>
        </FormGroup>
        {' '}
        <Button>
          Submit
        </Button>
      </Form>
    </div>

        );
    };
    
    export default Intake;