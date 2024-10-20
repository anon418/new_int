import React from 'react'
import Link from 'next/link'

interface RepoProps {
  name: string
}

interface GitHubContent {
  type: string
  path: string
}

const RepoDirs: React.FC<RepoProps> = async ({ name }) => {
  const username = 'anon418'
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}/contents`
  )
  const contents: GitHubContent[] = await response.json()
  const dirs = contents.filter((content) => content.type === 'dir')

  return (
    <div className="mt-2">
      <h3 className="text-xl font-bold">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link
              className="underline"
              href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepoDirs
