import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

function PortalView() {

    let navigate = useNavigate();
    let { id } = useParams();


    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ phone, setPhone ] = useState();
    const [ time, setTime ] = useState();
    const [ method, setMethod ] = useState();
    const [ message, setMessage ] = useState();
    const [ date, setDate ] = useState();

    const fetchIntake = async () => {
        const url = `http://localhost:4000/intake/${id}`
        const requestOptions = {
            method: 'GET'
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            console.log(data);

            const { name, email, phone, time, method, message, date } = data.intake;
            setName(name); 
            setEmail(email);
            setPhone(phone);
            setTime(time);
            setMethod(method);
            setMessage(message);
            setDate(date);

        } catch (err) {
            console.error(err)
        }
    
    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            fetchIntake();
        }
    }, [localStorage.getItem('token')])


    const handleSubmit = async (e) => {
        e.preventDefault(); 

    }

  return (
    <>
        <h1>hello</h1>
    </>
  )
}

export default PortalView