import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

function PortalTable({intakes}) {
    const navigate = useNavigate();

    //console.log(props)
    return (
    <>
        <Table style={{color: "#cddee5", fontFamily: "Georgia, serif"}}>
            <thead>
                <tr>
                    <th>Request Date</th>
                    <th>Name or Organization</th>
                    {/* <th>Email</th>
                    <th>Phone</th>
                    <th>Best Time of Day</th>
                    <th>Preferred Contact Method</th>
                    <th>Message</th> */}
                    <th>View</th>
                </tr>
            </thead>
            <tbody>
                {
                    intakes.map(intake => (
                        <tr key={intake._id}>
                            <th scope='row'>{intake.date}</th>

                            <td>{intake.name}</td>
                            {/* <td> {intake.email} </td>
                            <td> {intake.phone} </td>
                            <td> {intake.contactTime} </td>
                            <td> {intake.contactMethod} </td>
                            <td> {intake.message} </td> */}
                            <td><Button onClick={() => navigate(`/intake/${intake._id}`)}
                            style={{backgroundColor: "#ffcd51", 
                            color: "black"}}
                            >View</Button></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </>
  )
}

export default PortalTable