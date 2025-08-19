import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ALLRoutes from './routes/router'
import store from './core/redux/store'
import { base_path } from './environment'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-datepicker/src/stylesheets/datepicker.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/iconsax.css'
import './assets/css/feather.css'

// Conditional imports based on route
if (window.location.pathname.includes("admin")) {
  // Admin-specific styles
  import('./assets/admin/assets/css/feathericon.min.css');
  import('./assets/admin/assets/scss/main.scss');
}else if (window.location.pathname.includes("pharmacyadmin")) {
  import("./assets/pharmacyadmin/assets/css/custom.css");
  import("./assets/pharmacyadmin/assets/scss/main.scss");
} else {
  // Client-specific styles
  import('./assets/scss/main.scss');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={base_path}>
        <ALLRoutes />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
