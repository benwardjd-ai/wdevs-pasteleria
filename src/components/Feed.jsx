import Photo from './Photo'
import { business, feed } from '../data'

export default function Feed() {
  return (
    <section className="feed">
      <div className="feed__head container">
        <h2 data-reveal>Síguenos <em>{business.instagram}</em></h2>
      </div>
      <div className="feed__grid">
        {feed.map((id, index) => (
          <div key={id} className="feed__item" data-reveal style={{ '--d': index }}>
            <Photo id={id} alt="Creación de la pastelería" sizes="(max-width: 700px) 33vw, 17vw" />
          </div>
        ))}
      </div>
    </section>
  )
}
