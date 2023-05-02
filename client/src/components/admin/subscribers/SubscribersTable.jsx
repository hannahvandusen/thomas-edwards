import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Table, Button } from 'reactstrap';
import CsvDownloadButton from 'react-json-to-csv';

function Subscribers() {
    const [ subscribers, setSubscribers ] = useState([]);
    const navigate = useNavigate(); 

    const fetchSubscribers = async () => {
        const url = 'http://localhost:4000/subscribe'
        const requestOptions = {
            method: 'GET'
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
 
            //console.log(data.subscribers[0]);

            setSubscribers(data.subscribers); 
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            fetchSubscribers();
            // console.log(subscribers); 
        }
    }, [localStorage.getItem('token')])

    // const downloadFile = subscribers.map(subscriber => {
    //     let subscribe = (subscriber.name, subscriber.email).json(); 
    // })

    // const subscriberChimp = subscribers.map((subscriber) => (
    //     subscriber.name, 
    // ))`${subscribers.name}, ${subscribers.email}`
    return (
    <>
        <h2 style={{color: "#cddee5", fontFamily: "Georgia, serif"}}>Subscribers</h2>
        <Container style={{width: "80%"}}>
        <CsvDownloadButton 
        delimiter=','
        data={subscribers} 
        style={{backgroundColor: "#ffcd51", 
        color: "black", float: "right"}} />
        <Table style={{color: "#cddee5", fontFamily: "Georgia, serif"}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    subscribers.map(subscriber => (
                        <tr key={subscriber._id}>
                            <th scope = 'row'>{subscriber.name}</th>
                            <th> {subscriber.email} </th>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        <Button onClick={() => navigate('/admin')} style={{backgroundColor: "#ffcd51", 
        color: "black"}} >Back to Admin Portal</Button>
        </Container>
    </>
    )
}

export default Subscribers