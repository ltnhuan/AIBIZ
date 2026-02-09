import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Packages } from './components/Packages';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { ContactSection } from './components/ContactModal';
import { Footer } from './components/Footer';
import { AdminProvider, useAdmin } from './context/AdminContext';
import { Login } from './components/Admin/Login';
import { Dashboard } from './components/Admin/Dashboard';

// Main content wrapper to conditionally render based on route/auth
const MainContent: React.FC = () => {
  const { isAuthenticated } = useAdmin();
  const [view, setView] = useState<'home' | 'admin'>('home');

  // Simple "Router"
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#admin') setView('admin');
      else setView('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on init

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (view === 'admin') {
    if (!isAuthenticated) return <Login />;
    return <Dashboard onExit={() => { window.location.hash = ''; }} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Packages />
        <Process />
        <Pricing />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AdminProvider>
      <MainContent />
    </AdminProvider>
  );
};

export default App;