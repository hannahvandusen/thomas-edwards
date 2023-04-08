import React from 'react';
import { Col, Row, Container} from 'reactstrap';
import Carousel from '../../components/carousel/Carousel';
import styles from './Home.module.css';


function Home() {
    return(
<Container>
    <Row>
        <Col class="mainPhoto" className={styles.mainPhoto}>
            <Carousel/>
        </Col>
    </Row>
    <Row>
        <Col className={styles.aboutSectionIntro}>
            <h1 id={styles.aboutMeText} class="col-sm-5">About Me</h1>
            <p class="col-sm-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At rerum totam nulla eius nam nisi deserunt dignissimos dolore, vel provident fuga, rem quibusdam! Consequuntur, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, id praesentium? Nam, eligendi deleniti? Dolores in labore veniam asperiores eaque necessitatibus corporis rem maiores qui, porro, facere autem quos excepturi, error magni est consequatur praesentium. Praesentium similique voluptates fugit corporis nesciunt, maiores unde eveniet beatae! Autem omnis provident placeat quia?
            </p>
        </Col>
    </Row>
</Container>
    )
}

export default Home;
