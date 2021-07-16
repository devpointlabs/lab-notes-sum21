import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Container, Button, Media } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

const defaultImage = "https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png"
const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false)
  const [editUser, setUser] = useState({name: '', email: '', file: ''})
  useEffect( () => {
    setUser({ name: user.user.name, email: user.user.email, file: user.user.image})
  }, [])
  const profileView = () => {
    return (
      <>
        <Media>
          <img
            width={64}
            height={64}
            className="align-self-start mr-3"
            src={user.user.image || defaultImage}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>{user.user.name}</h5>
            <h5>{user.user.email}</h5>
          </Media.Body>
        </Media>
      </>
    )
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.user.id, editUser)
    setUser({name: '', email: '', file: ''})
    setEditing(false)
  }
  
  const editView = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Media>
          <Media.Body>
          <Dropzone
            onDrop={(files) => setUser({...editUser, file: files[0]})}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop files here...</p> :
                      <p>Try dropping some files here, or click to select files to upload.</p>
                  }
                </div>
              )
            }}
          </Dropzone>
          </Media.Body>
        </Media>
      
        <Media>
          <Media.Body>
          <Form.Group controlId="formBasicUserName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Name" 
              name="name"
              value={editUser.name}
              onChange={(e) => setUser({...editUser, name: e.target.value})}
            />
          </Form.Group>
          <Form.Group controlId="formBasicUserEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Email" 
              name="email"
              value={editUser.email}
              onChange={(e) => setUser({...editUser, email: e.target.value})}
            />
          </Form.Group>
          <Button type='submit'>Update</Button>
          </Media.Body>
        </Media>
        </Form>
    )
  }
  return(
    <Container>
      <Media>
        <Media.Body>
          { editing ? editView() : profileView() }
          <Media.Body>
            <Button onClick={() => setEditing(!editing)}>
              { editing ? 'Cancel' : 'Edit'}
            </Button>
          </Media.Body>
        </Media.Body>  
      </Media>
    </Container>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => <Profile {...props} {...auth} /> }
  </AuthConsumer>
)

export default ConnectedProfile;