
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Students from './pages/Students';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/students" element={<Students />} />
        <Route path="/achievements" element={<NotFound />} />
        <Route path="/events" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
