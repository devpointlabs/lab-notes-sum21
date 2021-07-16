import { AuthConsumer } from '../../providers/AuthProvider';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { bookformButton } from '../styledComponents/sharedStyles';

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
    <Navbar bg="white" variant="white" borderRadius="20px" background="rgba(152, 72, 255, 100)" >
        <Link to="/books">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        
        <Link to="/bookform">
          <Button style={{background: "rgba(152, 72, 255, 100)", border: "rgba(152, 72, 255, 100)", color: "white", borderRadius: "15px", position: "absolute", right: "40px", top: "15px"}}>Create a New Book</Button>
       
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
)

export default withRouter(ConnectedMainNavbar);