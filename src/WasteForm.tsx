import { FC, useEffect, useRef } from 'react'
import { initialVials, Vial } from './vials'
import * as React from 'react'
import { waste, WasteConfig } from './waste'
import { WasteResultModal } from './WasteResultModal'

const NumberInput = React.forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>((props, ref) => (
  <input
    ref={ref}
    className="px-3 py-4 leading-none text-blue-900 bg-blue-100 border border-blue-900 rounded appearance-none "
    type="number"
    pattern="\d*"
    {...props}
  />
))

const InputLabel: React.FC = ({ children }) => (
  <label className="mt-8 mb-2 text-sm leading-none text-blue-900">{children}</label>
)

export const WasteForm: FC = () => {
  const [used, setUsed] = React.useState<string>('')
  const [wastedAmount, setWastedAmount] = React.useState<string>('')
  const [selectedVial, setSelectedVial] = React.useState<Vial | undefined>(initialVials[0])

  const [bestConfig, setBestConfig] = React.useState<undefined | WasteConfig>()

  const [showingModal, setShowingModal] = React.useState(false)
  const [onlyPatient, setOnlyPatient] = React.useState(false)

  const calculate = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      if (selectedVial && used && wastedAmount) {
        setBestConfig(waste(selectedVial, used, wastedAmount, onlyPatient))

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

        <NumberInput ref={firstInputRef} value={used} placeholder="Used..." onChange={(e) => setUsed(e.target.value)} />
        <InputLabel>Wasted</InputLabel>
        <NumberInput value={wastedAmount} placeholder="Wasted..." onChange={(e) => setWastedAmount(e.target.value)} />

        <InputLabel>Drug</InputLabel>
        <select
          value={selectedVial?.drug}
          onChange={(e) => {
            setSelectedVial(initialVials.find((vial) => vial.drug === e.target.value))
          }}
          className="px-3 py-4 leading-none text-blue-900 bg-blue-100 border border-blue-900 rounded appearance-none"
        >
          {initialVials.map((vial) => (
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

      {showingModal && bestConfig && <WasteResultModal onClose={() => setShowingModal(false)} config={bestConfig} />}
    </form>
  )
}
