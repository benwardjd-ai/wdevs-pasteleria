import Badge from './Badge'
import Photo from './Photo'
import { photos } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="kicker" data-reveal>Desde 2012 · Estado de México</p>
          <h1 data-reveal style={{ '--d': 1 }}>
            Pequeños <em>lujos</em><br />para grandes<br />momentos.
          </h1>
          <p className="hero__lead" data-reveal style={{ '--d': 2 }}>
            Pasteles de autor con mantequilla real, vainilla de Papantla y fruta de temporada. Sin conservadores, sin atajos.
          </p>
          <div className="hero__actions" data-reveal style={{ '--d': 3 }}>
            <a href="#coleccion" className="btn btn--cocoa">Ver la colección</a>
            <a href="#a-tu-gusto" className="btn btn--line">Diseñar mi pastel</a>
          </div>
        </div>

        <div className="hero__main" data-reveal style={{ '--d': 1 }}>
          <div className="arch">
            <Photo id={photos.hero} alt="Pastel blanco con detalles dorados" sizes="(max-width: 900px) 80vw, 34vw" eager />
          </div>
          <Badge />
        </div>

        <aside className="hero__side" data-reveal style={{ '--d': 3 }}>
          <div className="hero__side-photo">
            <Photo id={photos.heroSide} alt="Pastel de caramelo salado" sizes="(max-width: 900px) 40vw, 16vw" />
          </div>
          <p className="hero__side-caption"><em>Nuevo</em> · Caramelo salado con crocante de nuez</p>
        </aside>
      </div>
    </section>
  )
}
