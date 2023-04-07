import { React } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const Intake = () => {
    return (

        <>
  <p>
    If you would like to reach out to me directly as a client or a business please just leave me some info and I will contact you ASAP!
  </p>
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
    <FormGroup floating>
      <Input
        id="Available"
        name="available"
        placeholder="Available"
        type="name"
      />
      <Label for="exampleAvailable">
       Best Method / Time to Contact You
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="Message"
        name="message"
        placeholder="Message"
        type="name"
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
</>

        );
    };
    
    export default Intake;