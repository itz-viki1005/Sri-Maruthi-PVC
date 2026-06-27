import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="overlay">
        <h1>
          DESIGN YOUR <span>DREAM SPACE</span>
        </h1>

        <p>
          Stylish PVC Interiors for Homes, Offices & Commercial Spaces
        </p>

        <button
          className="start-btn"
          onClick={() =>
            window.open(
              "https://wa.me/918220444463?text=Hi, I need interior design services"
            )
          }
        >
          BOOK CONSULTATION 
        </button>
      </div>
    </section>
  );
}

export default Hero;

