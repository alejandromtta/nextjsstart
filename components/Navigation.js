import Link from 'next/link';
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
export default function Navigation () {
    return (
     
        <Navbar bg="dark" variant="dark">
        <Container>
            <Link href="/">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
        <Link href="/">
          <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link href="/about">
          <Nav.Link href="#features">About</Nav.Link>
          </Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}