import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2>Sree Maruthi PVC Interiors</h2>

        <p>
          Transforming homes with premium PVC interiors, modular kitchens,
          wardrobes, TV units, false ceilings, and customized interior
          solutions.
        </p>

        <p>© {new Date().getFullYear()} Sree Maruthi PVC Interiors. All Rights Reserved.</p>

        <div className="developer">
          <span>Website Designed & Developed by </span>
          <strong>Vignesh</strong>
          <br />
          <a href="mailto:itz.viki1005@gmail.com">
            itz.viki1005@gmail.com
          </a>
          <span> | </span>
          <a href="tel:+919025742205">
            +91 90257 42205
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;