import type { GitHubRepositoryCardProps } from '../types/github'
import './GitHubRepositoryCard.css'

export function GitHubRepositoryCard({ repository }: GitHubRepositoryCardProps) {
  return (
    <article className="project-card">
      <h2 className="project-card__title">{repository.name}</h2>
      <p>{repository.description ?? 'Sin descripción'}</p>
      <dl className="project-card__metadata">
        <div className="project-card__detail">
          <dt className="project-card__term">Lenguaje</dt>
          <dd className="project-card__value">{repository.language ?? 'Sin especificar'}</dd>
        </div>
        <div className="project-card__detail">
          <dt className="project-card__term">Estrellas</dt>
          <dd className="project-card__value">{repository.stargazers_count}</dd>
        </div>
      </dl>
      <a className="project-card__link" href={repository.html_url} aria-label={`Ver código en GitHub de ${repository.name}`}>
        Ver código en GitHub
      </a>
    </article>
  )
}
