import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from "../../../assets/images/feature-01.jpg";
import img2 from "../../../assets/images/feature-02.jpg";
import img3 from "../../../assets/images/feature-03.jpg";
import img4 from "../../../assets/images/feature-04.jpg";
import { Link } from "react-router-dom";

const MyComponent = () => {
  const images = [img1, img2, img3, img4];
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      <ul className="clinic-gallery">
        {images.map((image, index) => (
          <li key={index}>
            <Link to="#" onClick={() => openLightbox(index)} style={{ cursor: 'pointer' }}>
              <img src={image} alt={`Feature ${index + 1}`} />
            </Link>
          </li>
        ))}
      </ul>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={images.map((image) => ({ src: image }))}
      />
    </div>
  );
};

export default MyComponent;
