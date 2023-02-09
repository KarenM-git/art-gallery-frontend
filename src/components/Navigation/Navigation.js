import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar__container'>
        <li className='navbar__item'>
          <Link className='navbar__link' to='/'>
            Inicio
          </Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to='/artwork'>
            Artwork
          </Link>
        </li>
        <li className='navbar__item'>
          <a className='navbar__link' href='/#about'>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
