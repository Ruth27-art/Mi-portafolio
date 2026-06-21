import React from 'react';

const About: React.FC = () => {
  return (
    <div className="window active" id="window-sobremi">
      <h2 className="window-title"><i className="fas fa-user"></i> Sobre Mí</h2>
      <div className="about-content">
        <div className="about-card">
          <p>
            ¡Hola! Soy Ruth, estudiante de Ciberseguridad en mi cuarto semestre en SENATI.
            Me apasiona el mundo de la tecnología, la protección de datos y la seguridad informática.
            Actualmente estoy en constante formación, buscando aplicar mis conocimientos teóricos en escenarios prácticos.
          </p>
          <p>
            Mi objetivo es convertirme en una profesional capaz de identificar vulnerabilidades, 
            proponer soluciones efectivas y garantizar la integridad de la información en entornos digitales.
          </p>
        </div>
        
        <div className="about-education">
          <h3 style={{ marginBottom: '15px', color: 'var(--primary-light)' }}><i className="fas fa-graduation-cap"></i> Educación</h3>
          <div style={{ padding: '20px', borderLeft: '4px solid var(--primary)', background: 'var(--bg-card)', borderRadius: '0 10px 10px 0' }}>
            <h4 style={{ color: 'var(--text)', fontSize: '1.1rem' }}>Ciberseguridad</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '10px' }}>SENATI | Arequipa</p>
            <p style={{ color: 'var(--text-light)' }}>Actualmente cursando el 4º Semestre.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
