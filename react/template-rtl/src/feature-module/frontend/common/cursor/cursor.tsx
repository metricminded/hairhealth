import { useEffect, useState } from 'react';

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Find elements with the specified classes
    const cursorInner = document.querySelector('.cursor-inner') as HTMLElement;
    const cursorOuter = document.querySelector('.cursor-outer') as HTMLElement;

    // Check if elements exist before proceeding
    if (!cursorInner || !cursorOuter) {
      return;
    }

    let isVisible = false;

    const handleMouseMove = (event: MouseEvent) => {
      if (!isVisible) {
        cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
      cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Make cursors visible
    cursorInner.style.visibility = 'visible';
    cursorOuter.style.visibility = 'visible';

    // Handle anchor hover effects
    const anchors = document.getElementsByTagName('a');
    Array.from(anchors).forEach((anchor) => {
      anchor.addEventListener('mouseover', () => {
        setIsHovered(true);
      });
      anchor.addEventListener('mouseout', () => {
        setIsHovered(false);
      });
    });

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      Array.from(anchors).forEach((anchor) => {
        anchor.removeEventListener('mouseover', () => setIsHovered(true));
        anchor.removeEventListener('mouseout', () => setIsHovered(false));
      });
    };
  }, []); // Remove isHovered dependency to prevent infinite re-renders

  return (
    <>
      <div
        className={`mouse-cursor cursor-outer ${
          isHovered ? 'cursor-hover' : ''
        }`}
      ></div>
      <div className={`mouse-cursor cursor-inner ${
          isHovered ? 'cursor-hover' : ''
        }`}></div>
    </>
  );
};

export default Cursor;
