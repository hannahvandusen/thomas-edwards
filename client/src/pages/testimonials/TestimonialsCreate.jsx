import React, {useRef} from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { baseURL } from '../../environment';

function TestimonialsCreate(props) {

    const formRef = useRef();
    const captionRef = useRef();
    const nameRef = useRef();
    const associationRef = useRef();
    const quoteRef = useRef();
    const photoRef = useRef();

    function previewFile() {
        const preview = document.querySelector("img");
        const file = document.querySelector("input[type=file]").files[0];
        const reader = new FileReader();
      
        reader.addEventListener(
          "load",
          () => {
            preview.src = reader.result;
          },
          false
        );
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }
      

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);

        const url = `${baseURL}/testimonialsindex`
            console.log(url);

    const bodyObj = JSON.stringify({
        caption: captionRef.current.value,
        name: nameRef.current.value,
        association: associationRef.current.value,
        quote: quoteRef.current.value,
        photo: photoRef.current.value
    });
    // console.log(bodyObj);

    let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json");
        myHeader.append('Authorization', props.token);

        const requestOptions = {
            headers: myHeader,
            body: bodyObj,
            method: 'POST'
        }
        console.log(bodyObj);

        try {
            const res = await fetch(url, requestOptions)
            const data = await res.json();

            // console.log(data);

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
                innerRef={formRef}
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
                <FormGroup>
                    <Label style={{color: "#cddee5"}}>Photo</Label>
                    <Input 
                        innerRef={photoRef} 
                        type='file'
                        onchange="previewFile()"/>
                </FormGroup>
                
                <Button type='submit' color="success" >Add Testimonial</Button>
            </Form>
        </>
    )
}


export default TestimonialsCreate