import { AuthConsumer } from '../../providers/AuthProvider';
import { Link, withRouter } from 'react-router-dom';
import { bookformButton } from '../styledComponents/sharedStyles';
import { Navbar, Nav, NavDropdown, Image, Container, Button } from 'react-bootstrap';
const MainNavbar = ({ user, handleLogout, history }) => {
  const rightNavItems = () => {
    if (user) {
      return(
        <Container>
        <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Link to="/bookform">
          <Button style={{background: "rgba(152, 72, 255, 100)", border: "rgba(152, 72, 255, 100)", color: "white", borderradius: "15px", position: "absolute", right: "40px", top: "15px"}}>Create a New Book</Button>
        </Link>
        <NavDropdown eventkey={1} 
              title={
                  <div className="pull-left">
                      <Image className="thumbnail-image" 
                          src={user.user != undefined ? user.user.image : "https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png"}
                          roundedCircle
                          width="30"
                          height="30" 
                          alt="user pic"
                      />
                    </div>
                } 
                id="basic-nav-dropdown">
              <NavDropdown.Item eventKey={1.1} href="/profile">Profile Settings</NavDropdown.Item>
              <NavDropdown.Item divider />
              <NavDropdown.Item eventKey={1.3}>
                  {/* <i className="fa fa-sign-out"></i> Logout */}
                  <Link onClick={() => handleLogout(history)}>Logout</Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Container>
      )
    } else {
      return (
        <Nav className="mr-auto justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      )
    }
  }
  return (
    <Container>
    <Navbar bg="white" variant="white" borderradius="20px" background="rgba(152, 72, 255, 100)">
      <Link to="/books">
        <Navbar.Brand href="/home">
          <img
            alt=""
            src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1625707186/logo_hy0ksx.png"
            width="175"
            height="50"
            className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
      </Link>
      { rightNavItems()}
    </Navbar>
    </Container>
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










