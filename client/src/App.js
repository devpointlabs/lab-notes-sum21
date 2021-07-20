import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import MainNavbar from './components/shared/MainNavbar';
import FetchUser from './components/auth/FetchUser';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ColShow from './components/cols/ColShow';
import Cols from './components/cols/Cols';
import Books from './components/books/Books';
import BookShow from './components/books/BookShow';
import Profile from './components/auth/Profile';

import BookForm from './components/books/BookForm';
import Days from './components/days/Days';
import DayShow from './components/days/DayShow';


const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/books" component={Books} />
          <ProtectedRoute exact path="/books/:id" component={BookShow} />
          <ProtectedRoute exact path="/books/:bookId/days" component={Days} />
          <ProtectedRoute exact path="/books/:bookId/days/:id" component={DayShow} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/books" component={Books} />
          <ProtectedRoute exact path="/bookform" component={BookForm} />
          <ProtectedRoute exact path="/books/:id" component={BookShow} />
          <ProtectedRoute exact path="/days/:dayId/cols" component={Cols} />
          <ProtectedRoute exact path="/days/:dayId/cols/:id" component={ColShow} />
          <Route exact path="/books" component={Books}/>
          <ProtectedRoute exact path="/profile" component={Profile}/>
          <Route component={Nomatch} />
        </Switch>
      </Container>   
    </FetchUser>
  </>
)
export default App;
