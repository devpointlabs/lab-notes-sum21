import { Navbar, Nav } from 'react-bootstrap'

const MainNavbar = () => (
  <Navbar bg="dark" variant="dark">
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    </Nav>
  </Navbar>
)

export default MainNavbar;