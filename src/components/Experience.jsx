import { EXP } from '../data/data'

export default function Experience() {
  return (
    <div id="experience" className="sw reveal">
      <p className="eyebrow">// 05</p>
      <h2 className="sh">Experience</h2>
      <div className="tl">
        {EXP.map((e, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-dot" />
            <div className="tl-date">{e.date}</div>
            <div className="tl-title">{e.title}</div>
            <div className="tl-org">{e.org}</div>
            <ul className="tl-ul">
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}