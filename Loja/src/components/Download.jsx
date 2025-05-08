const Download = () => {
    return (
      <section className="section__container download__container" id="lifestyle">
        <div className="download__image">
          <img src="assets/download.png" alt="download" />
        </div>
        <div className="download__content">
          <h2 className="section__header">BAIXE O APLICATIVO E GANHE UM VOUCHER!</h2>
          <p>
            Ganhe 30% de desconto na primeira transação usando nosso novo aplicativo móvel agora.
          </p>
          <div className="download__links">
            <a href="#">
              <img src="assets/apple.png" alt="apple" />
            </a>
            <a href="#">
              <img src="assets/google.png" alt="google" />
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Download;