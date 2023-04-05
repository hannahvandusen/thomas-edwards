import React, { useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function Login() {
    const emailRef = useRef(); 
    const passwordRef = useRef();
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let bodyObj = JSON.stringify({ email, password });

        const url = `http://localhost:4000/admin/login`;
        const headers = new Headers({
            "Content-Type": "application/json"
        });    
    
        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'POST'
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            // console.log(data);

            if(data.admin) {
                console.log(data.admin);
            } else {
                alert(`${data.error}. Try again!`)
            }
        } catch (err) {
            console.error(err)

        }
    }

    return (
        <>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Email</Label>
                    <Input 
                    innerRef={emailRef}
                    type='email'
                    /> 
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input 
                    innerRef={passwordRef}
                    type='password'
                    /> 
                </FormGroup>
                <Button type='submit' color='dark'>Login</Button>
            </Form>
        </>
    )
}

export default Login