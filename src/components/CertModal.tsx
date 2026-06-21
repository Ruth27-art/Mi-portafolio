import React from 'react';

interface CertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
}

const CertModal: React.FC<CertModalProps> = ({ isOpen, onClose, title, image }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2><i className="fas fa-certificate"></i> <span>{title}</span></h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {image ? (
            <img src={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<div class="placeholder-image"><i class="fas fa-image"></i><p>Imagen no disponible</p></div>';
            }}/>
          ) : (
            <div className="placeholder-image">
              <i className="fas fa-image"></i>
              <p>Imagen no disponible</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertModal;
