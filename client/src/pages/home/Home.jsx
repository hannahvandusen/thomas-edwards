import React from 'react';
import { Col, Row, Container, Input } from 'reactstrap';
import Carousel from '../../components/carousel/Carousel';
import styles from './Home.module.css';
import FullButton from '../../components/button/FullButton';


function Home() {
    return (
        <Container>
            <Row class="container-fluid">
                <Col class="mainPhoto container-xxl" className={styles.mainPhoto}>
                    <Carousel id="carousel" />
                </Col>
            </Row>
            <div class="container-fluid">
            <Row className={styles.aboutSectionIntro}>
                <Col class="col-sm-2">
                </Col>
                    <Col id={styles.opaqueLayer}>
                    <div id={styles.aboutMeTextDiv}>
                        <h1 id={styles.aboutMeText}>About Me</h1>
                        <p id={styles.aboutMeText} >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At rerum totam nulla eius nam nisi deserunt dignissimos dolore, vel provident fuga, rem quibusdam! Consequuntur, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, id praesentium? Nam, eligendi deleniti? Dolores in labore veniam asperiores eaque necessitatibus corporis rem maiores qui, porro, facere autem quos excepturi, error magni est consequatur praesentium. Praesentium similique voluptates fugit corporis nesciunt, maiores unde eveniet beatae! Autem omnis provident placeat quia?
                        </p>
                        </div>
                    </Col>
                    <FullButton />
            </Row>
            </div>
            <Row>
                <h2>How I Can Help</h2>


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
