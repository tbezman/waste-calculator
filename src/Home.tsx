import * as React from 'react'
import { useState } from 'react'
import { WasteForm } from './WasteForm'
import { ProfileCard, profiles } from './ProfileCard'
import { Vial } from './vials'

export function Home() {
  const [selectedProfile, setSelectedProfile] = useState<Vial['type']>(profiles[0].value)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex space-x-4 p-8">
        {profiles.map((profile) => {
          return (
            <ProfileCard
              onClick={() => setSelectedProfile(profile.value)}
              key={profile.value}
              value={profile.value}
              title={profile.title}
              selected={selectedProfile === profile.value}
            />
          )
        })}
      </div>

      <div className="flex-grow flex justify-center pt-12">
        <WasteForm profile={selectedProfile} />
      </div>
    </div>
  )
}
