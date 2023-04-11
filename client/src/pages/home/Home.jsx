import React from 'react';
import { Col, Row, Container, Input, CardGroup, Card, CardImg, CardBody, CardHeader,CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Carousel from '../../components/carousel/Carousel';
import styles from './Home.module.css';
import FullButton from '../../components/button/FullButton.jsx';


function Home() {
    return (
        <Container>
            <div class="container-fluid">
                <Row  className={styles.aboutSectionIntro}>
                    <Col class="col-sm-2">
                    <Button color="#17bcde" path="/AboutMe">About me section</Button>
                    </Col>
                    <Col id={styles.opaqueLayer}>
                        <div id={styles.aboutMeTextDiv}>
                            <h1 id={styles.aboutMeText}>About Me</h1>
                            <p id={styles.aboutMeText} >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At rerum totam nulla eius nam nisi deserunt dignissimos dolore, vel provident fuga, rem quibusdam! Consequuntur, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, id praesentium? Nam, eligendi deleniti? Dolores in labore veniam asperiores eaque necessitatibus corporis rem maiores qui, porro, facere autem quos excepturi, error magni est consequatur praesentium. Praesentium similique voluptates fugit corporis nesciunt, maiores unde eveniet beatae! Autem omnis provident placeat quia?
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <h1 id="testimonialHeader">Testimonials</h1>
                <CardGroup>
                    <Card className="my-2"
                        color="secondary"
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
                    <Card className="my-2"
                        color="secondary"
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
                    <Card className="my-2"
                        color="secondary"
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
                </CardGroup>
            </Row>
            
            <Row>
                <h3>Thomas Edwards</h3>
                <p>Inner Famous Consultation</p>
                <h3>Stay Connected & Sign up for our Newsletter</h3>
                <div>
                    <Input
                        id="nameSignup"
                        name="name"
                        placeholder='Name'
                        type="name"
                    />
                    <Input
                        id="emailSignup"
                        name="email"
                        placeholder='Email'
                        type="email"
                    />
                    <FullButton
                        color="primary"
                        type="submit"
                    >
                        Submit
                    </FullButton>
                </div>
            </Row>
        </Container>
    )
}

export default Home;
