import * as React from 'react'
import { WasteForm } from './WasteForm'
import { FC, useState } from 'react'

const ProfileCard: FC<{ title: string; selected: boolean; onClick: () => void }> = ({ title, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex space-x-6 items-center rounded border border-blue-900 py-4 px-5 text-blue-900"
    >
      <div className="space-x-3 flex items-center">
        <div
          className={`transition-colors duration-300 rounded-full w-4 h-4 border border-blue-900 ${
            selected ? 'bg-blue-900' : 'bg-transparent'
          }`}
        />
        <span>{title}</span>
      </div>

      <button className="text-sm bg-blue-800 text-blue-50 px-3 py-1 rounded">Edit</button>
    </button>
  )
}

const profiles = [
  {
    value: 'radiology',
    title: 'Radiology',
  },
  {
    value: 'oncology',
    title: 'Oncology',
  },
]

function App() {
  const [selectedProfile, setSelectedProfile] = useState(profiles[0].value)

  return (
    <div className="flex flex-col h-screen">
      <div className="flex space-x-4 p-8">
        {profiles.map((profile) => {
          return (
            <ProfileCard
              onClick={() => setSelectedProfile(profile.value)}
              key={profile.value}
              title={profile.title}
              selected={selectedProfile === profile.value}
            />
          )
        })}
      </div>

      <div className="flex-grow flex justify-center pt-12">
        <WasteForm />
      </div>
    </div>
  )
}

export default App
