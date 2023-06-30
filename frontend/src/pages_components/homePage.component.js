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
    ];
    return (
        <>
            <ProductCarousel/>
            <Container>
            <Row xs={1} md={2} 
            className="g-4 mt-5 "
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