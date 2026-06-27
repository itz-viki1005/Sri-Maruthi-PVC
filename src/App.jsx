import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Programs from "./components/Programs";
// import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Form from "./components/Form";
// import ProgramDetails from "./pages/ProgramDetails";

function Home() {
  return (
    <>
     <Form />
      <Hero />
      <About />
      {/* <Programs /> */}
      <Services/>
      
      <Gallery/>
      <WhyChooseUs />
      {/* <Pricing />  */}
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/program/:title" element={<ProgramDetails />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;