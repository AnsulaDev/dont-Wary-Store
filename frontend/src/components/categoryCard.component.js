import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
const CategoryCard = ({category, idx}) => {
    const images =[
        "/images/graphicscard-category.png",
        "/images/keyboards-category.jpg",
        "/images/mouse-category.png",
        "/images/monitors-category.png",
        "/images/mousepad-category.png",
        "/images/headphone-category.png",
        "/images/monitor-riser-category.png",
        "/images/cooler-category.jpg",
        "/images/casefan-category.png",
        "/images/cabinet-category.png",
        "/images/power-supplies-category.png",
        "/images/motherboards-category.png",
    ]
    return (
        <Card >
        <Card.Img variant="top" src={images[idx]} />
        <Card.Body>
            <Card.Title>{category}</Card.Title>
            <Card.Text>
            
            </Card.Text>
            <LinkContainer to="/product-list">
                <Button variant="primary">go to category</Button>
            </LinkContainer>
            
            </Card.Body>
        </Card>
    )
}

export default CategoryCard;
