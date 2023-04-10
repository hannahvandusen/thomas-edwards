import React from 'react'
import { Table } from 'reactstrap';

function PortalTable({intakes}) {

    //console.log(props)
    return (
    <>
        <Table style={{color: "#cddee5"}}>
            <thead>
                <tr>
                    <th>Request Date</th>
                    <th>Name or Organization</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Best Time of Day</th>
                    <th>Preferred Contact Method</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {
                    intakes.map(intake => (
                        <tr key={intake._id}>
                            <th scope='row'>{intake.date}</th>

                            <td>{intake.name}</td>
                            <td> {intake.email} </td>
                            <td> {intake.phone} </td>
                            <td> {intake.contactTime} </td>
                            <td> {intake.contactMethod} </td>
                            <td> {intake.message} </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </>
  )
}

export default PortalTable