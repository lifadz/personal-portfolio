import { SKILLS, LVL } from '../data/data'

export default function Skills() {
  return (
    <div id="skills" className="sw reveal">
      <p className="eyebrow">// 02</p>
      <h2 className="sh">Technical Skills</h2>
      <div className="legend-row">
        {Object.entries(LVL).map(([k, { label, cls }]) => (
          <span key={k} className={`lbadge ${cls}`}>{label}</span>
        ))}
      </div>
      <div className="skills-grid">
        {SKILLS.map(g => (
          <div className="sg-card" key={g.group}>
            <div className="sg-head">
              <div className="sg-icon">{g.icon}</div>
              <span className="sg-name">{g.group}</span>
            </div>
            {g.items.map(s => {
              const m = LVL[s.lvl] || LVL.basic
              return (
                <div className="sk-row" key={s.name}>
                  <span className="sk-name">{s.name}</span>
                  <span className={`lbadge ${m.cls}`}>{m.label}</span>
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <div className="skills-cta">
        <a href="#projects">→ See these skills in practice</a>
      </div>
    </div>
  )
}