import { maxCommissionSlots } from '../data/commissions'
import type { CommissionSlotsProps } from '../types/commissions'
import { formatClp } from '../utils/formatClp'
import './CommissionSlots.css'

export function CommissionSlots({ requests, onRemove }: CommissionSlotsProps) {
  return (
    <section className="panel" aria-labelledby="titulo-cupos">
      <h2 id="titulo-cupos" className="panel__title">🧷 Cupos disponibles</h2>
      <p className="panel__paragraph" role="status">Cupos usados: {requests.length} de {maxCommissionSlots}</p>
      <ol className="commission-slots">
        {requests.map(({ id, username, total }) => (
          <li className="commission-slots__item" key={id}>
            <span className="commission-slots__entry">Comisión de @{username} — {formatClp(total)}</span>
            <button type="button" className="commission-slots__remove" aria-label={`Eliminar comisión de @${username}`} onClick={() => onRemove(id)}>Eliminar</button>
          </li>
        ))}
      </ol>
    </section>
  )
}
