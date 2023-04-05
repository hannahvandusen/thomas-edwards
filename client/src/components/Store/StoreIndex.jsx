import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg, CardGroup } from 'reactstrap'

function StoreIndex() {
    return (
        <>
        <h1>Inner Famous Shop</h1>
        <CardGroup>
        <Card>
        <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
        />
        <CardBody>
        <CardTitle tag="h5">
            Card title
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            Card subtitle
        </CardSubtitle>
        <CardText>
            This card has supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>
            Add to Cart
        </Button>
        <Button>
            View More
        </Button>
        </CardBody>
        </Card>
        <Card>
        <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
        />
        <CardBody>
        <CardTitle tag="h5">
            Card title
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            Card subtitle
        </CardSubtitle>
        <CardText>
        This card has supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>
            Add to Cart
        </Button>
        <Button>
            View More
        </Button>
        </CardBody>
        </Card>
        </CardGroup>
        </>
    )
}

export default StoreIndex; 