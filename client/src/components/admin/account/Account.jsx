import React, { useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useNavigate } from 'react-router-dom';

function Account() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let bodyObj = JSON.stringify({email, password});

        const url = `http://localhost:4000/admin/account`;
        const headers = new Headers({
            "Content-Type": "application/json"
        });    

        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'PATCH'
        }

        
        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            // console.log(data);
            if(data.updated) {
                // console.log(data);
                navigate('/admin/'); 
            } else {
                alert(`${data.error}. Try again!`)
            }
        } catch (err) {
            console.error(err)
        }
    }



  return (
    <>
        <h1>Update Account Info</h1>
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
            <Button type='submit' color='primary' outline>Update Account Info</Button>
        </Form>
        <Button color='primary' outline onClick={() => navigate('/admin')}>Cancel</Button>
    </>
  )
}

export default Account