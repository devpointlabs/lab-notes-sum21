import { Menu } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const MainNavbar = () => (

        <Menu>
        <NavLink to='/'>
            <Menu.Item>
                Home
            </Menu.Item>
        </NavLink>
        </Menu>
    )


    

export default MainNavbar;