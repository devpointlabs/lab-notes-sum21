<<<<<<< HEAD
import { AuthConsumer } from '../../providers/AuthProvider';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const MainNavbar = ({ user, handleLogout, history }) => {

  const rightNavItems = () => {
    if (user) {
      return(
        <Nav className="justify-content-end">
          <Button variant="outline-info" onClick={() => handleLogout(history)}>
            Logout
          </Button>
        </Nav>
      )
    } else {
      return (
        <Nav className="mr-auto justify-content-end">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      )
    }
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Home</Navbar.Brand>
      </Link>
      { rightNavItems() }
    </Navbar>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { auth => 
      <MainNavbar {...props} {...auth} />
    }
  </AuthConsumer>
=======
import { Navbar, Nav } from 'react-bootstrap'

const MainNavbar = () => (
  <Navbar bg="dark" variant="dark">
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
  </Navbar>
>>>>>>> 0e6348a (fixed changes)
)

export default withRouter(ConnectedMainNavbar);