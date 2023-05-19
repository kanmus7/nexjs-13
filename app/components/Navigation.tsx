import React from 'react'
import Link from 'next/link'

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Posts',
    route: '/posts',
  },
]

export const Navigation = () => {
  return (
    <header className="bg-gray-100 py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex flex-row gap-4 sm:flex-row sm:gap-10">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link
                className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-500 hover:underline"
                href={route}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
