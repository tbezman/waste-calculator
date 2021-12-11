import * as React from 'react'
import { FC, useEffect, useRef } from 'react'
import { RadiologyVial } from '../../vials'
import { InputLabel, NumberInput } from '../Input'
import { useVials } from '../VialsProvider'
import { radiologyWaste, RadiologyWasteConfig } from '../../utils/radiologyWaste'
import { RadiologyWasteResultModal } from '../WasteResultModal/RadiologyWasteResultModal'
import { Link } from 'react-router-dom'

export const RadiologyWasteForm: FC = () => {
  const [vials] = useVials('radiology')

  const [used, setUsed] = React.useState<string>('')
  const [selectedVial, setSelectedVial] = React.useState<RadiologyVial | undefined>(vials[0])

  const [bestConfig, setBestConfig] = React.useState<undefined | RadiologyWasteConfig>()

  const [showingModal, setShowingModal] = React.useState(false)

  const calculate = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      if (selectedVial && used) {
        setBestConfig(radiologyWaste(selectedVial, used))

        setShowingModal(true)
      }
    },
    [selectedVial, used]
  )

  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!showingModal) {
      firstInputRef.current?.focus()
    }
  }, [showingModal])

  return (
    <form className="flex flex-col w-96" onSubmit={calculate}>
      <div className="flex flex-col items-stretch">
        <InputLabel>Used</InputLabel>

        <NumberInput ref={firstInputRef} value={used} placeholder="eg. 50" onChange={(e) => setUsed(e.target.value)} />

        <InputLabel>Drug</InputLabel>
        <select
          value={selectedVial?.drug}
          onChange={(e) => {
            setSelectedVial(vials.find((vial) => vial.drug === e.target.value))
          }}
          className="px-3 py-4 leading-none text-blue-900 bg-blue-50 border border-gray-500 rounded appearance-none"
        >
          {vials.map((vial) => (
            <option key={vial.drug}>{vial.drug}</option>
          ))}
        </select>

        <button type="submit" className="px-3 py-4 mt-12 leading-none text-blue-100 bg-blue-900 rounded">
          Calculate
        </button>
      </div>

      {showingModal && bestConfig && (
        <RadiologyWasteResultModal onClose={() => setShowingModal(false)} config={bestConfig} />
      )}
    </form>
  )
}
