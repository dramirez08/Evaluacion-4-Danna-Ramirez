const clp = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
})

export function formatClp(amount: number) {
  return clp.format(amount)
}
