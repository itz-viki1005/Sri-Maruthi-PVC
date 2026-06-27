import "./Gallery.css";
import { useState } from "react";

import project1 from "../assets/Projects/project1.jpeg";
import project2 from "../assets/Projects/project2.jpeg";
import project3 from "../assets/Projects/project3.jpeg";
import project4 from "../assets/Projects/project4.jpeg";
import project5 from "../assets/Projects/project5.jpeg";
import project6 from "../assets/Projects/project6.jpeg";
import project7 from "../assets/Projects/project7.jpeg";
import project8 from "../assets/Projects/project8.jpeg";
import project9 from "../assets/Projects/project9.jpeg";
import project10 from "../assets/Projects/project10.jpeg";
import project11 from "../assets/Projects/project11.jpeg";
import project12 from "../assets/Projects/project12.jpeg";
import project13 from "../assets/Projects/project13.jpeg";
import project14 from "../assets/Projects/project14.jpeg";




const galleryImages = [
  { img: project1},
  { img: project2,},
  { img: project3, },
  { img: project4,  },
  { img: project5,  },
  { img: project6,  },
  { img: project7,  },
  { img: project8,  },
  { img: project9,  },
  { img: project10,  },
  { img: project11,  },
  { img: project12,  },
  { img: project13,  },
  { img: project14,  },

];

function Gallery() {
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, 8);

  return (
    <section className="gallery" id="gallery">
      <h2>Our Projects</h2>
      <p>Explore our completed PVC interior works</p>

      <div className="gallery-container">
        {visibleImages.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.img} alt={item.title} />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {galleryImages.length > 6 && (
        <div className="show-more-container">
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;