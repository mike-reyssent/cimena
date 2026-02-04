import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
            <Container>
                <NavbarBrand>CIMENA BOX</NavbarBrand>
                <Nav>
                    <Nav.Link>TRENDING</Nav.Link>
                    <Nav.Link>SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
        
    )
}

export default NavigationBar