import type { CommissionPrice } from '../types/portfolio'

export const commissionPrices: readonly CommissionPrice[] = [
  { type: 'Icono', digital: 5000, traditional: 6000 },
  { type: 'Cuerpo Medio', digital: 8000, traditional: 9000 },
  { type: 'Cuerpo Completo', digital: 10000, traditional: 11000 },
]
