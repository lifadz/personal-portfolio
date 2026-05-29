const facts = [
  { main: 'B.Eng Informatics Engineering, 3.74 / 4.00', sub: 'University of Bengkulu · Jun 2021 – Feb 2026' },
  { main: 'Assistant Lecturer', sub: 'Computer Networks & Operating Systems · Aug 2023 – May 2024' },
  { main: 'Bangkit Academy 2024, Top 1,000 cohort', sub: 'Machine Learning path · Google × GoTo × Tokopedia × Traveloka' },
  { main: 'Freelance Web Developer', sub: 'Client project · 2025' },
]

export default function About() {
  return (
    <div id="about" className="sw alt reveal">
      <p className="eyebrow">// 01</p>
      <h2 className="sh">About Me</h2>
      <div className="about-grid">
        <div className="prose">
          <p>
            IT Support and Networking candidate with <b>hands-on experience in real lab
            environments</b>, backed by practical projects in networking and system troubleshooting.
          </p>
          <p>
            I spent a year as an <b>assistant lecturer</b> in Computer Networks and Operating
            Systems at the University of Bengkulu, guiding students through Cisco Packet Tracer
            and Linux-based labs while troubleshooting issues in real time.
          </p>
          <p>
            Currently building toward <b>network security</b> through continuous hands-on learning
            and practical implementation.
          </p>
        </div>
        <div className="fact-list">
          {facts.map(f => (
            <div className="fact-item" key={f.main}>
              <div className="fact-tick">
                <svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5" /></svg>
              </div>
              <div>
                <div className="fact-main">{f.main}</div>
                <div className="fact-sub">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}