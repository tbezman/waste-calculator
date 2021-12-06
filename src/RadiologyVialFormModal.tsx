import * as React from 'react'
import { useCallback, useMemo, useState } from 'react'
import { Modal } from './Modal'
import { OncologyVial, RadiologyVial } from './vials'
import { Input, InputLabel } from './Input'

export const RadiologyVialFormModal = ({
  onClose,
  vial,
}: {
  onClose: (vial?: RadiologyVial) => void
  vial?: RadiologyVial
}) => {
  const [name, setName] = useState(vial?.drug ?? '')
  const [unit, setUnit] = useState(vial?.unit ?? '')

  const [sizes, setSizes] = useState<RadiologyVial['vialSizes']>(() =>
    Array.from({ length: 8 }).map((_, index) => {
      return (
        vial?.vialSizes[index] ?? {
          size: 0,
          priceForVial: 0,
        }
      )
    })
  )

  const validVials = useMemo(() => {
    return sizes.filter((size) => {
      return size.size && size.priceForVial
    })
  }, [sizes])

  const formValid = name && unit && validVials.length

  const handleSave = useCallback(() => {
    if (name && unit && validVials.length) {
      onClose({ type: 'oncology', drug: name, unit, vialSizes: validVials })
    }
  }, [name, unit, validVials, onClose])

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

      <span className="mt-8 text-blue-900 text-xl">Vial Configurations</span>
      <span className="mb-1 text-blue-300 text-sm tracking-wide">
        {'>'} Do not write the units <strong>($, mg, ml, etc.)</strong> in the text inputs.
      </span>

      <hr className="pt-2 pb-3" />

      <div className="grid grid-cols-2 gap-x-12 gap-y-6">
        {sizes.map((size, index) => {
          return (
            <div key={index} className="flex space-x-4 overflow-hidden">
              <span className="text-blue-300 text-sm mt-0.5">{index + 1}.</span>
              <div>
                <InputLabel>Price of Vial</InputLabel>
                <Input
                  onChange={(event) => {
                    const newSizes = [...sizes]

                    newSizes[index] = { ...size, priceForVial: Number(event.target.value) }

                    setSizes(newSizes)
                  }}
                  value={size.priceForVial || ''}
                  placeholder="eg. 30"
                />
              </div>
              <div className="flex-grow">
                <InputLabel>Size of Vial</InputLabel>
                <Input
                  onChange={(event) => {
                    const newSizes = [...sizes]

                    newSizes[index] = { ...size, size: Number(event.target.value) }

                    setSizes(newSizes)
                  }}
                  value={size.size || ''}
                  placeholder="eg. 482"
                />
              </div>
            </div>
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
