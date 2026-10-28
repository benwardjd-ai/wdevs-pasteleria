import { business, navLinks } from '../data'
import { useScrolled } from '../hooks/useScrolled'

export default function Header({ count, onOpenOrder }) {
  const scrolled = useScrolled(60)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <p className="announcement">{business.announcement}</p>
      <div className="header__inner">
        <nav className="nav" aria-label="Principal">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a href="#inicio" className="logo">
          {business.name}
          <small>{business.descriptor}</small>
        </a>
        <button className="bag" onClick={onOpenOrder}>
          Pedido <span className={`bag__count ${count > 0 ? 'bag__count--filled' : ''}`}>{count}</span>
        </button>
      </div>
    </header>
  )
}
