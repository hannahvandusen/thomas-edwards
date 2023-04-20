import "./SubscribeForm.css";
import React, { useRef, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function SubscribeForm() {
    // const [email, setEmail] = useState("");
    // const [subscribed, setSubscribed] = useState(false);

    // localStorage.setItem("subscriber", `${data.token}`)
    
    // function handleEmailChange(event) {
    //     setEmail(event.target.value);
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     fetch("/newsletter/subscribe", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ email }),
    //     })
    //         .then((response) => {
    //             if (response.ok) {
    //                 setSubscribed(true);
    //             } else {
    //                 console.log("Failed to subscribe");
    //             }
    //         })
    //         .catch((error) => {
    //             console.log("Error subscribing:", error);
    //         });
    // }
    const emailRef = useRef();
    const nameRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const name = nameRef.current.value;

        let bodyObj = JSON.stringify({ email, name });
        const url = `http://localhost:4000/subscribe`;
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
            localStorage.setItem("subscriber", `${data.token}`)
        } catch (err) {
            console.error(err); 
        }

    }

    return (
        <div>
            {/* {subscribed ? (
                <p>Thank you for subscribing!</p>
            ) : ( */}
                {/* <form action="#" class="row flex-fill" onSubmit={handleSubmit}>
                    <label htmlFor="email-input">
                        Stay up to date with the latest news
                    </label>
                    <input
                        type="email"
                        className="form-control px-4 border-0 w-100 text-center text-md-left"
                        id="email"
                        placeholder="Your Email"
                        name="email"
                        // id="email-input"
                        innerRef={emailRef}
                    />
                    <input 
                        type="name"
                        className="form-control px-4 border-0 w-100 text-center text-md-left"
                        id="name"
                        placeholder="Your Name"
                        name="name"
                        innerRef={nameRef}
                    /> 
                    <button
                        type="submit"
                        class="btn btn-primary btn-lg border-0 w-100"
                    >
                        Subscribe
                    </button>
                </form> */}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input innerRef={emailRef} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input innerRef={nameRef} />
                    </FormGroup>
                    <button></button>
                    <Button type="submit">Subscribe</Button>
                </Form>
            
        </div>
    );
}

export default SubscribeForm;
