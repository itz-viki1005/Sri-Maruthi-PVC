import "./About.css";
import interiorImage from "../assets/About.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-image">
          <img src={interiorImage} alt="Maruthi PVC Interiors" />
        </div>

        <div className="about-content">
          <h2>About <span>Sri Maruthi PVC Interiors</span></h2>

          <p>
            Maruthi PVC Interiors specializes in creating elegant,
            functional, and modern interior spaces for homes,
            offices, and commercial buildings.
          </p>

          <p>
            We provide high-quality PVC materials, wall flutted panels,
            wardrobes, TV units, modular designs, and customized
            interior solutions that combine beauty, durability,
            and affordability.
          </p>

          <div className="about-stats">
            <div>
              <h3>200+</h3>
              <span>Projects Completed</span>
            </div>

            <div>
              <h3>5+</h3>
              <span>Years Experience</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Customer Satisfaction</span>
            </div>
          </div>

          <button
            className="about-btn"
            onClick={() =>
              window.open(
                "https://wa.me/918220444463?text=Hi, I would like to know more about Maruthi PVC Interiors"
              )
            }
          >
            Get Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;