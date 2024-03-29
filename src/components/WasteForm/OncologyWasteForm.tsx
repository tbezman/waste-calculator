import * as React from 'react'
import { FC, useEffect, useRef } from 'react'
import { OncologyVial } from '../../vials'
import { oncologyWaste, OncologyWasteConfig } from '../../utils/oncologyWaste'
import { InputLabel, NumberInput } from '../Input'
import { useVials } from '../VialsProvider'
import { OncologyWasteResultModal } from '../WasteResultModal/OncologyWasteResultModal'

export const OncologyWasteForm: FC = () => {
  const [vials] = useVials('oncology')

  const [used, setUsed] = React.useState<string>('')
  const [wastedAmount, setWastedAmount] = React.useState<string>('')
  const [selectedVial, setSelectedVial] = React.useState<OncologyVial | undefined>(vials[0])

  const [bestConfig, setBestConfig] = React.useState<undefined | OncologyWasteConfig>()

  const [showingModal, setShowingModal] = React.useState(false)
  const [onlyPatient, setOnlyPatient] = React.useState(false)

  const calculate = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      if (selectedVial && used && wastedAmount) {
        setBestConfig(oncologyWaste(selectedVial, used, wastedAmount, onlyPatient))

        setShowingModal(true)
      }
    },
    [onlyPatient, selectedVial, used, wastedAmount]
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
        <InputLabel>Wasted</InputLabel>
        <NumberInput value={wastedAmount} placeholder="eg. 100" onChange={(e) => setWastedAmount(e.target.value)} />

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

        <div className="flex items-center mt-8 mb-1 space-x-2">
          <input
            id="only-patient"
            checked={onlyPatient}
            onChange={() => setOnlyPatient((current) => !current)}
            type="checkbox"
          />
          <label htmlFor="only-patient" className="text-sm font-bold leading-none text-blue-900">
            Only Patient?
          </label>
        </div>

        <button type="submit" className="px-3 py-4 mt-1 leading-none text-blue-100 bg-blue-900 rounded">
          Calculate
        </button>
      </div>

      {showingModal && bestConfig && (
        <OncologyWasteResultModal onClose={() => setShowingModal(false)} config={bestConfig} />
      )}
    </form>
  )
}
