import { useState } from 'react'
import { PROJECTS, FILTERS, TAG_CLS } from '../data/data'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter))

  return (
    <div id="projects" className="sw alt reveal">
      <p className="eyebrow">// 03</p>
      <h2 className="sh">Projects</h2>
      <div className="filter-bar">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`fb-btn${filter === f ? ' on' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="proj-grid">
        {shown.length === 0 ? (
          <div className="empty-box">No projects tagged "{filter}"</div>
        ) : shown.map((p, i) => (
          <div className="proj-card" key={p.id} style={{ animationDelay: `${i * 55}ms` }}>
            <div className="proj-head">
              <div className="proj-icon">{p.icon}</div>
              <div className="proj-btns">
                {p.github
                  ? <a href={p.github} className="proj-btn" target="_blank" rel="noreferrer">GitHub ↗</a>
                  : <span className="proj-btn na">Private</span>
                }
                {p.demo && <a href={p.demo} className="proj-btn" target="_blank" rel="noreferrer">Demo ↗</a>}
              </div>
            </div>
            <div className="proj-title">{p.title}</div>
            <p className="proj-desc-short">{p.desc}</p>
            <ul className="proj-bullets">
              {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="proj-foot">
              <div className="chip-row">{p.tech.map(t => <span className="chip" key={t}>{t}</span>)}</div>
              <div className="chip-row">{p.tags.map(t => <span className={`tag ${TAG_CLS[t] || ''}`} key={t}>{t}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="proj-section-cta">
        <a href="#contact" className="btn-ghost">Interested in working together? Get in touch →</a>
      </div>
    </div>
  )
}