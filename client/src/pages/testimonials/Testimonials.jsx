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
    <h1 style={{color: "#c59045"}}>What People Are Saying About Thomas</h1>
        
    {/* <CardGroup> */}
  <Row style={{justifyContent: "space-evenly", padding: "1em"}}>
    {testimonials.map(testimonial => ( 
      <Col sm="9">
      <Card className="my-2" 
      outline
      key={testimonial._id}
      style={{backgroundColor: "#a65b24", color: "#16181e"}}
      >
  
        <CardHeader style={{fontSize: "x-large"}}>
            {testimonial.caption}
        </CardHeader>
        <CardBody>
          <CardImg
          alt="Thomas photo 2"
          src="./images/photo2.jpg"
          top
          width="100%"
          />
        <CardTitle tag="h5">
        {testimonial.name}
        </CardTitle>
        <CardSubtitle
          tag="h6"
          style={{color: "#16181e"}}
        >
          {testimonial.association}
        </CardSubtitle>
        <CardText style={{color: "#16181e"}}>
        {testimonial.quote}
        </CardText>
        </CardBody>
    </Card>
    </Col>
    ))}
  
  </Row>
</div>
</>
);
};

export default Testimonials;
