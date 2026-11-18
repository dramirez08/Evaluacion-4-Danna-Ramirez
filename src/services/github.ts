import type { GitHubRepository } from '../types/github'

const repositoriesUrl = 'https://api.github.com/users/dramirez08/repos?sort=updated&per_page=6'
let cachedRepositories: readonly GitHubRepository[] | undefined

function isGitHubRepository(value: unknown): value is GitHubRepository {
  if (typeof value !== 'object' || value === null) return false

  return 'id' in value && typeof value.id === 'number'
    && 'name' in value && typeof value.name === 'string'
    && 'description' in value && (value.description === null || typeof value.description === 'string')
    && 'language' in value && (value.language === null || typeof value.language === 'string')
    && 'stargazers_count' in value && typeof value.stargazers_count === 'number'
    && 'html_url' in value && typeof value.html_url === 'string' && value.html_url.startsWith('https://github.com/')
}

export function getCachedRepositories(): readonly GitHubRepository[] | undefined {
  return cachedRepositories
}

export async function fetchGitHubRepositories(signal: AbortSignal): Promise<readonly GitHubRepository[]> {
  signal.throwIfAborted()
  if (cachedRepositories) return cachedRepositories

  const response = await fetch(repositoriesUrl, { signal, headers: { Accept: 'application/vnd.github+json' } })

  if (response.status === 403 || response.status === 429) {
    throw new Error('GitHub limitó temporalmente las consultas. Intenta más tarde.')
  }
  if (!response.ok) {
    throw new Error(`GitHub no respondió correctamente (HTTP ${response.status}).`)
  }

  const data: unknown = await response.json()
  if (!Array.isArray(data) || !data.every(isGitHubRepository)) {
    throw new Error('GitHub devolvió un listado con un formato inesperado.')
  }

  signal.throwIfAborted()
  cachedRepositories = data
  return cachedRepositories
}
