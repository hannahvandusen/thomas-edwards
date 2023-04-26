import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';

function Subscribers() {
    const [ subscribers, setSubscribers ] = useState();


    const fetchSubscribers = async () => {
        const url = 'http://localhost:4000/subscribe'
        const requestOptions = {
            method: 'GET'
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
 
            console.log(data.subscribers);

            setSubscribers(data.subscribers); 
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            fetchSubscribers();
            console.log(subscribers); 
        }
    }, [localStorage.getItem('token')])


    return (
    <>
        <Table style={{color: "#cddee5", fontFamily: "Georgia, serif"}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email Address</th>
                </tr>
            </thead>
            <tbody>
                {/* {
                    subscribers.map(subscriber => {
                        <tr key={subscriber._id}>
                            <th>{subscriber.name}</th>
                            <th> {subscriber.email} </th>
                        </tr>
                    })
                } */}
            </tbody>
        </Table>
    </>
  )
}

export default Subscribers