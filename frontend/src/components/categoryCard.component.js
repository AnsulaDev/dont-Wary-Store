import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import "./category.css";
const CategoryCard = ({category, idx}) => {
    const images =[
        "/images/graphicscard-category.png",
        "/images/keyboards-category.png",
        "/images/mouse-category.png",
        "/images/monitors-category.png",
        "/images/mousepad-category.png",
        "/images/headphone-category.png",
        "/images/monitorriser-category.png",
        "/images/cooler-category.png",
        "/images/casefan-category.png",
        "/images/cabinet-category.png",
        "/images/powersupplies-category.png",
        "/images/motherboards-category.png",
        "/images/memory-category.png",
        "/images/storage-category.png",
        "/images/controller-category.png",
        "/images/processor-category.png",
  
    ]
    return (
        <Card className='categorybg'>
            <Card.Img variant="top" src={images[idx]} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                
                </Card.Text>
                <LinkContainer to="/product-list">
                    <Button variant="primary">Shop Now!</Button>
                </LinkContainer>
                
                </Card.Body>
        </Card>
    )
}

export default CategoryCard;
