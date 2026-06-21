import React from 'react';

interface ContactProps {
  showToast: (message: string) => void;
}

const Contact: React.FC<ContactProps> = ({ showToast }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('¡Mensaje enviado correctamente!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="window active" id="window-contacto">
      <h2 className="window-title"><i className="fas fa-envelope"></i> Contacto</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <div className="info-label">Teléfono</div>
              <div className="info-value">945732854</div>
            </div>
          </div>
          <div className="contact-info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <div className="info-label">Email</div>
              <div className="info-value">ruthcaceresyareta@gmail.com</div>
            </div>
          </div>
          <div className="contact-info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <div className="info-label">Ubicación</div>
              <div className="info-value">Arequipa - La Joya</div>
            </div>
          </div>
        </div>
        <div className="contact-info-card">
          <h3 style={{ fontFamily: 'var(--font-primary)', color: 'var(--text)', marginBottom: '15px' }}>Redes Profesionales</h3>
          <a href="#" className="contact-item" onClick={(e) => { e.preventDefault(); showToast('Redirigiendo a LinkedIn...'); }}>
            <i className="fab fa-linkedin" style={{ fontSize: '1.5rem', color: '#0a66c2' }}></i>
            <span>Perfil de LinkedIn</span>
          </a>
          <a href="#" className="contact-item" onClick={(e) => { e.preventDefault(); showToast('Redirigiendo a GitHub...'); }}>
            <i className="fab fa-github" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
            <span>Perfil de GitHub</span>
          </a>
          <form style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }} onSubmit={handleSubmit}>
            <input type="text" placeholder="Tu Nombre" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: 'white' }} />
            <textarea placeholder="Mensaje..." rows={3} required style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: 'white', resize: 'vertical' }}></textarea>
            <button type="submit" className="btn-action btn-action-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <i className="fas fa-paper-plane"></i> Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
