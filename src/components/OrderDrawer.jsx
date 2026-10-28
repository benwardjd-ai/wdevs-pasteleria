import Photo from './Photo'
import { business } from '../data'
import { formatPrice } from '../lib/format'
import { buildWhatsAppLink } from '../lib/whatsapp'

function buildMessage(items, amount) {
  const lines = items.map((item) => `- ${item.quantity} x ${item.name} (${formatPrice(item.price * item.quantity)})`)
  return ['Hola, me gustaría hacer este pedido:', ...lines, `Total: ${formatPrice(amount)}`].join('\n')
}

export default function OrderDrawer({ open, onClose, order }) {
  const { items, amount, count, changeQuantity, clear } = order

  const send = () => {
    window.open(buildWhatsAppLink(business.whatsapp, buildMessage(items, amount)), '_blank', 'noopener')
  }

  return (
    <>
      <div className={`overlay ${open ? 'overlay--visible' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'drawer--open' : ''}`} aria-hidden={!open} data-lenis-prevent>
        <div className="drawer__head">
          <h2>Tu pedido <em>({count})</em></h2>
          <button onClick={onClose} className="drawer__close">Cerrar</button>
        </div>
        {items.length === 0 ? (
          <div className="drawer__empty">
            <p>Aún no hay nada aquí.</p>
            <button className="btn btn--line" onClick={onClose}>Explorar la colección</button>
          </div>
        ) : (
          <>
            <ul className="drawer__list">
              {items.map((item) => (
                <li key={item.id}>
                  <div className="drawer__thumb"><Photo id={item.photo} alt="" sizes="72px" /></div>
                  <div className="drawer__info">
                    <p>{item.name}</p>
                    <small>{formatPrice(item.price)}</small>
                    <div className="qty">
                      <button onClick={() => changeQuantity(item.id, -1)} aria-label="Quitar uno">&minus;</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => changeQuantity(item.id, 1)} aria-label="Agregar uno">+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="drawer__footer">
              <div className="drawer__total"><span>Total</span><strong>{formatPrice(amount)}</strong></div>
              <button className="btn btn--cocoa btn--block" onClick={send}>Enviar pedido por WhatsApp</button>
              <button className="drawer__clear" onClick={clear}>Vaciar pedido</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
