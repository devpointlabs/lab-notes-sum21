import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Nomatch = () => (
    <>
    <Header>404 page.</Header>
    <Link to="/">
        Home
    </Link>
    </>
)

export default Nomatch;