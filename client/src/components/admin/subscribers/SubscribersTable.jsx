import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';

function Subscribers(props) {
    
    console.log(props); 
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
                    props.subscribers.map(subscriber => {
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