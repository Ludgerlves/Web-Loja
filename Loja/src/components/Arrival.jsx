const Arrival = () => {
    const arrivals = [
      {
        image: "arrival-1.jpg",
        title: "Moletons & Blusas",
        link: "#"
      },
      {
        image: "arrival-2.jpg",
        title: "Casacos & Parkas",
        link: "#"
      },
      {
        image: "arrival-3.jpg",
        title: "Camisetas & T-Shirts",
        link: "#"
      }
    ];
  
    return (
      <section className="section__container arrival__container" id="catalogue">
        <h2 className="section__header">NOVIDADES</h2>
        <div className="arrival__grid">
          {arrivals.map((item, index) => (
            <div className="arrival__card" key={index}>
              <div className="arrival__image">
                <img src={`assets/${item.image}`} alt="novidade" />
              </div>
              <div className="arrival__content">
                <div>
                  <h4>{item.title}</h4>
                  <a href={item.link}>Explore Agora</a>
                </div>
                <span><i className="ri-arrow-right-line"></i></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Arrival;