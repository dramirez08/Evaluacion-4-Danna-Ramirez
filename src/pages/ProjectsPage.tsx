import { GitHubRepositoryCard } from '../components/GitHubRepositoryCard'
import { StatusMessage } from '../components/StatusMessage'
import { useGitHubRepositories } from '../hooks/useGitHubRepositories'
import './ProjectsPage.css'

export function ProjectsPage() {
  const state = useGitHubRepositories()

  return (
    <section className="panel panel--standalone projects" aria-labelledby="titulo-proyectos">
      <h1 id="titulo-proyectos" className="panel__title">Proyectos en GitHub</h1>
      <p className="projects__intro">Repositorios públicos de Danna, ordenados por la actualización más reciente.</p>
      {state.status === 'loading' && <StatusMessage variant="loading" message="Cargando repositorios de GitHub…" />}
      {state.status === 'error' && <StatusMessage variant="error" message={state.message} />}
      {state.status === 'success' && (
        state.repositories.length === 0
          ? <StatusMessage variant="empty" message="GitHub no devolvió repositorios públicos." />
          : <ul className="projects__grid" aria-label="Repositorios públicos">
              {state.repositories.map((repository) => (
                <li key={repository.id}><GitHubRepositoryCard repository={repository} /></li>
              ))}
            </ul>
      )}
    </section>
  )
}
