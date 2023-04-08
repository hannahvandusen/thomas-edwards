import { React } from "react";
import {  Card, CardImg, CardGroup, CardTitle, CardText, CardBody, CardSubtitle, CardHeader, Row, Col } from "reactstrap";

const Testimonials = () => {
return (
	<>
	<h1 style={{color: "white"}}>What People Are Saying About Thomas</h1>

    <div>

    <Row>
        
    <CardGroup>
    

  <Col>
  <Card className="my-2"
    color="primary"
    outline
    style={{
      width: '18rem'
    }}>
    <CardHeader>
        As a Colleague
    </CardHeader>
    <CardImg
      alt="Thomas photo 2"
      src="./images/photo2.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Jason Line
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        - Coworker
      </CardSubtitle>
      <CardText>
      Thomas isn't just dedicated to his own success, he is also a champion for the success of others. I struggled for years, to break into the tech sector, but after meeting Thomas, he referred me to an open position with his employer. Three weeks later, I had an offer for my dream job. Since then, I've heard of several others that Thomas has helped. He is a person of great generosity and his good name carries tremendous value!
      </CardText>
    </CardBody>
  </Card>
  </Col>

  

  <Col>
  <Card className="my-2"
    color="primary"
    outline
    style={{
      width: '18rem'
    }}>
    <CardHeader>
        As a Person
    </CardHeader>
    <CardImg
      alt="Thomas photo 4"
      src="./images/photo4.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Tayjah Coyle
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        - Friend
      </CardSubtitle>
      <CardText>
      I’ve had nothing but positive and pleasant experience from Thomas. He is always kind and caring, offering wisdom and guidance wherever he can. He was not only a resource for me but my colleagues as well. I fully recommend that Thomas is someone you need to know.
      </CardText>
    </CardBody>
  </Card>
  </Col>

  <Col>
  <Card className="my-2"
    color="primary"
    outline
    style={{
      width: '18rem'
    }}>
    <CardHeader>
        As a Role Model
    </CardHeader>
    <CardImg
      alt="Thomas photo 3"
      src="./images/photo3.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Eugene Johnson
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        - Fellow Hoosier
      </CardSubtitle>
      <CardText>
      Thomas Edwards has provided high-level professional guidance to Hoosiers looking to better their lives through education. He is passionate about guiding individuals and families in accessing national, state and local resources that help minimize the cost of attending and graduating for college, and maximize the potential for career success. Mr. Edwards believes that everyone has greatness within, and strives to be a role model and mentor that helps all become their best selves.
      </CardText>
    </CardBody>
  </Card>
  </Col>

</CardGroup>

</Row>

<Row>

    <CardGroup>
    <Col>
  <Card className="my-2"
    color="primary"
    outline
    style={{
      width: '18rem'
    }}>
    <CardHeader>
        As a Student
    </CardHeader>
    <CardImg
      alt="Thomas photo 6"
      src="./images/photo6.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Certis Montgomery
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        - Instructor
      </CardSubtitle>
      <CardText>
      As a cyber security instructor at the Eleven Fifty Academy, I had the opportunity to teach students about various aspects of cyber security, including ethical hacking, network security, and incident response. The academy was a great place to work, and I found the experience to be incredibly fulfilling. One student that stood out to me was Thomas Edwards. He was an exceptionally motivated and engaged learner, always eager to take on new challenges and learn new skills. I enjoyed collaborating with him on various assignments and projects throughout the course, and I was consistently impressed by his technical abilities and creativity. Overall, my time at the Eleven Fifty Academy was a highly positive experience. I felt honored to have been able to help prepare the next generation of cyber security professionals like Thomas, and I believe that the knowledge and skills that I was able to impart on my students will serve them well in their future careers.
      </CardText>
    </CardBody>
  </Card>
  </Col>

  <Col sm="4">
    <Card className="my-2"
    color= "primary"
    outline
    style={{
      width: '18rem'
    }}>
    <CardHeader>
        As a Mentor
    </CardHeader>
    <CardImg
      alt="Thomas photo 1"
      src="./images/photo1.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Andre Snowden
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        - Mentee
      </CardSubtitle>
      <CardText>
      Thomas has demonstrated exceptional qualities as a friend and mentor, going above and beyond to support me in my journey to land my current IT job. I have been thoroughly impressed with his dedication, work ethic, and kindness.
Through his guidance, encouragement, and support, Thomas played a vital role in my career development, helping me navigate the challenging landscape of IT job hunting. His willingness to share his knowledge and experience is a testament to his character and his dedication to helping others succeed.
I have no doubt that Thomas will continue to make a significant impact in the lives of those around him. His passion for IT and his commitment to helping others achieve their goals are truly inspiring. I feel fortunate to have him as my friend and mentor, and I'm sure that many others have also benefited from his kindness and expertise.
Overall, I highly recommend Thomas as a friend, mentor, and professional contact. He is a valuable asset to any team, and I am confident that he will continue to excel in his career while making a positive impact on those around him.
      </CardText>
    </CardBody>
  </Card>
  </Col>
  


    </CardGroup>

</Row>

</div>


	</>
);
};

export default Testimonials;
