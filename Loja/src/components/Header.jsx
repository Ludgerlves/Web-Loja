const Header = () => {
    return (
      <header>
        <div className="section__container header__container">
          <div className="header__content">
            <h1>
              <span>VAMOS</span>
              <br />
              EXPLORAR
              <br />
              <span>ROUPAS</span>
              <br />
              ÚNICAS.
            </h1>
            <p>Viva pela moda influente e inovadora!</p>
            <div className="header__btns">
              <button className="btn">Compre Agora</button>
            </div>
          </div>
          <div className="header__image">
            <img src="assets/header.png" alt="cabeçalho" />
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;