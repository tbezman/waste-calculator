import * as React from 'react'
import { useCallback, useMemo, useState } from 'react'
import { Modal } from './Modal'
import { OncologyVial } from './vials'
import { Input, InputLabel } from './Input'

export const OncologyVialFormModal = ({
  onClose,
  vial,
}: {
  onClose: (vial?: OncologyVial) => void
  vial?: OncologyVial
}) => {
  const [name, setName] = useState(vial?.drug ?? '')
  const [unit, setUnit] = useState(vial?.unit ?? '')

  const [sizes, setSizes] = useState<number[]>(() =>
    Array.from({ length: 8 }).map((_, index) => {
      return vial?.vialSizes[index] ?? 0
    })
  )

  const nonZeroVials = useMemo(() => {
    return sizes.filter(Boolean)
  }, [sizes])

  const formValid = name && unit && nonZeroVials.length

  const handleSave = useCallback(() => {
    if (name && unit && nonZeroVials.length) {
      onClose({ type: 'radiology', drug: name, unit, vialSizes: sizes.filter(Boolean) })
    }
  }, [name, nonZeroVials.length, onClose, sizes, unit])

  return (
    <Modal onClose={onClose}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl leading-none text-blue-900 whitespace-no-wrap">New Vial</h1>

        <button onClick={() => onClose()} className="p-1 bg-blue-200 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className=" w-5 h-5 text-blue-900 fill-current">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
          </svg>
        </button>
      </div>

      <hr className="mt-2 mb-4" />

      <InputLabel>Name</InputLabel>
      <Input value={name} placeholder="eg. Nivolumab" onChange={(e) => setName(e.target.value)} />

      <InputLabel>Unit</InputLabel>
      <Input value={unit} placeholder="eg. mg" onChange={(e) => setUnit(e.target.value)} />

      <InputLabel>Sizes (up to 8)</InputLabel>
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        {sizes.map((size, index) => {
          return (
            <Input
              key={index}
              value={size || ''}
              placeholder="eg. 3"
              onChange={(e) => {
                const newSizes = [...sizes]
                newSizes[index] = Number(e.target.value)

                setSizes(newSizes)
              }}
            />
          )
        })}
      </div>

      <button
        disabled={!formValid}
        onClick={handleSave}
        type="submit"
        className={`px-3 py-4 mt-12 leading-none text-blue-100 bg-blue-900 rounded ${formValid ? '' : 'opacity-50'}`}
      >
        Save
      </button>
    </Modal>
  )
}
