import React from 'react';

interface CertificatesProps {
  openModal: (title: string, image: string) => void;
}

const Certificates: React.FC<CertificatesProps> = ({ openModal }) => {
  const certs = [
    { title: 'Fundamentos de Ciberseguridad', image: 'assets/certificados/fundamentos-ciberseguridad.jpg', source: 'Cisco' },
    { title: 'CCNA: Introducción a las redes', image: 'assets/certificados/ccna-introduccion-redes.jpg', source: 'Cisco' },
    { title: 'Conceptos básicos de redes', image: 'assets/certificados/conceptos-basicos-redes.jpg', source: 'Cisco' },
    { title: 'Uso de Computadoras y Dispositivos Móviles', image: 'assets/certificados/uso-computadoras-dispositivos.jpg', source: 'Cisco' },
    { title: 'Introducción al Internet de las Cosas', image: 'assets/certificados/introduccion-iot.jpg', source: 'Cisco' },
    { title: 'Introducción a la Ciencia de Datos', image: 'assets/certificados/introduccion-ciencia-datos.jpg', source: 'Cisco' },
    { title: 'Conciencia Digital', image: 'assets/certificados/conciencia-digital.jpg', source: 'Cisco' },
    { title: 'Conceptos Básicos de Hardware', image: 'assets/certificados/conceptos-basicos-hardware.jpg', source: 'Cisco' },
    { title: 'Certificación Red Hat', image: 'assets/certificados/redhat-certificacion.jpg', source: 'Red Hat' }
  ];

  return (
    <div className="window active" id="window-certificados">
      <h2 className="window-title"><i className="fas fa-certificate"></i> Certificados</h2>
      <div className="cert-list">
        {certs.map((cert, index) => (
          <div key={index} className="cert-item-alargado" onClick={() => openModal(cert.title, cert.image)}>
            <div className="cert-left">
              <i className="fas fa-award"></i>
              <div>
                <div className="cert-name">{cert.title}</div>
                <div className="cert-source"><i className="fas fa-building"></i> {cert.source}</div>
              </div>
            </div>
            <div className="cert-click-hint">Ver certificado <i className="fas fa-arrow-right"></i></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
