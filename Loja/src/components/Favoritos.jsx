const Favourite = () => {
    const favourites = [
      {
        image: "favourite-1.jpg",
        title: "Tendências no Instagram",
        link: "#"
      },
      {
        image: "favourite-2.jpg",
        title: "Tudo por menos de 36.000 Kz",
        link: "#"
      }
    ];
  
    return (
      <section className="section__container favourite__container" id="favourite">
        <h2 className="section__header">FAVORITOS DOS JOVENS</h2>
        <div className="favourite__grid">
          {favourites.map((item, index) => (
            <div className="favourite__card" key={index}>
              <div className="favourite__image">
                <img src={`assets/${item.image}`} alt="favorito" />
              </div>
              <div className="favourite__content">
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
  
  export default Favourite;