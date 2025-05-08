const Footer = () => {
    const socialLinks = [
      { icon: 'ri-facebook-fill', link: '#' },
      { icon: 'ri-instagram-line', link: '#' },
      { icon: 'ri-twitter-fill', link: '#' },
      { icon: 'ri-linkedin-fill', link: '#' }
    ];
  
    const companyLinks = [
      { text: 'Sobre', link: '#' },
      { text: 'Fale Conosco', link: '#' },
      { text: 'Suporte', link: '#' },
      { text: 'Carreiras', link: '#' }
    ];
  
    const quickLinks = [
      { text: 'Localização da Loja', link: '#' },
      { text: 'Rastreamento de Pedidos', link: '#' },
      { text: 'Guia de Tamanhos', link: '#' },
      { text: 'Perguntas Frequentes', link: '#' }
    ];
  
    const legalLinks = [
      { text: 'Termos & Condições', link: '#' },
      { text: 'Política de Privacidade', link: '#' }
    ];
  
    return (
      <footer>
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="footer__logo">
              <a href="#">MODA</a>
            </div>
            <p>Complete seu estilo com roupas incríveis de nós.</p>
            <ul className="footer__socials">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link}><i className={item.icon}></i></a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4>Empresa</h4>
            <ul className="footer__links">
              {companyLinks.map((item, index) => (
                <li key={index}><a href={item.link}>{item.text}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4>Links Rápidos</h4>
            <ul className="footer__links">
              {quickLinks.map((item, index) => (
                <li key={index}><a href={item.link}>{item.text}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4>Legal</h4>
            <ul className="footer__links">
              {legalLinks.map((item, index) => (
                <li key={index}><a href={item.link}>{item.text}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bar">
          Copyright © 2024 Domínio do Web Design. Todos os direitos reservados.
        </div>
      </footer>
    );
  };
  
  export default Footer;