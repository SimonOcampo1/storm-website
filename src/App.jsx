import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Atlas from './pages/Atlas';
import Vortice from './pages/Vortice';
import Telemetria from './pages/Telemetria';
import Archivo from './pages/Archivo';
import { useScrollEffects } from './hooks/useScrollEffects';
import './index.css';

function AppContent() {
  useScrollEffects();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Atlas />} />
        <Route path="/vortice" element={<Vortice />} />
        <Route path="/telemetria" element={<Telemetria />} />
        <Route path="/archivo" element={<Archivo />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
