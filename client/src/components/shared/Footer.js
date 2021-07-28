import { Link } from 'react-router-dom';
import {
  MainFooter,
} from "../styledComponents/FooterStyles";

const Footer = () => {
  return (
    <MainFooter>
        <Link to="/About">About Us</Link>
    </MainFooter>
  )
}

export default Footer;