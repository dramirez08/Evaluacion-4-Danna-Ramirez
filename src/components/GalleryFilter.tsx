import { useId } from 'react'
import type { ChangeEvent } from 'react'
import { artworkFilters } from '../data/portfolio'
import type { GalleryFilterProps } from '../types/portfolio'
import './GalleryFilter.css'

export function GalleryFilter({ value, onChange, resultCount }: GalleryFilterProps) {
  const filterId = useId()

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const option = artworkFilters.find(({ value }) => value === event.currentTarget.value)
    if (option) onChange(option.value)
  }

  return (
    <div className="gallery-filter">
      <label htmlFor={filterId} className="gallery-filter__label">Técnica</label>
      <select id={filterId} className="gallery-filter__select" value={value} onChange={handleChange}>
        {artworkFilters.map((filter) => <option key={filter.value} value={filter.value}>{filter.label}</option>)}
      </select>
      <p className="gallery-filter__count" role="status">
        {resultCount} {resultCount === 1 ? 'ilustración' : 'ilustraciones'}
      </p>
    </div>
  )
}
