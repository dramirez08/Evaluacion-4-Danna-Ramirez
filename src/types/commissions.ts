export interface CommissionPrice {
  id: string
  type: string
  digital: number
  traditional: number
}

export interface CommissionOption {
  id: string
  label: string
  price: number
}

export interface CommissionFields {
  username: string
  network: string
  drawing: string
  detail: string
  description: string
  payment: string
}

export type CommissionField = keyof CommissionFields
export type CommissionErrors = Partial<Record<CommissionField, string>>

export interface CommissionRequest extends CommissionFields {
  id: number
  total: number
}

export interface CommissionFeedback {
  kind: 'success' | 'error'
  text: string
}

export interface CommissionState {
  fields: CommissionFields
  errors: CommissionErrors
  feedback: CommissionFeedback | null
  requests: readonly CommissionRequest[]
  nextId: number
}

export type CommissionAction =
  | { type: 'change'; field: CommissionField; value: string }
  | { type: 'submit' }
  | { type: 'remove'; id: number }

export interface CommissionFormProps {
  fields: CommissionFields
  errors: CommissionErrors
  feedback: CommissionFeedback | null
  total: number
  onFieldChange: (field: CommissionField, value: string) => void
  onSubmit: () => void
}

export interface CommissionSlotsProps {
  requests: readonly CommissionRequest[]
  onRemove: (id: number) => void
}
