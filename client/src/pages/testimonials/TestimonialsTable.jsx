import React from 'react'
import { Button, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom';

function TestimonialsTable(props) {

    const navigate = useNavigate();

    async function deleteTestimonial(id) {
        const url = `http://localhost:4000/testimonialsindex/${id}`;

        let requestOptions = {
                method: 'DELETE'
        }

        try {
            
            let res = await fetch(url, requestOptions);
            let data = await res.json();

            if(data.message.toLowerCase() === "testimonial removed") {
                props.fetchTestimonials();
                alert("Testimonial Removed"); 
                Location.reload(); 
            } else {
                throw new Error("Testimonial was not removed!")
            }

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
        <h1 style={{color: "#cddee5", fontFamily: "Georgia, serif"}}>Testimonials</h1>
        <Table striped>
            <thead>
                <tr>
                    <th style={{color: "#cddee5"}}>
                        Caption
                    </th>
                    <th style={{color: "#cddee5"}}>
                        Name
                    </th>
                    <th style={{color: "#cddee5"}}>
                        Association
                    </th>
                    <th style={{color: "#cddee5"}}>
                        Quote
                    </th>
                    <th style={{color: "#cddee5"}}>
                        Update
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                props.testimonials.map(testimonials => (
                <tr key={testimonials._id}>
                    <th style={{color: "#cddee5"}} scope="row">
                        {testimonials.caption}
                    </th>
                    <td style={{color: "#cddee5"}}>
                        {testimonials.name}
                    </td>
                    <td style={{color: "#cddee5"}}>
                        {testimonials.association}
                    </td>
                    <td style={{color: "#cddee5"}}>
                        {testimonials.quote}
                    </td>
                    <td>
                        <Button
                            href='#top'
                            onClick={() => navigate(`/testimonialsindex/${testimonials._id}`)}
                            style={{
                                backgroundColor: "#ffcd51", 
                                color: "black",
                                fontFamily: "Georgia, serif"
                            }}>Edit</Button>
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