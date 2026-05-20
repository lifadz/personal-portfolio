import { useState } from 'react'
import { ME } from '../data/data'

export default function Hero() {
  const [imgFail, setImgFail] = useState(false)

  return (
    <div id="hero-wrap">
      <div>
        <div className="ha ha-status">
          <div className="hero-status">
            <div className="status-dot" />
            Available now · Bengkulu / Remote
          </div>
        </div>

        <div className="ha ha-name">
          <h1 className="hero-name">
            <span className="hero-name-accent">Fadzli</span>{' Muhammad'}
          </h1>
        </div>

        <div className="ha ha-role">
          <p className="hero-role" style={{ fontSize: '1.05rem', marginBottom: '20px', lineHeight: '1.5' }}>
            <b>IT Support &amp; Networking</b><br />
            <span style={{ fontWeight: 400, color: 'var(--text-2)' }}>
              Focused on system and network troubleshooting while building toward network security.
            </span>
          </p>
        </div>

        <div className="ha ha-pills">
          <div className="hero-pills">
            <span className="pill hi">TCP/IP &amp; Subnetting</span>
            <span className="pill hi">VLAN / ACL</span>
            <span className="pill hi">Linux CLI</span>
            <span className="pill hi">Cisco Packet Tracer</span>
            <span className="pill">Network Security →</span>
          </div>
        </div>

        <div className="ha ha-cta">
          <div className="cta-row">
            <a href={ME.resume} download className="btn-primary">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M6.5 1v7.5M4 6l2.5 2.5L9 6M1.5 11.5h10" />
              </svg>
              Download Resume
            </a>
            <a href="#projects" className="btn-ghost">See the Work →</a>
          </div>
        </div>

        <div className="ha ha-stats">
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">20+</div>
              <div className="stat-label">Students guided</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">1 yr</div>
              <div className="stat-label">Lab experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">3</div>
              <div className="stat-label">GitHub projects</div>
            </div>
          </div>
        </div>
      </div>

      <div className="photo-col ha ha-photo">
        <div style={{ position: 'relative', width: '230px' }}>
          <div className="photo-frame">
            {imgFail ? (
              <div className="photo-ph">
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="23" cy="17" r="8.5" />
                  <path d="M5.5 41c0-9.66 7.82-17.5 17.5-17.5S40.5 31.34 40.5 41" />
                </svg>
              </div>
            ) : (
              <img src="/assets/profile.png" alt={ME.name} onError={() => setImgFail(true)} />
            )}
          </div>
          <div className="photo-badge">Available now</div>
        </div>
      </div>
    </div>
  )
}