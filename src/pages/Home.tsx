import React from 'react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  return (
    <div className="window active" id="window-home">
      <div className="home-content">
        <div className="home-header">
          <div className="home-info">
            <h1>Ruth <span>Cáceres Yreta</span></h1>
            <div className="home-subtitle">
              <i className="fas fa-user-graduate"></i> Estudiante de Ciberseguridad · 4º Semestre
              <span className="home-badge"><i className="fas fa-school"></i> SENATI</span>
            </div>
            <div className="home-contact">
              <span><i className="fas fa-phone-alt"></i> 945732854</span>
              <span><i className="fas fa-envelope"></i> <a href="mailto:ruthcaceresyareta@gmail.com">ruthcaceresyareta@gmail.com</a></span>
              <span><i className="fas fa-map-pin"></i> Arequipa - La Joya</span>
            </div>
          </div>
          <div className="home-avatar">
            <span>Falta foto</span>
          </div>
        </div>

        <div className="home-actions">
          <button className="btn-action btn-action-primary" onClick={() => setActiveTab('sobremi')}>
            <i className="fas fa-user"></i> Conóceme
          </button>
          <button className="btn-action btn-action-secondary" onClick={() => setActiveTab('contacto')}>
            <i className="fas fa-envelope"></i> Contáctame
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
