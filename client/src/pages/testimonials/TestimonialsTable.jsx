import React from 'react'
import { Button, Table } from 'reactstrap'
import { baseURL } from '../../environment'
import { useNavigate } from 'react-router-dom';

function TestimonialsTable(props) {

    // console.log(props)
    const navigate = useNavigate();

    async function deleteTestimonial(id) {
        const url = `http://localhost:4000/testimonialsindex/${id}`;

        let requestOptions = {
                method: 'DELETE'
        }

        try {
            
            let res = await fetch(url, requestOptions);
            let data = await res.json();

            // console.log(data.message);
            if(data.message === "Testimonial Removed") {
                props.fetchTestimonials();
            } else {
                throw new Error("Testimonial was not removed!")
            }

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
        <h1 style={{color: "#cddee5"}}>Testimonials</h1>
        <Table striped>
            <thead>
                <tr>
                    <th style={{color: "#cddee5"}}>
                        Name
                    </th>
                    <th style={{color: "#cddee5"}}>
                        Association
                    </th>
                    <th style={{color: "#cddee5"}}>
                        Quote
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                props.testimonials.map(testimonials => (
                <tr key={testimonials._id}>
                    <th style={{color: "#cddee5"}} scope="row">
                    {testimonials.name}
                    </th>
                    <td style={{color: "#cddee5"}}>
                        {testimonials.association}
                    </td>
                    <td style={{color: "#cddee5"}}>
                        {testimonials.quote}
                    </td>
                    <td>
                        <Button
                            onClick={() => navigate(`/testimonialsindex/${testimonials._id}`)}
                            color="warning">Edit</Button>
                        <Button
                            onClick={() => deleteTestimonial(testimonials._id)}
                            color="danger">Delete</Button>
                        
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}

export default TestimonialsTable