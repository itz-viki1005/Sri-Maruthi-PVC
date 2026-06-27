import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>
        Contact <span>Us</span>
      </h2>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <p>📍 Location: Sri Maruthi PVC Interiors, Chennai</p>

          <p>📞 Phone: +91 82204 44463</p>

          <p>🕒 Working Hours: 9 AM - 8 PM</p>

          <p>
            🏠 Services: PVC , Wall Panels, TV Units,
            Modular Wardrobes , Modular Kitchen & Interior Design
          </p>

          <button
            className="whatsapp-btn"
            onClick={() =>
              window.open(
                "https://wa.me/918220444463?text=Hi, I need interior design services"
              )
            }
          >
            Get Free Consultation
          </button>
        </div>

        {/* Right Side */}
        <div className="contact-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6013726865635!2d80.09412449999999!3d12.9973289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528bcbd1279c33%3A0x67756d92144199e9!2sSri%20maruthi%20PVC%20Works%2C%20kundrathur!5e0!3m2!1sen!2sin!4v1782572043070!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="Maruthi PVC Interiors"
  ></iframe>
</div>
</div>
    </section>
  );
}

export default Contact;