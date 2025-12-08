import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AccessCodePage } from './pages/AccessCodePage';
import { ResourcesPage } from './pages/ResourcesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/access" element={<AccessCodePage />} /> */}
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/" element={<ResourcesPage />} />
        <Route path="*" element={<Navigate to="/resources" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

