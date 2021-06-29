import { Menu } from 'semantic-ui-react'
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