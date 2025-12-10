import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AccessCodePage } from './pages/AccessCodePage';
import { ResourcesPage } from './pages/ResourcesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResourcesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

