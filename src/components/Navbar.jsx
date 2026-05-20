import { useState, useEffect } from 'react'

const links = [
  ['about',         'About'],
  ['skills',        'Skills'],
  ['projects',      'Projects'],
  ['certifications','Path'],
  ['experience',    'Experience'],
  ['contact',       'Contact'],
]

export default function Navbar() {
  const [open,   setOpen]   = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const ids = ['hero', ...links.map(l => l[0])]
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-30% 0px -65% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <nav>
      <a href="#hero" className="nav-brand">Fadzli Muhammad</a>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(([id, lbl]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {lbl}
            </a>
          </li>
        ))}
      </ul>
      <div className="hamburger" onClick={() => setOpen(o => !o)}>
        <span /><span /><span />
      </div>
    </nav>
  )
}