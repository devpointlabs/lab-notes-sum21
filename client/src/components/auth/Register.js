import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Form } from 'react-bootstrap';

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({name:"", email: "", password: "", passwordConfirmation: ""})

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history)
      setUser({ name: '', email: '', password: '', passwordConfirmation: '' })
    } else {
      alert('Passwords Do Not Match!')
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="name" 
            placeholder="bob vance" 
            name="name"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="bob@email.com" 
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
        <Form.Group controlId="formBasicPasswordConfirmation">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="retype password" 
            name="passwordConfirmation"
            value={user.passwordConfirmation}
            onChange={(e) => setUser({...user, passwordConfirmation: e.target.value})}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => 
      <Register {...props} {...auth} />
    }
  </AuthConsumer>
)



export default ConnectedRegister;
