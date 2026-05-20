import React from 'react'
import { ROADMAP } from '../data/data'

const statusLabel = { active: 'In Progress', next: 'Up Next', future: 'Future' }

export default function LearningPath() {
  return (
    <div id="certifications" className="sw reveal">
      <p className="eyebrow">// 04</p>
      <h2 className="sh">Learning Path</h2>
      <div className="rm-grid">
        {ROADMAP.map((r, i) => {
          const done = r.items.filter(it => it.done).length
          const pct  = Math.round((done / r.items.length) * 100)
          const isLast = i === ROADMAP.length - 1
          const chevronActive = r.status === 'active'

          return (
            <React.Fragment key={r.phase}>
              <div className={`rm-card ${r.status}`}>
                <div className="rm-phase-row">
                  <span className="rm-phase-badge">Phase {r.phase}</span>
                  <span className="rm-status">{statusLabel[r.status]}</span>
                </div>
                <div className="rm-head">
                  <div className="rm-icon">{r.icon}</div>
                  <span className="rm-title">{r.title}</span>
                </div>
                <p className="rm-desc">{r.desc}</p>
                <div className="rm-items">
                  {r.items.map(it => (
                    <div className="rm-item" key={it.label}>
                      <div className={`rm-check ${it.done ? 'done' : 'todo'}`}>
                        {it.done && (
                          <svg viewBox="0 0 8 8"><polyline points="1,4 3,6.5 7,1.5" /></svg>
                        )}
                      </div>
                      <span className={`rm-item-lbl ${it.done ? 'done' : ''}`}>{it.label}</span>
                    </div>
                  ))}
                </div>
                <div className="rm-progress">
                  <div className="rm-progress-head">
                    <span className="rm-plbl">Progress</span>
                    <span className="rm-ppct">{pct}%</span>
                  </div>
                  <div className="rm-bar">
                    <div className="rm-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                {r.status === 'active' && (
                  <div className="rm-here">
                    <div className="rm-here-dot" />
                    You are here
                  </div>
                )}
              </div>

              {!isLast && (
                <div className={`rm-chevron ${chevronActive ? 'active' : ''}`} key={`chev-${i}`}>
                  <div className="rm-chevron-inner">
                    <div className="rm-chevron-line" />
                    <div className="rm-chevron-arrow">
                      <svg viewBox="0 0 11 11"><polyline points="3,1.5 7.5,5.5 3,9.5" /></svg>
                    </div>
                    <div className="rm-chevron-line" />
                  </div>
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}