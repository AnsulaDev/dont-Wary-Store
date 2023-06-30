import { Navbar, Nav,
        Container, NavDropdown,Badge,
        Form ,Dropdown, DropdownButton,Button,
        InputGroup} from "react-bootstrap";

import {LinkContainer} from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
const HeaderComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  className="green">
        <Container >
            <LinkContainer to="/">
                
                <Navbar.Brand href="/href">
                <span className="newFont">Don't Wary </span>
                
                </Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <InputGroup>
                <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Mice</Dropdown.Item>
                <Dropdown.Item>Monitors</Dropdown.Item>
                <Dropdown.Item>Keyboards</Dropdown.Item>
                <Dropdown.Item>Graphics Cards</Dropdown.Item>
                <Dropdown.Item>Mouse Pads</Dropdown.Item>
                <Dropdown.Item>Cabinets</Dropdown.Item>
                <Dropdown.Item>Power Supplies</Dropdown.Item>
                <Dropdown.Item>Cpu Coolers</Dropdown.Item>
                <Dropdown.Item>Case Fans</Dropdown.Item>
                <Dropdown.Item>Mohterboards</Dropdown.Item>
                
                </DropdownButton>
                <Form.Control type="text" placeholder="Search in shop.." />
                <Button variant="warning">
                <i className="bi bi-search text-dark"></i>
                </Button>
                </InputGroup>
            </Nav>
            <Nav >
                <LinkContainer to="/admin/orders">
                    <Nav.Link >Admin
                    <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                    </Nav.Link>
                    
                </LinkContainer>
                <Nav.Link >Shop</Nav.Link>
                <NavDropdown title="Ansula" id="collasible-nav-dropdown">
                <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/user/my-orders">
                    My Orders</NavDropdown.Item>
                
                <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                    My Profile</NavDropdown.Item>
                <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                    Logout</NavDropdown.Item>
                </NavDropdown>

                <LinkContainer to="/login">
                    <Nav.Link >Login
        
                    </Nav.Link>
                    
                </LinkContainer>

                <LinkContainer to="/register">
                    <Nav.Link >Register
        
                    </Nav.Link>
                    
                </LinkContainer>
                <LinkContainer to="/cart">
                    <Nav.Link >
                    <i className="bi bi-cart-fill"></i>
                    <span className="ms-1"> CART</span>
                    <Badge pill bg="danger">
                        2
                    </Badge>
                    </Nav.Link>
                    
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default HeaderComponent;