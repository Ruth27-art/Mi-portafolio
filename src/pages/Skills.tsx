import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="window active" id="window-habilidades">
      <h2 className="window-title"><i className="fas fa-code"></i> Habilidades</h2>
      <div className="skills-wrapper">
        <div className="skill-group">
          <div className="skill-group-label"><i className="fas fa-shield-alt"></i> Ciberseguridad</div>
          <div className="skill-tags-container">
            <span className="skill-tag">Análisis de Redes</span>
            <span className="skill-tag">Linux / Unix</span>
            <span className="skill-tag">Conceptos de Hardware</span>
            <span className="skill-tag">IoT Basics</span>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-group-label"><i className="fas fa-tools"></i> Herramientas</div>
          <div className="skill-tags-container">
            <span className="skill-tag">Cisco Packet Tracer</span>
            <span className="skill-tag">Wireshark</span>
            <span className="skill-tag">Red Hat (Básico)</span>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-group-label"><i className="fas fa-laptop-code"></i> Conocimientos Generales</div>
          <div className="skill-tags-container">
            <span className="skill-tag">Soporte Técnico</span>
            <span className="skill-tag">Data Science (Introducción)</span>
            <span className="skill-tag">Manejo de Dispositivos Móviles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
