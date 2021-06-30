import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthConsumer } from '../../providers/AuthProvider';

const FetchUser = ({ authenticated, children, setUser }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect ( () => {
    if (authenticated) {
      load();
    } else {
      if (checkLocalToken()) {
        axios.get('/api/auth/validate_token')
          .then( res => {
            setUser(res.data.data);
            load();
          })
          .catch( res => {
            load();
          })
      } else {
        load();
      }
    }
  }, [])

  const checkLocalToken = () => {
    const token = localStorage.getItem('access-token');
    return token;
  }
    
    const load = () => setLoaded(true);
    
    return loaded ? children : null;
  }

  const ConnectedFetchUser = (props) => (
    <AuthConsumer>
      { auth =>
        <FetchUser {...props} {...auth} />
      }
    </AuthConsumer>
  )

<<<<<<< HEAD
export default ConnectedFetchUser;
=======
export default ConnectedFetchUser;
>>>>>>> e7255a8 (Added Devise auth)
