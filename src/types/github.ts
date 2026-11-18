export interface GitHubRepository {
  id: number
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  html_url: string
}

export type GitHubRepositoriesState =
  | { status: 'loading' }
  | { status: 'success'; repositories: readonly GitHubRepository[] }
  | { status: 'error'; message: string }

export interface GitHubRepositoryCardProps {
  repository: GitHubRepository
}

export interface StatusMessageProps {
  variant: 'loading' | 'empty' | 'error'
  message: string
}
