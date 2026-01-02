export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-title">
          <div className="hero-eyebrow">Ingeniería comercial aplicada</div>
          <h1>Lic. Ramón Daniel Rivera Ayala</h1>
          <p className="hero-subtitle">
            Vendedor técnico de camiones con enfoque en datos y operación.
          </p>
          <p className="hero-meta">
            Asesoría B2B · Arquitectura de flotillas · Optimización de TCO y
            productividad.
          </p>
          <div className="hero-badges">
            <span className="chip">Análisis de ruta</span>
            <span className="chip">Comparativo técnico</span>
            <span className="chip">Entrega + postventa</span>
          </div>
          <div className="hero-actions">
            <a className="btn" href="tel:+524775805988">
              Llamar ahora
            </a>
            <a className="btn whatsapp" href="https://wa.me/524775805988">
              WhatsApp
            </a>
            <a
              className="btn secondary"
              href="mailto:daniel.rivera@elambajio.com"
            >
              Agendar por correo
            </a>
          </div>
        </div>
        <div className="hero-card">
          <img
            className="photo"
            src="/ramon-daniel.jpg"
            alt="Ramón Daniel Rivera Ayala"
          />
          <div className="hero-metrics">
            <div>
              <span className="metric-label">Cobertura</span>
              <span className="metric-value">Bajío · Centro</span>
            </div>
            <div>
              <span className="metric-label">Enfoque</span>
              <span className="metric-value">B2B · Flotillas</span>
            </div>
            <div>
              <span className="metric-label">Atención</span>
              <span className="metric-value">Diagnóstico ágil</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section highlight">
        <div className="section-header">Perfil técnico-comercial</div>
        <div className="highlight-grid">
          <div className="highlight-card">
            <h3>Venta consultiva</h3>
            <p>
              Traduzco necesidades operativas en especificaciones claras,
              comparables y defendibles para comités de compra.
            </p>
          </div>
          <div className="highlight-card">
            <h3>UX para logística</h3>
            <p>
              Presento propuestas visuales y fáciles de leer para acelerar
              decisiones y evitar fricción en el proceso.
            </p>
          </div>
          <div className="highlight-card">
            <h3>Ingeniería aplicada</h3>
            <p>
              Comparo configuraciones con foco en carga útil, rendimiento y
              mantenimiento preventivo.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          Contacto directo <span className="tag">Disponible</span>
        </div>
        <div className="contact-grid">
          <div className="contact-item">
            <span className="label">Teléfono</span>
            <a href="tel:+524775805988">+52 477 580 5988</a>
          </div>
          <div className="contact-item">
            <span className="label">WhatsApp</span>
            <a href="https://wa.me/524775805988">Mensaje directo</a>
          </div>
          <div className="contact-item">
            <span className="label">Threema</span>
            <a href="threema://add?id=2WD68EAY">2WD68EAY</a>
          </div>
          <div className="contact-item">
            <span className="label">WeChat</span>
            <a href="weixin://dl/chat?username=asesorcamionero">
              asesorcamionero
            </a>
          </div>
          <div className="contact-item">
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
        <p className="note">
          Respondo en horario comercial y puedo coordinar visitas o llamadas de
          seguimiento.
        </p>
      </section>

      <section className="section">
        <div className="section-header">Ruta de trabajo</div>
        <ol className="timeline">
          <li>
            <span className="timeline-step">01</span>
            <div>
              <h3>Brief operativo</h3>
              <p>
                Analizamos carga, rutas, horarios y retos actuales para
                establecer un benchmark técnico.
              </p>
            </div>
          </li>
          <li>
            <span className="timeline-step">02</span>
            <div>
              <h3>Propuesta comparativa</h3>
              <p>
                Presento alternativas con datos claros para asegurar decisiones
                informadas y rápidas.
              </p>
            </div>
          </li>
          <li>
            <span className="timeline-step">03</span>
            <div>
              <h3>Cierre y acompañamiento</h3>
              <p>
                Coordino entrega, capacitación y seguimiento postventa como
                parte del plan de rendimiento.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="section">
        <div className="section-header">Redes profesionales</div>
        <div className="button-group">
          <a
            href="https://www.linkedin.com/in/ramondanielriveraayala/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Tuconsultor"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-header">Música favorita</div>
        <div className="button-group">
          <a
            href="https://open.spotify.com/track/5t8yddZze4jLTAoTzDRFtC?si=piAMinzfSKmkWuXJzekLdw"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            Escuchar en Spotify
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-header">Documentos</div>
        <div className="button-group">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/mi-nfc-hub.appspot.com/o/resume.pdf?alt=media&token=..."
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Descargar CV
          </a>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/mi-nfc-hub.appspot.com/o/portfolio.pdf?alt=media&token=..."
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            Ver portafolio
          </a>
          <a
            href="/ramon-daniel-rivera.vcf"
            className="btn secondary"
            download
          >
            Guardar contacto
          </a>
        </div>
      </section>
    </div>
  );
}
