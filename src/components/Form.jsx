import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    bhk: "",
    requirement: "",
  });



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your WhatsApp number (CountryCode + Number)
    const phone = "918220444463";

    const message = `*New Interior Enquiry*

👤 Name: ${formData.name}
📞 Mobile: ${formData.mobile}
🏠 BHK: ${formData.bhk}

📝 Requirement:
${formData.requirement}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button
  className="close-btn"
  onClick={() => {
    setShowPopup(false);
    onClose();
  }}
>
  ×
</button>

        <h2>Get Free Interior Consultation</h2>
        <p>Fill your details and our designer will contact you.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <select
            name="bhk"
            value={formData.bhk}
            onChange={handleChange}
            required
          >
            <option value="">Select BHK</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>4 BHK</option>
            <option>Villa</option>
          </select>

          <textarea
            name="requirement"
            rows="4"
            placeholder="Tell us your requirement..."
            value={formData.requirement}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;