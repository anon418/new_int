import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

interface RepoProps {
  name: string
}

const Repo: React.FC<RepoProps> = async ({ name }) => {
  const username = 'anon418'
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}`
  )
  const repo = await response.json()

  return (
    <div>
      <h3 className="text-xl font-bold">
        <Link
          href={`https://github.com/${username}/${name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </Link>
      </h3>
      <p>{repo.description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="flex items-center gap-1">
          <FaStar /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FaCodeBranch /> {repo.forks_count}
        </span>
        <span className="flex items-center gap-1">
          <FaEye /> {repo.watchers_count} {/* 변경: watchers_count로 수정 */}
        </span>
      </div>
    </div>
  )
}

export default Repo
