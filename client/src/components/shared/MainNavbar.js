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
    <Navbar bg="light" variant="light">
      <Link to="/">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1625707186/logo_hy0ksx.png"
            width="130"
            height="30"
            className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
      </Link>
      { rightNavItems()}
    </Navbar>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { auth => 
      <MainNavbar {...props} {...auth} />
    }
  </AuthConsumer>
)

export default withRouter(ConnectedMainNavbar);