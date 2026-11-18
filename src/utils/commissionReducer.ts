import { detailOptions, drawingOptions, initialCommissionFields, maxCommissionSlots } from '../data/commissions'
import type { CommissionAction, CommissionErrors, CommissionFields, CommissionState } from '../types/commissions'

export const initialCommissionState: CommissionState = {
  fields: initialCommissionFields,
  errors: {},
  feedback: null,
  requests: [],
  nextId: 1,
}

export function calculateCommissionTotal({ drawing, detail }: CommissionFields): number {
  const base = drawingOptions.find(({ id }) => id === drawing)?.price ?? 0
  const extra = detailOptions.find(({ id }) => id === detail)?.price ?? 0
  return base + extra
}

function registerRequest(state: CommissionState): CommissionState {
  const username = state.fields.username.trim().replace(/^@+/, '').trim()
  const description = state.fields.description.trim()
  const errors: CommissionErrors = {}
  if (!username) errors.username = 'Ingresa tu usuario.'
  if (!description) errors.description = 'Describe la ilustración que quieres pedir.'

  if (errors.username || errors.description) {
    return { ...state, errors, feedback: { kind: 'error', text: 'Revisa los campos indicados.' } }
  }

  if (state.requests.length >= maxCommissionSlots) {
    return { ...state, errors: {}, feedback: { kind: 'error', text: 'Ya se ocuparon los tres cupos disponibles.' } }
  }

  const request = {
    ...state.fields,
    id: state.nextId,
    username,
    description,
    total: calculateCommissionTotal(state.fields),
  }

  return {
    fields: initialCommissionFields,
    errors: {},
    feedback: { kind: 'success', text: `Solicitud de @${username} registrada en esta vista.` },
    requests: [...state.requests, request],
    nextId: state.nextId + 1,
  }
}

export function commissionReducer(state: CommissionState, action: CommissionAction): CommissionState {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: undefined },
        feedback: null,
      }
    case 'submit':
      return registerRequest(state)
    case 'remove':
      return { ...state, requests: state.requests.filter(({ id }) => id !== action.id), feedback: null }
  }
}
