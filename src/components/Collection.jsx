import { useState } from 'react'
import Photo from './Photo'
import { categories, products } from '../data'
import { formatPrice } from '../lib/format'

export default function Collection({ onAdd }) {
  const [category, setCategory] = useState(categories[0])
  const [justAdded, setJustAdded] = useState(null)
  const visible = category === 'Todo' ? products : products.filter((p) => p.category === category)

  const add = (product) => {
    onAdd({ id: product.id, name: product.name, price: product.price, photo: product.photo })
    setJustAdded(product.id)
    setTimeout(() => setJustAdded(null), 1400)
  }

  return (
    <section className="section" id="coleccion">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker" data-reveal>La colección</p>
            <h2 data-reveal style={{ '--d': 1 }}>Horneado <em>esta mañana.</em></h2>
          </div>
          <div className="tabs" data-reveal style={{ '--d': 2 }}>
            {categories.map((item) => (
              <button key={item} className={`tab ${item === category ? 'tab--active' : ''}`} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="products">
          {visible.map((product, index) => (
            <article key={product.id} className="product" data-reveal style={{ '--d': index % 4 }}>
              <div className="product__photo">
                {product.badge && <span className="product__badge">{product.badge}</span>}
                <Photo id={product.photo} alt={product.name} sizes="(max-width: 600px) 50vw, (max-width: 1100px) 33vw, 25vw" />
                <button className={`product__add ${justAdded === product.id ? 'product__add--done' : ''}`} onClick={() => add(product)} aria-label={`Agregar ${product.name}`}>
                  <span>{justAdded === product.id ? 'Agregado' : 'Agregar'}</span>
                </button>
              </div>
              <div className="product__info">
                <h3>{product.name}</h3>
                <span>{formatPrice(product.price)}</span>
              </div>
              <p>{product.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
