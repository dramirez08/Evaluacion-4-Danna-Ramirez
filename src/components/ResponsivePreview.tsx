import { useState } from 'react'
import { useHref, useLocation } from 'react-router-dom'
import { previewSizes } from '../data/portfolio'
import { useModalDialog } from '../hooks/useModalDialog'
import type { PreviewDialogProps, PreviewSize } from '../types/portfolio'
import './ResponsivePreview.css'

function PreviewDialog({ size, onSelect, onClose }: PreviewDialogProps) {
  const dialog = useModalDialog()
  const { pathname, search } = useLocation()
  const previewUrl = useHref({ pathname, search })

  return (
    <dialog ref={dialog} className="responsive-preview__dialog" aria-label="Vista previa del portafolio" onClose={onClose}>
      <div className="responsive-preview__toolbar">
        {previewSizes.map((option) => (
          <button key={option.mode} type="button" className="responsive-preview__button" aria-pressed={size.mode === option.mode} onClick={() => onSelect(option)}>
            {option.label}
          </button>
        ))}
        <button type="button" className="responsive-preview__button" onClick={() => dialog.current?.close()}>Cerrar vista previa</button>
        <span role="status">{size.width} px</span>
      </div>
      <iframe title="Vista previa de la página actual" className="responsive-preview__frame" src={previewUrl} style={{ width: size.width }} />
    </dialog>
  )
}

export function ResponsivePreview() {
  const [selection, setSelection] = useState<PreviewSize | null>(null)

  if (window.self !== window.top) return null

  return (
    <>
      <div className="responsive-preview" role="group" aria-label="Vista previa responsiva">
        <span>Vista previa</span>
        {previewSizes.map((size) => (
          <button key={size.mode} type="button" className="responsive-preview__button" onClick={() => setSelection(size)}>{size.label}</button>
        ))}
      </div>
      {selection && <PreviewDialog size={selection} onSelect={setSelection} onClose={() => setSelection(null)} />}
    </>
  )
}
