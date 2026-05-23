export default function Home() {
  return (
    <div className="page">
      {/* Hero Section - Premium Visual Impact */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Disponible para proyectos</span>
          </div>
          
          <div className="name-wrapper">
            <h1 className="gradient-text">
              Lic. Ramón Daniel<br />
              <span className="highlight">Rivera Ayala</span>
            </h1>
            <div className="glow-effect"></div>
          </div>
          
          <p className="hero-subtitle">Vendedor Profesional</p>
          <p className="hero-meta">
            Asesoría comercial B2B · Soluciones estratégicas para logística y flotillas
          </p>
          
          <div className="hero-actions">
            <a className="btn primary glow" href="tel:+524775805988">
              <span className="btn-icon">📞</span>
              <span>Llamar ahora</span>
              <span className="btn-shine"></span>
            </a>
            <a className="btn whatsapp pulse" href="https://wa.me/524775805988">
              <span className="btn-icon">💬</span>
              <span>WhatsApp</span>
            </a>
            <a
              className="btn secondary"
              href="mailto:daniel.rivera@elambajio.com"
            >
              <span className="btn-icon">✉️</span>
              <span>Agendar por correo</span>
            </a>
          </div>
        </div>
        
        <div className="photo-container">
          <div className="photo-ring ring-1"></div>
          <div className="photo-ring ring-2"></div>
          <div className="photo-ring ring-3"></div>
          <div className="photo-glow"></div>
          <img
            className="photo"
            src="/im.png"
            alt="Lic. Ramón Daniel Rivera Ayala"
            loading="eager"
          />
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span>En línea</span>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced Grid */}
      <section className="section">
        <div className="section-header">
          <span className="header-icon">📇</span>
          <span>Contacto directo</span>
          <span className="tag available">
            <span className="tag-dot"></span>
            En línea
          </span>
        </div>
        <div className="contact-grid">
          <a href="tel:+524775805988" className="contact-item card-hover">
            <span className="contact-icon phone">📞</span>
            <div>
              <span className="label">Teléfono</span>
              <span className="value">+52 477 580 5988</span>
            </div>
            <span className="arrow-icon">→</span>
          </a>
          <a href="https://wa.me/524775805988" className="contact-item card-hover whatsapp">
            <span className="contact-icon">💬</span>
            <div>
              <span className="label">WhatsApp</span>
              <span className="value">Mensaje directo</span>
            </div>
            <span className="arrow-icon">→</span>
          </a>
          <a href="threema://add?id=2WD68EAY" className="contact-item card-hover">
            <span className="contact-icon secure">🔒</span>
            <div>
              <span className="label">Threema</span>
              <span className="value mono">2WD68EAY</span>
            </div>
            <span className="arrow-icon">→</span>
          </a>
          <a href="weixin://dl/chat?username=asesorcamionero" className="contact-item card-hover">
            <span className="contact-icon wechat">💚</span>
            <div>
              <span className="label">WeChat</span>
              <span className="value">@asesorcamionero</span>
            </div>
            <span className="arrow-icon">→</span>
          </a>
          <div className="contact-item emails">
            <span className="contact-icon">✉️</span>
            <div>
              <span className="label">Emails</span>
              <ul className="list">
                <li>
                  <a href="mailto:daniel.rivera@elambajio.com">
                    daniel.rivera@elambajio.com
                  </a>
                </li>
                <li>
                  <a href="mailto:ramondanielrivera@gmail.com">
                    ramondanielrivera@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="note">
          <span className="note-icon">⏰</span>
          <span>Respondo en horario comercial y puedo coordinar visitas o llamadas de seguimiento.</span>
        </p>
      </section>

      {/* Professional Networks Section */}
      <section className="section">
        <div className="section-header">
          <span className="header-icon">🌐</span>
          <span>Redes profesionales</span>
        </div>
        <div className="button-group">
          <a
            href="https://www.linkedin.com/in/ramondanielriveraayala/"
            target="_blank"
            rel="noreferrer"
            className="btn linkedin card-hover"
          >
            <span className="btn-icon">💼</span>
            <span>LinkedIn</span>
            <span className="btn-arrow">↗</span>
          </a>
          <a
            href="https://github.com/Tuconsultor"
            target="_blank"
            rel="noreferrer"
            className="btn github card-hover"
          >
            <span className="btn-icon">🐙</span>
            <span>GitHub</span>
            <span className="btn-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* Music Section */}
      <section className="section">
        <div className="section-header">
          <span className="header-icon">🎵</span>
          <span>Música favorita</span>
        </div>
        <div className="button-group">
          <a
            href="https://open.spotify.com/track/5t8yddZze4jLTAoTzDRFtC?si=piAMinzfSKmkWuXJzekLdw"
            target="_blank"
            rel="noreferrer"
            className="btn spotify card-hover"
          >
            <span className="btn-icon">🎧</span>
            <span>Escuchar en Spotify</span>
            <span className="btn-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* Documents Section */}
      <section className="section">
        <div className="section-header">
          <span className="header-icon">📄</span>
          <span>Documentos</span>
        </div>
        <div className="button-group">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/mi-nfc-hub.appspot.com/o/resume.pdf?alt=media&token=..."
            target="_blank"
            rel="noreferrer"
            className="btn document card-hover"
          >
            <span className="btn-icon">📋</span>
            <span>Descargar CV</span>
            <span className="btn-arrow">↗</span>
          </a>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/mi-nfc-hub.appspot.com/o/portfolio.pdf?alt=media&token=..."
            target="_blank"
            rel="noreferrer"
            className="btn document card-hover"
          >
            <span className="btn-icon">📁</span>
            <span>Ver portafolio</span>
            <span className="btn-arrow">↗</span>
          </a>
          <a
            href="/ramon-daniel-rivera.vcf"
            className="btn vcard card-hover"
            download
          >
            <span className="btn-icon">👤</span>
            <span>Guardar contacto</span>
            <span className="btn-arrow">↓</span>
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Lic. Ramón Daniel Rivera Ayala · Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
