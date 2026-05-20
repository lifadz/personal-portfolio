import { ME } from '../data/data'

export default function Footer() {
  return (
    <footer>
      <span className="f-brand">Fadzli Muhammad</span>
      <span className="f-text">{ME.name} · IT Support & Networking · {ME.location}</span>
      <span className="f-text">© {new Date().getFullYear()}</span>
    </footer>
  )
}