import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  IMG_fe_01,
  IMG_fe_02,
  IMG_fe_03,
  IMG_fe_04,
} from "../../pages/searchdoctor/searchList/img";
import { Link } from "react-router-dom";

const MyComponent = () => {
  const images = [IMG_fe_01, IMG_fe_02, IMG_fe_03, IMG_fe_04];
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
            <Link to="#" onClick={() => openLightbox(index)}>
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
