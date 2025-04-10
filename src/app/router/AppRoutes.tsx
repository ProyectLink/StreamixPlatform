import {  Route, Routes } from "react-router-dom";

import { LoadingScreen } from "../../components/organisms/LoadingScreen/LoadingScreen";
import { HomePage } from "@features/home-page/HomePage";
export const AppRoutes: React.FC = () => {
  return (

      <Routes>
          <Route path="/*" element={<HomePage />} />

        {/* Ruta para una página de error 404 */}
        <Route path="/*" element={<LoadingScreen />} />
        <Route path="login" element={<LoadingScreen />} />
      </Routes>
  
  );
};
