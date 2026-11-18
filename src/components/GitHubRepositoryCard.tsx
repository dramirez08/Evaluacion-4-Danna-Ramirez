import type { GitHubRepositoryCardProps } from '../types/github'

export function GitHubRepositoryCard({ repository }: GitHubRepositoryCardProps) {
  return (
    <article className="project-card">
      <h2 className="project-card__title">{repository.name}</h2>
      <p>{repository.description ?? 'Sin descripción'}</p>
      <dl className="project-card__metadata">
        <div><dt>Lenguaje</dt><dd>{repository.language ?? 'Sin especificar'}</dd></div>
        <div><dt>Estrellas</dt><dd>{repository.stargazers_count}</dd></div>
      </dl>
      <a className="project-card__link" href={repository.html_url} aria-label={`Ver código en GitHub de ${repository.name}`}>
        Ver código en GitHub
      </a>
    </article>
  )
}
