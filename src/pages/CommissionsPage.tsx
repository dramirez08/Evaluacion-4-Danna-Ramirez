import { useReducer } from 'react'
import { CommissionForm } from '../components/CommissionForm'
import { CommissionPriceTable } from '../components/CommissionPriceTable'
import { CommissionSlots } from '../components/CommissionSlots'
import { calculateCommissionTotal, commissionReducer, initialCommissionState } from '../utils/commissionReducer'

export function CommissionsPage() {
  const [state, dispatch] = useReducer(commissionReducer, initialCommissionState)

  return (
    <div className="container">
      <h1 className="page-title">Comisiones de Dibujo</h1>
      <CommissionPriceTable />
      <CommissionForm
        fields={state.fields}
        errors={state.errors}
        feedback={state.feedback}
        total={calculateCommissionTotal(state.fields)}
        onFieldChange={(field, value) => dispatch({ type: 'change', field, value })}
        onSubmit={() => dispatch({ type: 'submit' })}
      />
      <CommissionSlots requests={state.requests} onRemove={(id) => dispatch({ type: 'remove', id })} />
    </div>
  )
}
