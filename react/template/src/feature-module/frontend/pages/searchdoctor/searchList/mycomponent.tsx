import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/zoom.css";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/plugins/download.css";
import { IMG_fe_01, IMG_fe_02, IMG_fe_03, IMG_fe_04 } from "./img";

const MyComponent: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Create slides array for the lightbox with more detailed information
  const slides = [
    { 
      src: IMG_fe_01, 
      alt: "Medical Facility Feature 1",
      title: "State-of-the-art Medical Equipment",
      description: "Our facility is equipped with the latest medical technology"
    },
    { 
      src: IMG_fe_02, 
      alt: "Medical Facility Feature 2",
      title: "Comfortable Patient Rooms",
      description: "Patient comfort is our top priority"
    },
    { 
      src: IMG_fe_03, 
      alt: "Medical Facility Feature 3",
      title: "Professional Medical Staff",
      description: "Experienced healthcare professionals"
    },
    { 
      src: IMG_fe_04, 
      alt: "Medical Facility Feature 4",
      title: "Modern Clinic Design",
      description: "Contemporary and welcoming environment"
    },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const galleryItemStyle = {
    position: 'relative' as const,
    overflow: 'hidden' as const,
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover' as const,
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  const overlayStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  };

  const overlayContentStyle = {
    color: 'white',
    fontSize: '2rem',
  };

  const titleStyle = {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginTop: '0.5rem',
    color: '#333',
  };

  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-4">Medical Facility Gallery</h3>
            <p className="text-muted mb-4">
              Click on any image to view it in full size with zoom and navigation features.
            </p>
            <div className="clinic-gallery">
              <div className="row">
                {slides.map((slide, index) => (
                  <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div 
                      style={galleryItemStyle}
                      onClick={() => openLightbox(index)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                        const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement;
                        if (overlay) overlay.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                        const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement;
                        if (overlay) overlay.style.opacity = '0';
                      }}
                    >
                      <img 
                        src={slide.src} 
                        alt={slide.alt}
                        className="img-fluid rounded"
                        style={imageStyle}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                      <div className="gallery-overlay" style={overlayStyle}>
                        <div style={overlayContentStyle}>
                          <i className="fas fa-search-plus"></i>
                        </div>
                      </div>
                    </div>
                    <div style={titleStyle}>
                      {slide.title}
                    </div>
                    <small className="text-muted">
                      {slide.description}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        index={lightboxIndex}
        slides={slides}
        plugins={[Thumbnails, Zoom, Download]}
        carousel={{
          finite: true,
          preload: 2,
        }}
        thumbnails={{
          width: 120,
          height: 80,
          padding: 4,
          border: 2,
          borderRadius: 4,
          gap: 16,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        render={{
          buttonPrev: slides.length <= 1 ? () => null : undefined,
          buttonNext: slides.length <= 1 ? () => null : undefined,
        }}
      />
    </div>
  );
};

export default MyComponent;
