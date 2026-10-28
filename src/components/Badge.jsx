const TEXT = 'Horneado cada mañana · Hecho a mano · '

export default function Badge() {
  return (
    <div className="badge" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <defs>
          <path id="circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text><textPath href="#circle">{TEXT}{TEXT}</textPath></text>
      </svg>
      <span className="badge__center">&#10045;</span>
    </div>
  )
}
