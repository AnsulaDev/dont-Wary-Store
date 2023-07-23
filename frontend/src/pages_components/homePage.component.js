import ProductCarousel from "../components/productCarousel.component";
import  CategoryCard  from "../components/categoryCard.component";
import {Row, Container} from 'react-bootstrap';
const HomePage  = () => {
    const categories = [
        "Graphics Cards",
        "Mechanical Keyboards",
        "Mice",
        "Monitors",
        "Mouse pads",
        "Headphones",
        "Monitor Risers",
        "CPU Coolers",
        "Case Fans",
        "Cabinets",
        "Power Supplies",
        "Motherboards",
        "Memory",
        "Storage",
        "Controller",
        "CPU",
        "laptop",
        "Mic"
    ];
    return (
        <>
            <ProductCarousel/>
            <Container >
            <Row xs={1} md={2} 
            className="g-4 mt-5   justify-content-center"
            >
                {
                    categories.map((category, idx) => (
                        <CategoryCard key={idx} category={category} idx={idx} />
                    ))
                }
            </Row>
            </Container>
        </>
    
    )
};
export default HomePage;