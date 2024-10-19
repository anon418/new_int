import Link from 'next/link'

export default function Header() {
  return (
    <nav className="bg-black py-6 px-8">
      {' '}
      {/* 바의 두께 조정: py-6 */}
      <div className="flex items-center justify-between container">
        <div className="flex items-center font-bold">
          <Link href="/">
            <div className="text-3xl text-white">Portfolio</div>{' '}
            {/* 글자 크기 조정: text-3xl */}
          </Link>
        </div>
        <div className="flex items-center font-bold">
          <Link
            href="/"
            className="text-xl text-white hover:text-gray-300 mr-4"
          >
            {' '}
            {/* 글자 크기 조정: text-xl */}
            Profile
          </Link>
          <Link
            href="/assi"
            className="text-xl text-white hover:text-gray-300 mr-4"
          >
            {' '}
            {/* 글자 크기 조정: text-xl */}
            Assignments
          </Link>
          <Link
            href="/repos"
            className="text-xl text-white hover:text-gray-300 mr-4"
          >
            {' '}
            {/* 글자 크기 조정: text-xl */}
            Repository
          </Link>
          <a
            href="https://vercel.com/anondzs-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl text-white hover:text-gray-300"
          >
            Vercel
          </a>
        </div>
      </div>
    </nav>
  )
}
