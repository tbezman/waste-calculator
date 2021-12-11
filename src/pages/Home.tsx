import * as React from 'react'
import { ProfileCard, profiles } from '../components/ProfileCard'
import { OncologyWasteForm } from '../components/WasteForm/OncologyWasteForm'
import { RadiologyWasteForm } from '../components/WasteForm/RadiologyWasteForm'
import { Link, useSearchParams } from 'react-router-dom'
import { useVials } from '../components/VialsProvider'

export function Home() {
  const [params] = useSearchParams({ profile: 'radiology' })

  const profileParam = params.get('profile')

  if (profileParam !== 'radiology' && profileParam !== 'oncology') {
    throw new Error('Yikes')
  }

  const [vials] = useVials(profileParam)

  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      <div className="flex space-x-4 p-8">
        {profiles.map((profile) => {
          return (
            <ProfileCard
              key={profile.value}
              value={profile.value}
              title={profile.title}
              selected={profileParam === profile.value}
            />
          )
        })}
      </div>

      <div className="flex-grow flex justify-center pt-12">
        {vials.length ? (
          <>
            {profileParam === 'radiology' && <RadiologyWasteForm />}
            {profileParam === 'oncology' && <OncologyWasteForm />}
          </>
        ) : (
          <>
            <div className="flex flex-col max-w-lg text-center">
              <h2 className="text-2xl">
                Uh oh, looks like you haven&apos;t added a vial yet. Click below to create one.
              </h2>
              <Link to={`/${profileParam}/edit`}>
                <a className={`px-3 py-4 mt-8 leading-none text-blue-100 bg-blue-900 rounded w-full block`}>
                  Edit Vials
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
