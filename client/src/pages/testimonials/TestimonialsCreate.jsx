import { React, useEffect, useState, useRef } from "react";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Axios from 'axios';

function TestimonialsCreate(props) {

    const formRef = useRef();
    const captionRef = useRef();
    const nameRef = useRef();
    const associationRef = useRef();
    const quoteRef = useRef();
    // const photoRef = useRef();

    // function previewFile() {
    //     const preview = document.querySelector("img");
    //     const file = document.querySelector("input[type=file]").files[0];
    //     const reader = new FileReader();

    //     reader.addEventListener(
    //         "load",
    //         () => {
    //             preview.src = reader.result;
    //         },
    //         false
    //     );
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);

        const url = `http://localhost:4000/testimonialsindex`
            console.log(url);

    const bodyObj = JSON.stringify({
        caption: captionRef.current.value,
        name: nameRef.current.value,
        association: associationRef.current.value,
        quote: quoteRef.current.value,
    });
    // console.log(bodyObj);

    let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json");

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

    const style = {
        backgroundColor: "#ffcd51", 
        color: "black",
        fontFamily: "Georgia, serif"
    }

//     const [ uploadFile, setUploadFile ] = useState("");
//     const [ cloudinaryImage, setCloudinaryImage ] = useState("")

//     const handleUpload = (e) => {
//       e.preventDefault();
//       const formData = new FormData();
//       formData.append("file", uploadFile);
//       formData.append("upload_preset", "qhhdabdz");

//     Axios.post("https://api.cloudinary.com/v1_1/dfofj3ppu/image/upload", formData).then((response) => {
//       console.log(response);
//       setCloudinaryImage(response.data.secure_url);
//     }).catch((error) => {
//       console.log(error);
//     });
// };

    return (
        <>
            <h1 style={{color: "#cddee5", fontFamily: "Georgia, serif"}}>Add a Testimonial</h1>
            <Form 
                innerRef={formRef}
                onSubmit={handleSubmit}>
                <FormGroup>
                    <Label style={{color: "#cddee5"}}>Caption</Label>
                    <Input 
                        innerRef={captionRef}
                        autoComplete='off'
                    /> 
                </FormGroup>
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
                {/* <FormGroup>
                    <Label style={{color: "#cddee5"}}>Photo</Label>
                    <Input 
                        innerRef={photoRef} 
                        type='file'
                        onChange={(event)=> {setUploadFile(event.target.files[0]);}} />
                        <button onClick={handleUpload}> Upload Image</button>
                        {cloudinaryImage && ( <img src={cloudinaryImage} /> )}
                </FormGroup> */}
                
                <Button type='submit' style={style} >Add Testimonial</Button>
            </Form>
        </>
    )
}


export default TestimonialsCreate