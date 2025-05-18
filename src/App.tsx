// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProgramsPage from './pages/Programs';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';

// ... any other imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* You might add specific program detail routes here later, e.g.
        <Route path="/programs/academics-detail" element={<AcademicDetailPage />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
