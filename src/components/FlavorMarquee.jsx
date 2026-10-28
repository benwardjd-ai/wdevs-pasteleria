import { flavors } from '../data'

export default function FlavorMarquee() {
  const items = [...flavors, ...flavors]
  return (
    <div className="flavors" aria-hidden="true">
      <div className="flavors__track">
        {items.map((flavor, index) => (
          <span key={`${flavor}-${index}`}>{flavor}<i>&#10045;</i></span>
        ))}
      </div>
    </div>
  )
}
