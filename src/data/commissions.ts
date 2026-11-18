import type { CommissionFields, CommissionOption, CommissionPrice } from '../types/commissions'

export const commissionPrices: readonly CommissionPrice[] = [
  { id: 'icono', type: 'Icono', digital: 5000, traditional: 6000 },
  { id: 'medio', type: 'Cuerpo Medio', digital: 8000, traditional: 9000 },
  { id: 'completo', type: 'Cuerpo Completo', digital: 10000, traditional: 11000 },
]

export const drawingOptions: readonly CommissionOption[] = commissionPrices.flatMap(({ id, type, digital, traditional }) => [
  { id: `${id}-digital`, label: `${type} - Digital`, price: digital },
  { id: `${id}-tradicional`, label: `${type} - Tradicional`, price: traditional },
])

export const detailOptions: readonly CommissionOption[] = [
  { id: 'base', label: 'Color Base', price: 0 },
  { id: 'sombras', label: 'Con Sombras', price: 1000 },
  { id: 'renderizado', label: 'Renderizado', price: 2000 },
]

export const commissionNetworks = ['Discord', 'Instagram', 'TikTok'] as const
export const paymentMethods = ['Transferencia', 'Mercado Pago', 'PayPal'] as const
export const maxCommissionSlots = 3

export const initialCommissionFields: CommissionFields = {
  username: '',
  network: commissionNetworks[0],
  drawing: drawingOptions[0].id,
  detail: detailOptions[0].id,
  description: '',
  payment: paymentMethods[0],
}
