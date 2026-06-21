import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <i className="fas fa-shield-alt"></i> <span>RUTH</span>.
          </div>
        </div>
        
        <div className="header-right">
          <div className="header-status">
            <div className="status-dot"></div> ACTIVO
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </div>
      </header>

      <nav className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`} 
          onClick={() => setActiveTab('home')}
        >
          <i className="fas fa-home"></i> <span>Inicio</span>
        </button>
        <button 
          className={`nav-tab ${activeTab === 'sobremi' ? 'active' : ''}`} 
          onClick={() => setActiveTab('sobremi')}
        >
          <i className="fas fa-user"></i> <span>Sobre Mí</span>
        </button>
        <button 
          className={`nav-tab ${activeTab === 'certificados' ? 'active' : ''}`} 
          onClick={() => setActiveTab('certificados')}
        >
          <i className="fas fa-certificate"></i> <span>Certificados</span>
        </button>
        <button 
          className={`nav-tab ${activeTab === 'habilidades' ? 'active' : ''}`} 
          onClick={() => setActiveTab('habilidades')}
        >
          <i className="fas fa-code"></i> <span>Habilidades</span>
        </button>
        <button 
          className={`nav-tab ${activeTab === 'contacto' ? 'active' : ''}`} 
          onClick={() => setActiveTab('contacto')}
        >
          <i className="fas fa-envelope"></i> <span>Contacto</span>
        </button>
      </nav>
    </>
  );
};

export default Header;
