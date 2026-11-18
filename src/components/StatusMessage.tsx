import type { StatusMessageProps } from '../types/github'

export function StatusMessage({ variant, message }: StatusMessageProps) {
  return (
    <p className={`status-message status-message--${variant}`} role={variant === 'error' ? 'alert' : 'status'}>
      {message}
    </p>
  )
}
