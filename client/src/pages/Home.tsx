export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-title">
          <div className="name-wrapper">
            <h1>Lic. Ramón Daniel Rivera Ayala</h1>
            <div className="glow-effect"></div>
          </div>
          <p className="hero-subtitle">Vendedor Profesional</p>
          <p className="hero-meta">
            Asesoría comercial B2B · Soluciones para logística y flotillas
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="tel:+524775805988">
              <span className="btn-icon">📞</span>
              Llamar ahora
            </a>
            <a className="btn whatsapp" href="https://wa.me/524775805988">
              <span className="btn-icon">💬</span>
              WhatsApp
            </a>
            <a
              className="btn secondary"
              href="mailto:daniel.rivera@elambajio.com"
            >
              <span className="btn-icon">✉️</span>
              Agendar por correo
            </a>
          </div>
        </div>
        <div className="photo-wrapper">
          <div className="photo-ring"></div>
          <div className="photo-ring delay"></div>
          <img
            className="photo"
            src="/im.png"
            alt="Ramón Daniel Rivera Ayala"
          />
          <div className="status-indicator">
            <span className="pulse-dot"></span>
            <span className="status-text">Disponible</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="header-icon">📇</span>
          Contacto directo
          <span className="tag available">En línea</span>
        </div>
        <div className="contact-grid">
          <a href="tel:+524775805988" className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <span className="label">Teléfono</span>
              <span className="value">+52 477 580 5988</span>
            </div>
          </a>
          <a href="https://wa.me/524775805988" className="contact-item whatsapp">
            <span className="contact-icon">💬</span>
            <div>
              <span className="label">WhatsApp</span>
              <span className="value">Mensaje directo</span>
            </div>
          </a>
          <a href="threema://add?id=2WD68EAY" className="contact-item">
            <span className="contact-icon">🔒</span>
            <div>
              <span className="label">Threema</span>
              <span className="value">2WD68EAY</span>
            </div>
          </a>
          <a href="weixin://dl/chat?username=asesorcamionero" className="contact-item">
            <span className="contact-icon">💚</span>
            <div>
              <span className="label">WeChat</span>
              <span className="value">asesorcamionero</span>
            </div>
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
          Respondo en horario comercial y puedo coordinar visitas o llamadas de seguimiento.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="header-icon">🌐</span>
          Redes profesionales
        </div>
        <div className="button-group">
          <a
            href="https://www.linkedin.com/in/ramondanielriveraayala/"
            target="_blank"
            rel="noreferrer"
            className="btn linkedin"
          >
            <span className="btn-icon">💼</span>
            LinkedIn
          </a>
          <a
            href="https://github.com/Tuconsultor"
            target="_blank"
            rel="noreferrer"
            className="btn github"
          >
            <span className="btn-icon">🐙</span>
            GitHub
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="header-icon">🎵</span>
          Música favorita
        </div>
        <div className="button-group">
          <a
            href="https://open.spotify.com/track/5t8yddZze4jLTAoTzDRFtC?si=piAMinzfSKmkWuXJzekLdw"
            target="_blank"
            rel="noreferrer"
            className="btn spotify"
          >
            <span className="btn-icon">🎧</span>
            Escuchar en Spotify
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="header-icon">📄</span>
          Documentos
        </div>
        <div className="button-group">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/mi-nfc-hub.appspot.com/o/resume.pdf?alt=media&token=..."
            target="_blank"
            rel="noreferrer"
            className="btn document"
          >
            <span className="btn-icon">📋</span>
            Descargar CV
          </a>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/mi-nfc-hub.appspot.com/o/portfolio.pdf?alt=media&token=..."
            target="_blank"
            rel="noreferrer"
            className="btn document"
          >
            <span className="btn-icon">📁</span>
            Ver portafolio
          </a>
          <a
            href="/ramon-daniel-rivera.vcf"
            className="btn vcard"
            download
          >
            <span className="btn-icon">👤</span>
            Guardar contacto
          </a>
        </div>
      </section>
    </div>
  );
}
