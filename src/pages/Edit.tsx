import * as React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProfileCard, profiles } from '../components/ProfileCard'
import { FC, useCallback, useState } from 'react'
import { OncologyVial, RadiologyVial, Vial } from '../vials'
import { RadiologyVialFormModal } from '../components/VialFormModal/RadiologyVialFormModal'
import { useVials } from '../components/VialsProvider'
import { OncologyVialFormModal } from '../components/VialFormModal/OncologyVialFormModal'

const RadiologyVialCard: FC<{ vial: RadiologyVial }> = ({ vial }) => {
  const [, setVials] = useVials(vial.type)

  const handleDelete = useCallback(() => {
    setVials((current) => current.filter((currentVial) => currentVial.drug !== vial.drug))
  }, [setVials, vial])

  const [isEditingVial, setIsEditingVial] = useState(false)

  const handleEdit = useCallback(() => {
    setIsEditingVial(true)
  }, [])

  const handleClose = useCallback(
    (updatedVial?: RadiologyVial) => {
      setIsEditingVial(false)

      if (updatedVial) {
        setVials((current) => {
          return current.map((currentVial) => {
            if (currentVial === vial) {
              return updatedVial
            } else {
              return currentVial
            }
          })
        })
      }
    },
    [setVials, vial]
  )

  return (
    <div className="rounded border border-gray-300 pt-4 pb-8 px-4 flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="capitalize text-lg leading-tight">{vial.drug}</h2>
        <div className="flex items-center space-x-2 text-gray-500">
          <button onClick={handleEdit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:text-blue-500"
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
          </button>

          <button onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <hr className="mt-2 mb-6" />
      <div className="grid grid-cols-2 gap-2">
        {vial.vialSizes.map((size, index) => (
          <div key={index} className="bg-blue-100 rounded text-blue-900 px-2 py-1 text-sm">
            {size.size}
            {vial.unit} @
            <strong>
              ${(size.priceForVial / size.size).toFixed(2)}/{vial.unit}
            </strong>
          </div>
        ))}
      </div>

      {isEditingVial && <RadiologyVialFormModal onClose={handleClose} vial={vial} />}
    </div>
  )
}

const OncologyVialCard: FC<{ vial: OncologyVial }> = ({ vial }) => {
  const [, setVials] = useVials(vial.type)

  const handleDelete = useCallback(() => {
    setVials((current) => current.filter((currentVial) => currentVial.drug !== vial.drug))
  }, [setVials, vial])

  const [isEditingVial, setIsEditingVial] = useState(false)

  const handleClose = useCallback(
    (updatedVial?: OncologyVial) => {
      setIsEditingVial(false)

      if (updatedVial) {
        setVials((current) => {
          return current.map((currentVial) => {
            if (currentVial === vial) {
              return updatedVial
            } else {
              return currentVial
            }
          })
        })
      }
    },
    [setVials, vial]
  )

  return (
    <div className="rounded border border-gray-300 pt-4 pb-8 px-4 flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="capitalize text-lg leading-tight">{vial.drug}</h2>
        <div className="flex items-center space-x-2 text-gray-500">
          <button onClick={() => setIsEditingVial(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:text-blue-500"
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
          </button>

          <button onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <hr className="mt-2 mb-6" />
      <div className="flex gap-x-2">
        {vial.vialSizes.map((size) => (
          <div key={size.toString()} className="bg-blue-100 rounded text-blue-900 px-2 py-1 text-sm">
            {size}
            {vial.unit}
          </div>
        ))}
      </div>

      {isEditingVial && <OncologyVialFormModal onClose={handleClose} vial={vial} />}
    </div>
  )
}

export function Edit() {
  const params = useParams()
  const matchingProfile = profiles.find((it) => it.value === params.profile)

  if (!matchingProfile) {
    throw new Error('Missing profile')
  }

  const [showingNewVialModal, setShowingNewVialModal] = useState(false)

  if (params.profile !== 'radiology' && params.profile !== 'oncology') {
    throw new Error('Not supported')
  }

  const [vials, setVials] = useVials(params.profile)

  const handleVialFormClose = useCallback(
    (vial?: Vial) => {
      setShowingNewVialModal(false)

      if (vial) {
        setVials((current) => [...current, vial])
      }
    },
    [setVials]
  )

  return (
    <>
      <div className="flex flex-col min-h-screen p-8 space-y-16 text-blue-900 max-w-screen-2xl m-auto">
        <div className="flex space-x-8 items-center text-blue-900">
          <Link className="flex items-center space-x-2" to={`/?profile=${params.profile}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back</span>
          </Link>
          <ProfileCard title={matchingProfile.title} value={matchingProfile.value} selected />
        </div>

        <div className="space-y-6">
          <div className="flex items-end justify-between border-b border-gray-300 pb-2">
            <h1 className="text-blue-900 text-3xl leading-none">Vials</h1>
            <button
              onClick={() => setShowingNewVialModal(true)}
              type="submit"
              className="flex items-center px-6 py-4 mt-1 leading-none text-blue-100 bg-blue-900 rounded space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>New Vial</div>
            </button>
          </div>

          {vials.length === 0 && (
            <>
              <div className="flex justify-center pt-12">
                <div className="text-blue-900 text-2xl max-w-lg text-center">
                  Uh oh, looks like you haven&apos;t added a vial yet. Click above to create one.
                </div>
              </div>
            </>
          )}

          <div className="grid grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {vials.map((vial) => {
              if (vial.type === 'radiology') {
                return <RadiologyVialCard key={vial.drug} vial={vial} />
              } else if (vial.type === 'oncology') {
                return <OncologyVialCard vial={vial} key={vial.drug} />
              }
            })}
          </div>
        </div>
      </div>

      {showingNewVialModal && (
        <>
          {matchingProfile.value === 'radiology' && <RadiologyVialFormModal onClose={handleVialFormClose} />}
          {matchingProfile.value === 'oncology' && <OncologyVialFormModal onClose={handleVialFormClose} />}
        </>
      )}
    </>
  )
}
