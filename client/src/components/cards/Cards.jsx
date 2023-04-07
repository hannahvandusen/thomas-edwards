import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody, Row, Col } from 'reactstrap';
 const Cards = (props) => {
  return (
    <CardGroup>
      <Row>
        <Col>
          <Card>
            <Row>
              <Col md="4">
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          </Col>
          <Col md="8">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
          </Col>
          </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Row>
              <Col md="4">
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          </Col>
          <Col md="8">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
          </Col>
          </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Row>
              <Col md="4">
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          </Col>
          <Col md="8">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
          </Col>
          </Row>
          </Card>
        </Col>
      </Row>
    </CardGroup>
  );
};

export default Cards;