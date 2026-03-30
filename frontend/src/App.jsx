import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Services from './pages/Services';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Legal from './pages/Legal';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import AdminRoute from './components/AdminRoute';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import HireModal from './components/HireModal';

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-white font-body selection:bg-blue-500/30 selection:text-white">
      {!isAdminRoute && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/services" element={<Services />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/legal/:type" element={<Legal />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingActions />}
      {!isAdminRoute && <HireModal />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
