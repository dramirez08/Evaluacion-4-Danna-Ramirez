import type { KeyboardEvent, MouseEvent } from 'react'
import { useModalDialog } from '../hooks/useModalDialog'
import type { ArtworkViewerProps } from '../types/portfolio'
import './ArtworkViewer.css'

export function ArtworkViewer({ artwork, index, count, onMove, onClose }: ArtworkViewerProps) {
  const dialog = useModalDialog()

  function handleKeys(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      onMove(event.key === 'ArrowLeft' ? -1 : 1)
    }
  }

  function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) dialog.current?.close()
  }

  return (
    <dialog ref={dialog} className="artwork-viewer" aria-label="Visor de ilustraciones" onClose={onClose} onKeyDown={handleKeys} onClick={closeOnBackdrop}>
      <div className="artwork-viewer__panel">
        <button type="button" className="artwork-viewer__close" aria-label="Cerrar visor" onClick={() => dialog.current?.close()}>
          <span aria-hidden="true">✕</span>
        </button>
        <figure className="artwork-viewer__figure">
          <img className="artwork-viewer__image" src={artwork.image} alt={artwork.alt} />
          <figcaption className="artwork-viewer__caption" aria-live="polite">{artwork.alt} · {index + 1} de {count}</figcaption>
        </figure>
        <div className="artwork-viewer__controls">
          <button type="button" className="artwork-viewer__arrow" aria-label="Ilustración anterior" disabled={count < 2} onClick={() => onMove(-1)}>
            <span aria-hidden="true">‹</span>
          </button>
          <button type="button" className="artwork-viewer__arrow" aria-label="Ilustración siguiente" disabled={count < 2} onClick={() => onMove(1)}>
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </dialog>
  )
}
