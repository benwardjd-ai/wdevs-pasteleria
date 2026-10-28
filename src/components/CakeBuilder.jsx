import { useState } from 'react'
import Photo from './Photo'
import { cakeOptions, photos } from '../data'
import { formatPrice } from '../lib/format'

const { sizes, flavors, fillings, finishes } = cakeOptions

function OptionGroup({ title, step, children }) {
  return (
    <fieldset className="option-group">
      <legend><span>{step}</span>{title}</legend>
      <div className="option-group__items">{children}</div>
    </fieldset>
  )
}

export default function CakeBuilder({ onAdd }) {
  const [size, setSize] = useState(sizes[1])
  const [flavor, setFlavor] = useState(flavors[0])
  const [filling, setFilling] = useState(fillings[0])
  const [finish, setFinish] = useState(finishes[1])
  const [message, setMessage] = useState('')

  const price = size.price + filling.price + finish.price

  const add = () => {
    const note = message ? ` · "${message}"` : ''
    onAdd({
      id: `custom-${size.id}-${flavor}-${filling.id}-${finish.id}-${message}`,
      name: `Pastel ${size.label}: ${flavor}, ${filling.label}, ${finish.label}${note}`,
      price,
      photo: photos.custom,
    })
  }

  return (
    <section className="builder-section" id="a-tu-gusto">
      <div className="container builder">
        <div className="builder__visual" data-reveal>
          <Photo id={photos.custom} alt="Pastel de dos pisos decorado" sizes="(max-width: 900px) 100vw, 45vw" />
          <div className="builder__summary">
            <small>Tu pastel</small>
            <p>{size.label} · {flavor} · {filling.label} · {finish.label}</p>
            <strong>{formatPrice(price)}</strong>
          </div>
        </div>

        <div className="builder__panel">
          <p className="kicker" data-reveal>A tu gusto</p>
          <h2 data-reveal style={{ '--d': 1 }}>Diseña un pastel <em>solo tuyo.</em></h2>

          <OptionGroup title="Tamaño" step="01">
            {sizes.map((item) => (
              <button key={item.id} className={`choice choice--card ${item.id === size.id ? 'choice--active' : ''}`} onClick={() => setSize(item)}>
                <strong>{item.label}</strong>
                <small>{item.serves}</small>
              </button>
            ))}
          </OptionGroup>
          <OptionGroup title="Sabor" step="02">
            {flavors.map((item) => (
              <button key={item} className={`choice ${item === flavor ? 'choice--active' : ''}`} onClick={() => setFlavor(item)}>{item}</button>
            ))}
          </OptionGroup>
          <OptionGroup title="Relleno" step="03">
            {fillings.map((item) => (
              <button key={item.id} className={`choice ${item.id === filling.id ? 'choice--active' : ''}`} onClick={() => setFilling(item)}>
                {item.label}{item.price > 0 && <small> +{formatPrice(item.price)}</small>}
              </button>
            ))}
          </OptionGroup>
          <OptionGroup title="Acabado" step="04">
            {finishes.map((item) => (
              <button key={item.id} className={`choice ${item.id === finish.id ? 'choice--active' : ''}`} onClick={() => setFinish(item)}>
                {item.label}{item.price > 0 && <small> +{formatPrice(item.price)}</small>}
              </button>
            ))}
          </OptionGroup>
          <label className="message-field">
            <span>Mensaje en el pastel</span>
            <input value={message} onChange={(e) => setMessage(e.target.value)} maxLength="40" placeholder="Feliz cumpleaños, Ana" />
          </label>
          <button className="btn btn--cocoa btn--block" onClick={add}>Agregar al pedido · {formatPrice(price)}</button>
        </div>
      </div>
    </section>
  )
}
