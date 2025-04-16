import {  Route, Routes } from "react-router-dom";

import { LoadingScreen } from "../../components/organisms/LoadingScreen/LoadingScreen";
import { HomePage } from "@features/home-page/HomePage";
import AvatarPages from "@features/avatarPages/AvatarPages";
import { LoginPage } from "@features/auth/LoginPage";
export const AppRoutes: React.FC = () => {
  return (

      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="profile" element={<AvatarPages />} />
        {/* Ruta para una página de error 404 */}
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<LoadingScreen />} />
      </Routes>
  
  );
};
