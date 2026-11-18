import { useEffect, useRef } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { commissionNetworks, detailOptions, drawingOptions, paymentMethods } from '../data/commissions'
import type { CommissionField, CommissionFormProps } from '../types/commissions'
import { formatClp } from '../utils/formatClp'
import './CommissionForm.css'

export function CommissionForm({ fields, errors, feedback, total, onFieldChange, onSubmit }: CommissionFormProps) {
  const usernameInput = useRef<HTMLInputElement>(null)
  const descriptionInput = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (feedback?.kind !== 'error') return
    if (errors.username) usernameInput.current?.focus()
    else if (errors.description) descriptionInput.current?.focus()
  }, [errors, feedback])

  function changeField(field: CommissionField) {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      onFieldChange(field, event.currentTarget.value)
    }
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit()
  }

  return (
    <section className="panel" aria-labelledby="titulo-solicitud">
      <h2 id="titulo-solicitud" className="panel__title">Solicita tu Comisión</h2>
      <p className="panel__paragraph">El registro de esta solicitud es local.</p>
      <form className="commission-form" noValidate onSubmit={submitForm}>
        <div className="commission-form__row">
          <div className="commission-form__field">
            <label htmlFor="comision-usuario">Usuario (obligatorio)</label>
            <input ref={usernameInput} id="comision-usuario" name="username" autoComplete="username" required value={fields.username} onChange={changeField('username')} aria-invalid={!!errors.username} aria-describedby={errors.username ? 'error-usuario' : undefined} />
            {errors.username && <p id="error-usuario" className="commission-form__error">{errors.username}</p>}
          </div>
          <div className="commission-form__field">
            <label htmlFor="comision-red">Red social</label>
            <select id="comision-red" name="network" value={fields.network} onChange={changeField('network')}>
              {commissionNetworks.map((network) => <option key={network}>{network}</option>)}
            </select>
          </div>
        </div>
        <fieldset className="commission-form__calculator">
          <legend>Calculador de precio</legend>
          <div className="commission-form__row">
            <div className="commission-form__field">
              <label htmlFor="comision-tipo">Tipo de dibujo</label>
              <select id="comision-tipo" name="drawing" value={fields.drawing} onChange={changeField('drawing')}>
                {drawingOptions.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
              </select>
            </div>
            <div className="commission-form__field">
              <label htmlFor="comision-detalles">Estilo de color</label>
              <select id="comision-detalles" name="detail" value={fields.detail} onChange={changeField('detail')}>
                {detailOptions.map(({ id, label, price }) => <option key={id} value={id}>{price > 0 ? `${label} (+${formatClp(price)})` : label}</option>)}
              </select>
            </div>
          </div>
          <p>Total: <output htmlFor="comision-tipo comision-detalles" className="commission-form__total">{formatClp(total)}</output></p>
        </fieldset>
        <div className="commission-form__field">
          <label htmlFor="comision-descripcion">Descripción de la idea (obligatoria)</label>
          <textarea ref={descriptionInput} id="comision-descripcion" name="description" rows={4} required value={fields.description} onChange={changeField('description')} aria-invalid={!!errors.description} aria-describedby={errors.description ? 'error-descripcion' : undefined} />
          {errors.description && <p id="error-descripcion" className="commission-form__error">{errors.description}</p>}
        </div>
        <div className="commission-form__field">
          <label htmlFor="comision-pago">Método de pago</label>
          <select id="comision-pago" name="payment" value={fields.payment} onChange={changeField('payment')}>
            {paymentMethods.map((payment) => <option key={payment}>{payment}</option>)}
          </select>
        </div>
        <div className="commission-form__feedback">
          <p className="commission-form__error" role="alert">{feedback?.kind === 'error' ? feedback.text : ''}</p>
          <p className="commission-form__confirmation" role="status">{feedback?.kind === 'success' ? feedback.text : ''}</p>
        </div>
        <button type="submit" className="button button--centered commission-form__submit">Registrar solicitud</button>
      </form>
    </section>
  )
}
