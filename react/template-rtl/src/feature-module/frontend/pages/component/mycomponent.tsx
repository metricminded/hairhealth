import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { IMG01 } from "./img";

const MyComponent: React.FC = () => {
  const photos = [
    { src: IMG01, alt: "Feature" },
    { src: IMG01, alt: "Feature" },
    { src: IMG01, alt: "Feature" },
    { src: IMG01, alt: "Feature" },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  // Removed closeLightbox function as it's no longer needed with yet-another-react-lightbox

  return (
    <div>
      <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
        {photos.map((photo, index) => (
          <div key={index} onClick={() => openLightbox(index)} style={{ cursor: 'pointer' }}>
            <img 
              src={photo.src} 
              alt={photo.alt} 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={viewerIsOpen}
        close={() => setViewerIsOpen(false)}
        index={currentImage}
        slides={photos.map((photo) => ({ src: photo.src }))}
      />
    </div>
  );
};

export default MyComponent;
