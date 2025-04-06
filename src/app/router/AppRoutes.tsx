
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../features/HomePage/HomePage';



export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      
        {/* Ruta para una página de error 404 */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
