const Banner = () => {
    const bannerImages = [
      "banner-1.png", "banner-2.png", "banner-3.png", 
      "banner-4.png", "banner-5.png", "banner-6.png", 
      "banner-7.png", "banner-8.png"
    ];
  
    return (
      <section className="banner">
        <div className="banner__container">
          {bannerImages.map((img, index) => (
            <img key={index} src={`assets/${img}`} alt="banner" />
          ))}
        </div>
      </section>
    );
  };
  
  export default Banner;