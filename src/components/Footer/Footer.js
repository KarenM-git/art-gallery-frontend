import { useLocation } from "react-router-dom";


function Footer() {

    const { pathname } = useLocation();
    return (
      <>
        {pathname === "/search" ? (
          " "
        ) : (
          <footer className='footer'>
            <span className='footer__text'>Proyecto para Practicum 2023</span>
          </footer>
        )}
      </>
    );
            
}

export default Footer;
