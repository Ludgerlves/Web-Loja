import { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">MODA</a>
        </div>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          {isOpen ? <RiCloseLine /> : <RiMenuLine />}
        </div>
      </div>
      <ul className={`nav__links ${isOpen ? 'open' : ''}`} id="nav-links" onClick={closeMenu}>
        <li><a href="#catalogue">CATÁLOGO</a></li>
        <li><a href="#fashion">MODA</a></li>
        <li><a href="#favourite">FAVORITOS</a></li>
        <li><a href="#lifestyle">ESTILO DE VIDA</a></li>
        <Link to="/Cadastro">
          <button className="btn">CADASTRE-SE</button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;