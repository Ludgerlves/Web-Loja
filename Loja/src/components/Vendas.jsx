const Sale = () => {
    return (
      <section className="sale" id="fashion">
        <div className="section__container sale__container">
          <div className="sale__image">
            <img src="assets/sale.png" alt="promoção" />
          </div>
          <div className="sale__content">
            <h2><span>PROMOÇÃO</span><br />AGORA</h2>
            <p>
              Gaste no mínimo 90.000 Kz e ganhe 30% de desconto em um código para sua próxima compra
            </p>
            <h4>1 de Julho - 10 de Julho de 2024</h4>
            <p>*Termos e condições aplicáveis</p>
            <div className="sale__btn">
              <button className="btn">Compre Agora</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Sale;