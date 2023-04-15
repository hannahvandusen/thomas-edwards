import { React, useEffect, useState } from "react";
import {  Button, Card, CardImg, CardGroup, CardTitle, CardText, CardBody, CardSubtitle, CardHeader, Row, Col } from "reactstrap";
import { useNavigate } from 'react-router-dom';

function Testimonials() {

  const navigate = useNavigate();
  const [ testimonials, setTestimonials ] = useState([]);

  const fetchTestimonials = async () => {
    const url = 'http://localhost:4000/testimonialsindex'
    const requestOptions = {
      method: 'GET'
    }

    try {
      const res = await fetch(url, requestOptions);
      const data = await res.json();
      // console.log(data);

      setTestimonials(data.testimonials);

    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [])

  return (

	<>

    <div>
    <h1 style={{color: "#cddee5"}}>What People Are Saying About Thomas</h1>
        
    <CardGroup>
    
    {testimonials.map(testimonial => ( 
      <Card className="my-2" color="primary"
      outline
      key={testimonial._id}
      style={{
        width: '18rem'
      }}>
  
        <CardHeader>
            Caption
        </CardHeader>
        <CardBody>
          <CardImg
          alt="Thomas photo 2"
          src="./images/photo2.jpg"
          top
          width="100%"
          />
        <CardTitle tag="h5">
        {testimonial.firstName} {testimonial.lastName}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Thomas {testimonial.association}
        </CardSubtitle>
        <CardText>
        {testimonial.quote}
        </CardText>
        </CardBody>
    </Card>
    ))}
  
      </CardGroup>

</div>
</>
);
};

export default Testimonials;
