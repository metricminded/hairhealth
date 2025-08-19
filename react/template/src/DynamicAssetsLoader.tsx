// DynamicAssetsLoader.tsx
import { useEffect } from 'react';

const DynamicAssetsLoader = () => {
  useEffect(() => {
    const path = window.location.pathname;

    const loadStyle = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };


    if (path.includes('pharmacyadmin')) {
      loadStyle('/pharmacyadmin/assets/scss/main.scss');
    } else if (path.includes('admin')) {
      loadStyle('/admin/assets/scss/main.scss');
    } else {
      loadStyle('/assets/sass/main.scss');
      loadStyle('/assets/css/customstyleclient.css');
    }

    // Optionally, cleanup dynamically injected scripts or styles here

  }, []);

  return null;
};

export default DynamicAssetsLoader;
