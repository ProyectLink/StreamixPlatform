import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../../features/HomePage/HomePage";
import { LoadingScreen } from "../../components/organisms/LoadingScreen/LoadingScreen";
export const AppRoutes: React.FC = () => {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Ruta para una página de error 404 */}
        <Route path="/*" element={<LoadingScreen />} />
        <Route path="login" element={<LoadingScreen />} />
      </Routes>
  
  );
};
