import { commissionPrices } from '../data/commissions'
import { formatClp } from '../utils/formatClp'
import './CommissionPriceTable.css'

export function CommissionPriceTable() {
  return (
    <section className="panel commission-prices" aria-labelledby="titulo-precios">
      <h2 id="titulo-precios" className="panel__title">Tabla de Precios</h2>
      <div className="commission-prices__scroll">
        <table className="commission-prices__table">
          <caption className="commission-prices__caption">Precios base por tipo de dibujo y técnica</caption>
          <thead>
            <tr>
              <th scope="col" className="commission-prices__column">Tipo</th>
              <th scope="col" className="commission-prices__column">Digital</th>
              <th scope="col" className="commission-prices__column">Tradicional</th>
            </tr>
          </thead>
          <tbody>
            {commissionPrices.map(({ type, digital, traditional }) => (
              <tr key={type}>
                <th scope="row" className="commission-prices__row">{type}</th>
                <td className="commission-prices__cell">{formatClp(digital)}</td>
                <td className="commission-prices__cell">{formatClp(traditional)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
