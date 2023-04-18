import React, {useRef} from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function TestimonialsCreate(props) {

    // const formRef = useRef("");
    const nameRef = useRef();
    const associationRef = useRef();
    const quoteRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(firstNameRef.current.value);

    //console.log(url);

    const bodyObj = JSON.stringify({
        name: nameRef.current.value,
        association: associationRef.current.value,
        quote: quoteRef.current.value,
    });
    // console.log(bodyObj);

    const url = `http://localhost:4000/testimonialsindex`
    const headers = new Headers({
        "Content-Type": "application/json"
    });

        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'POST'
        }
        //console.log(bodyObj);

        try {
            const res = await fetch(url, requestOptions)
            const data = await res.json();

            // console.log(data.newTestimonials);

            // formRef.current.reset(); 
            props.fetchTestimonials();

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <h1 style={{color: "#cddee5"}}>Add Testimonial</h1>
            <Form 
                // innerRef={formRef}
                onSubmit={handleSubmit}>
                <FormGroup>
                    <Label style={{color: "#cddee5"}}>Name</Label>
                    <Input 
                        innerRef={nameRef}
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
                        autoComplete='off' 
                        type='textarea'/>
                </FormGroup>
                
                <Button type='submit' color="success" >Add Testimonial</Button>
            </Form>
        </>
    )
}


export default TestimonialsCreate