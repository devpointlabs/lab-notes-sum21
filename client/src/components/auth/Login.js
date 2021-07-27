import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Form, Container } from 'react-bootstrap';
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
      <Form style={{width: "25rem"}} onSubmit={handleSubmit}>  
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          name="email"
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          name="password"
          value={user.password}
          onChange={(e) => setUser({...user, password: e.target.value})}
        />
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
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
