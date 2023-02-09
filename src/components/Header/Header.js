import Navbar from "../Navigation/Navigation";
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";

function Header() {
    return (
      <header className='header'>
        <Link className='header__home' to='/'>
          <img className='header__logo' src={logo} alt='' />
        </Link>
        <Navbar></Navbar>
      </header>
    );
}

export default Header;