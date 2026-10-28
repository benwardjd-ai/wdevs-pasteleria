import { business, navLinks } from '../data'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <p className="footer__logo">{business.name}</p>
          <div className="footer__cols">
            <div>
              <small>Visítanos</small>
              <p>{business.address}</p>
              <p>{business.hours}</p>
            </div>
            <div>
              <small>Contacto</small>
              <p>WhatsApp {business.phoneDisplay}</p>
              <p>{business.instagram}</p>
            </div>
            <nav>
              <small>Explora</small>
              {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
            </nav>
          </div>
        </div>
        <div className="footer__meta">
          <span>&copy; {CURRENT_YEAR} {business.name}. Sitio demo · Fotografía: Unsplash.</span>
          <span>Diseño y desarrollo por <strong>W-DEVs</strong></span>
        </div>
      </div>
    </footer>
  )
}
