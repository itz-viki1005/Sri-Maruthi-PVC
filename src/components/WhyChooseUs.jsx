import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: "🏆",
      title: "Quality Workmanship",
      desc: "We deliver premium PVC interior solutions with exceptional craftsmanship and attention to detail.",
    },
    {
      icon: "🎨",
      title: "Modern Designs",
      desc: "Creative and elegant designs tailored to your home, office, or commercial space.",
    },
    {
      icon: "⏱️",
      title: "On-Time Delivery",
      desc: "We complete every project within the promised timeline without compromising quality.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      desc: "High-quality PVC interiors at competitive prices that fit your budget.",
    },
    {
      icon: "🛠️",
      title: "Customized Solutions",
      desc: "Every project is designed according to your space, style, and requirements.",
    },
    {
      icon: "🤝",
      title: "Customer Satisfaction",
      desc: "Your satisfaction is our priority from consultation to project completion.",
    },
  ];

  return (
    <section className="why-us" id="why-us">
      <div className="why-header">
        <h2>
          Why <span>Choose Us</span>
        </h2>

        <p>
          We transform ordinary spaces into beautiful interiors with
          innovative PVC solutions, premium materials, and expert
          craftsmanship.
        </p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;