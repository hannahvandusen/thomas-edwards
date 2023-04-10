import React, {useRef} from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { baseURL } from '../../environment';

function TestimonialsCreate(props) {

    const formRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const associationRef = useRef();
    const quoteRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(firstNameRef.current.value);

    const url = `${baseURL}/testimonialsindex`
    console.log(url);

    const bodyObj = JSON.stringify({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        association: associationRef.current.value,
        quote: quoteRef.current.value,
    });
    // console.log(bodyObj);

    let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json");
        // myHeader.append('Authorization', props.token);

        const requestOptions = {
            headers: myHeader,
            body: bodyObj,
            method: 'POST'
        }
        console.log(bodyObj);

        try {
            const res = await fetch(url, requestOptions)
            const data = await res.json();

            console.log(data);

            formRef.current.reset();
            props.fetchTestimonials()

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <h1 style={{color: "#cddee5"}}>Add Testimonial</h1>
            <Form 
                innerRef={formRef}
                onSubmit={handleSubmit}>
                <FormGroup>
                    <Label style={{color: "#cddee5"}}>First Name</Label>
                    <Input 
                        innerRef={firstNameRef}
                        autoComplete='off' />
                </FormGroup>
                <FormGroup>
                    <Label style={{color: "#cddee5"}}>Last Name</Label>
                    <Input 
                        innerRef={lastNameRef}
                        autoComplete='off' />
                </FormGroup>
                <FormGroup>
                    <Label style={{color: "#cddee5"}}>Association</Label>
                    <Input 
                        innerRef={associationRef}
                        autoComplete='off' />
                </FormGroup>
                <FormGroup>
                    <Label style={{color: "#cddee5"}}>Quote</Label>
                    <Input 
                        innerRef={quoteRef}
                        autoComplete='off' />
                </FormGroup>
                
                <Button color="success" >Add Testimonial</Button>
            </Form>
        </>
    )
}


export default TestimonialsCreate