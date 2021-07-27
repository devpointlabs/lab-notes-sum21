import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CenterLogin } from "../../components/styledComponents/LoginPage";

const Login = ({ handleLogin, history }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user, history);
    setUser({ email: '', password: ''})
  }

  return(
    <> 
    <CenterLogin>
      <img src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1625707186/logo_hy0ksx.png"
            width="250"
            height="71"/>
    
      <Form style={{width: "20rem"}} onSubmit={handleSubmit}>  
      <Form.Group controlId="formBasicEmail">
        <Form.Label><b>Email</b></Form.Label>
        <Form.Control
          className="inputGrey" 
          type="email" 
          placeholder="Enter email" 
          name="email"
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control 
          className="inputPurple"
          type="password" 
          placeholder="Password" 
          name="password"
          value={user.password}
          onChange={(e) => setUser({...user, password: e.target.value})}
        />
      </Form.Group>
        <Button type="submit" className="item" style={{background: "rgba(152, 72, 255, 100)", border: "rgba(152, 72, 255, 100)", color: "white", width: "20rem"}}>
          <b>Login</b>
        </Button>
        <Link to="/register">
        <Button type="submit" style={{background:"#ebe5f5", border: "#ebe5f5", color: "black", width: "20rem"}}>
          <b>Create an account</b>
        </Button></Link>
      </Form>
      </CenterLogin>
    </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => <Login {...props} {...auth} /> }
  </AuthConsumer>
)

export default ConnectedLogin;