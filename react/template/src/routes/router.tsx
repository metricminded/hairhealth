
import {  Route, Routes } from "react-router";
import { authRoutes, publicRoutes, adminRoutes, pharmacyAdminRoutes} from "./router.link";
import Feature from "./feature";
import AuthFeature from "./authFeature";
import AdminFeature from "./adminFeature";
import PharmacyAdminFeature from "./pharmacyadminFeature";



const ALLRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Feature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        <Route element={<AuthFeature />}>
          {authRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        <Route element={<AdminFeature />}>
          {adminRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route element={<PharmacyAdminFeature />}>
          {pharmacyAdminRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default ALLRoutes;
