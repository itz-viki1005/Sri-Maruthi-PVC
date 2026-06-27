import "./Services.css";
import { useState } from "react";
import Form from "./Form"; // adjust the path if needed

import image1 from "../assets/wardrobe4.jpeg";
import image2 from "../assets/Kitchen.jpg";
import image3 from "../assets/Bathroom.jpg";
import image4 from "../assets/wardrobe1.jpeg";

const services = [
  {
    title: "TV Units",
    desc: "Modern PVC TV units with elegant storage and premium finish.",
    img: image1,
  },
  {
    title: "Modular Kitchen",
    desc: "Stylish modular kitchens designed for comfort and functionality.",
    img: image2,
  },
  {
    title: "Bathroom Doors",
    desc: "100% waterproof PVC bathroom doors with modern designs.",
    img: image3,
  },
  {
    title: "Modular Wardrobes",
    desc: "Premium wardrobes with smart storage and luxurious finishes.",
    img: image4,
  },
];

function Services() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && <Form onClose={() => setShowForm(false)} />}

      <section id="services" className="services">
        <h2>Our Services</h2>

        <div className="service-container">
          {services.map((service, i) => (
            <div
              className="service-card"
              key={i}
              style={{
                backgroundImage: `url(${service.img})`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <div className="overlay">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <button onClick={() => setShowForm(true)}>
                  Enquire →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;