import * as React from 'react'
import { FC } from 'react'
import { Vial } from './vials'

type Profile = {
  value: Vial['type']
  title: string
}

export const profiles: Profile[] = [
  {
    value: 'oncology',
    title: 'Oncology',
  },
  {
    value: 'radiology' as const,
    title: 'Radiology',
  },
]

export const ProfileCard: FC<{ title: string; value: string; selected: boolean; onClick?: () => void }> = ({
  title,
  value,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex space-x-6 items-center rounded border border-gray-300 py-4 px-5 text-blue-900"
    >
      <div className="space-x-3 flex items-center">
        <div
          className={`transition-colors duration-300 rounded-full w-4 h-4 border border-blue-700 ${
            selected ? 'bg-blue-700' : 'bg-transparent'
          }`}
        />
        <span>{title}</span>
      </div>

      <a href={`/${value}/edit`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 hover:text-blue-500 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </a>
    </button>
  )
}
