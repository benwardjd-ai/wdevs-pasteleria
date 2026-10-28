import Photo from './Photo'
import { photos } from '../data'

export default function Atelier() {
  return (
    <section className="atelier" id="atelier">
      <div className="container atelier__grid">
        <div className="atelier__images">
          <div className="atelier__img atelier__img--a" data-reveal>
            <Photo id={photos.atelierA} alt="Pan dulce recién horneado" sizes="(max-width: 900px) 70vw, 30vw" />
          </div>
          <div className="atelier__img atelier__img--b" data-reveal style={{ '--d': 2 }}>
            <Photo id={photos.atelierB} alt="Tartaletas de frutos rojos" sizes="(max-width: 900px) 50vw, 20vw" />
          </div>
        </div>
        <div className="atelier__copy">
          <p className="kicker" data-reveal>El atelier</p>
          <h2 data-reveal style={{ '--d': 1 }}>Una cocina pequeña, <em>a propósito.</em></h2>
          <p data-reveal style={{ '--d': 2 }}>
            Horneamos en lotes cortos para que nada pase más de un día en vitrina. Cada pastel lo termina a mano la
            misma persona que lo empezó, y se nota.
          </p>
          <div className="signature" data-reveal style={{ '--d': 3 }}>
            <span>Valeria Ortiz</span>
            <small>Chef pastelera y fundadora</small>
          </div>
        </div>
      </div>
    </section>
  )
}
