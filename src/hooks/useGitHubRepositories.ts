import { useEffect, useState } from 'react'
import { fetchGitHubRepositories, getCachedRepositories } from '../services/github'
import type { GitHubRepositoriesState } from '../types/github'

export function useGitHubRepositories(): GitHubRepositoriesState {
  const [state, setState] = useState<GitHubRepositoriesState>(() => {
    const repositories = getCachedRepositories()
    return repositories ? { status: 'success', repositories } : { status: 'loading' }
  })

  useEffect(() => {
    const controller = new AbortController()

    async function loadRepositories() {
      try {
        const repositories = await fetchGitHubRepositories(controller.signal)
        if (!controller.signal.aborted) setState({ status: 'success', repositories })
      } catch (error: unknown) {
        if (controller.signal.aborted) return
        const message = error instanceof Error && !(error instanceof TypeError)
          ? error.message
          : 'No se pudo conectar con GitHub. Revisa tu conexión y vuelve a la página.'
        setState({ status: 'error', message })
      }
    }

    void loadRepositories()
    return () => controller.abort()
  }, [])

  return state
}
