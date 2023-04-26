import React, { useRef, useState, useEffect } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useNavigate } from 'react-router-dom';

function Account() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [ email, setEmail ] = useState();
    
    const fetchEmail = async () => {
        const url = `http://localhost:4000/admin/6431c2a6469670d90b412885`
        const requestOptions = {
            method: "GET",
        }
        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            const { email } = data.admin;
            setEmail(email); 

        } catch (err) {
            console.error(err); 
        }
    }

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
            console.log(data);
            if(data.updated) {
                // console.log(data);
                alert('Account updated!'); 
                navigate('/admin/'); 
            } else {
                alert(`${data.error}. Try again!`)
            }
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        fetchEmail()
    }, []); 


  return (
    <div style={{height: "80vh"}}>
        <h1 style={{color: "white", fontFamily: "Georgia, serif"}}>Update Account Info</h1>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Email</Label>
                <Input 
                    innerRef={emailRef}
                    type='email'
                    defaultValue={email}
                    required={true}
                /> 
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input 
                    innerRef={passwordRef}
                    type='password'
                    required={true}
                /> 
            </FormGroup>
            <Button type='submit' style={{backgroundColor: "#ffcd51", 
        color: "black"}}>Update Account Info</Button>
        </Form>
        <Button style={{backgroundColor: "#ffcd51", 
        color: "black"}} onClick={() => navigate('/admin')}>Cancel</Button>
    </div>
  )
}

export default Account