import React, { useState } from 'react';

const Promo = () => {
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Lógica para enviar o email
      console.log('Email enviado:', email);
      setEmail('');
    };
  
    return (
      <section className="promo">
        <div className="section__container promo__container">
          <h2 className="section__header">
            JUNTE-SE À COMUNIDADE DE COMPRAS PARA PROMOÇÕES MENSAIS
          </h2>
          <p>Digite seu e-mail abaixo e seja da geração jovem e selvagem</p>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Adicione seu e-mail aqui" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" type="submit">ENVIAR</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Promo;