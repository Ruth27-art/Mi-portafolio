import React, { useState, useEffect } from 'react';
import './assets/css/style.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import CertModal from './components/CertModal';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [theme, setTheme] = useState<string>('dark');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<{ title: string, image: string }>({ title: '', image: '' });
  const [toast, setToast] = useState<{ show: boolean, message: string }>({ show: false, message: '' });

  // Handle Theme
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const openModal = (title: string, image: string) => {
    setModalData({ title, image });
    setModalOpen(true);
  };

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000);
  };

  return (
    <>
      <div className="app-container">
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />

        <div className="windows-container">
          {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
          {activeTab === 'sobremi' && <About />}
          {activeTab === 'certificados' && <Certificates openModal={openModal} />}
          {activeTab === 'habilidades' && <Skills />}
          {activeTab === 'contacto' && <Contact showToast={showToast} />}
        </div>
      </div>

      <CertModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={modalData.title} 
        image={modalData.image} 
      />

      {/* Toast Notification */}
      <div className={`toast ${toast.show ? 'show' : ''}`} id="toast">
        <i className="fas fa-info-circle"></i> <span>{toast.message}</span>
      </div>
    </>
  );
};

export default App;
