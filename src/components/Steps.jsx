import { steps } from '../data'

export default function Steps() {
  return (
    <section className="section steps-section">
      <div className="container">
        <p className="kicker kicker--center" data-reveal>Cómo pedir</p>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title} data-reveal style={{ '--d': index }}>
              <span className="steps__num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
