import { useRef } from 'react'
import { maxCommissionSlots } from '../data/commissions'
import type { CommissionSlotsProps } from '../types/commissions'
import { formatClp } from '../utils/formatClp'
import './CommissionSlots.css'

export function CommissionSlots({ requests, onRemove }: CommissionSlotsProps) {
  const count = useRef<HTMLParagraphElement>(null)
  const removeButtons = useRef(new Map<number, HTMLButtonElement>())

  function removeRequest(id: number) {
    const index = requests.findIndex((request) => request.id === id)
    const next = requests[index + 1] ?? requests[index - 1]
    const target = next ? removeButtons.current.get(next.id) : count.current

    onRemove(id)
    target?.focus()
  }

  return (
    <section className="panel" aria-labelledby="titulo-cupos">
      <h2 id="titulo-cupos" className="panel__title">🧷 Cupos disponibles</h2>
      <p className="panel__paragraph commission-slots__status" role="status" tabIndex={-1} ref={count}>
        Cupos usados: {requests.length} de {maxCommissionSlots}
      </p>
      <ol className="commission-slots">
        {requests.map(({ id, username, total }) => (
          <li className="commission-slots__item" key={id}>
            <span className="commission-slots__entry">Comisión de @{username} — {formatClp(total)}</span>
            <button
              type="button"
              className="commission-slots__remove"
              aria-label={`Eliminar comisión de @${username}`}
              ref={(button) => {
                if (button) removeButtons.current.set(id, button)
                else removeButtons.current.delete(id)
              }}
              onClick={() => removeRequest(id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ol>
    </section>
  )
}
