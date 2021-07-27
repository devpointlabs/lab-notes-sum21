import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Form } from 'react-bootstrap';
import { CenterLogin } from "../../components/styledComponents/LoginPage";

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
    <CenterLogin>
      <img src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1625707186/logo_hy0ksx.png"
            width="250"
            height="71"/>
      <Form style={{width: "20rem"}} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
          <Form.Label><b>Name</b></Form.Label>
          <Form.Control
            className="inputGrey" 
            type="name" 
            placeholder="bob vance" 
            name="name"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label><b>Email</b></Form.Label>
          <Form.Control 
            className="inputGrey"
            type="email" 
            placeholder="bob@email.com" 
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
        <Form.Group controlId="formBasicPasswordConfirmation">
          <Form.Label><b>Password Confirmation</b></Form.Label>
          <Form.Control
            className="inputPurple" 
            type="password" 
            placeholder="retype password" 
            name="passwordConfirmation"
            value={user.passwordConfirmation}
            onChange={(e) => setUser({...user, passwordConfirmation: e.target.value})}
          />
        </Form.Group>
        <Button type="submit" style={{background: "rgba(152, 72, 255, 100)", border: "rgba(152, 72, 255, 100)", color: "white", width: "20rem"}}>
          <b>Submit</b>
        </Button>
      </Form>
    </CenterLogin>
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
