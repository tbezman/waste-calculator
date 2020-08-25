import * as React from 'react'
import * as $C from 'js-combinatorics'
import { initialVials, Vial } from './vials'

const sum = (list: VialCount[]) =>
    list.reduce((prev, next) => prev + next.coefficient * next.size, 0)

type VialCount = { size: number; coefficient: number }

// Generate all array subsets:
function* subsets(sizes: Array<VialCount>): Generator<VialCount[], void, void> {
    if (sizes.length === 0) {
        yield []
    } else {
        const [size, ...rest] = sizes

        for (let i = 0; i < size.coefficient + 1; i++) {
            for (const subset of subsets(rest)) {
                yield [{ size: size.size, coefficient: i }, ...subset]
            }
        }
    }
}

type WasteConfig = {
    config: VialCount[]
    total: number
    waste: number
}

function waste(
    vial: Vial,
    usedString: string,
    wastedAmountString: string,
    onlyPatient: boolean = false
): WasteConfig | undefined {
    const sizes = vial.vialSizes
        .toString()
        .split(',')
        .map((it) => parseInt(it))
        .sort()
    const [smallestVialSize] = sizes
    const wastedAmount = parseFloat(wastedAmountString)
    const used = parseFloat(usedString)

    let best: WasteConfig | undefined

    let allSizes: Array<VialCount> = []
    sizes.forEach((size) => {
        let worstCase = Math.ceil(used / size)

        allSizes.push({ size, coefficient: worstCase })
    })

    const combinations = subsets(allSizes)
    for (const current of combinations) {
        const total = sum(current)

        const minimumOf: number[] = [total - used, smallestVialSize]

        if (onlyPatient) {
            minimumOf.push(wastedAmount)
        }

        const waste = Math.min(...minimumOf)

        if (total < used) continue

        if (!best) {
            best = { total, waste, config: current }

            continue
        }

        if (total < best.total) best = { total, config: current, waste }
    }

    return best
}

const NumberInput: React.FC<JSX.IntrinsicElements['input']> = (props) => (
    <input
        className="px-4 py-2 leading-none text-blue-900 bg-blue-100 border border-blue-900 rounded appearance-none "
        type="number"
        pattern="\d*"
        {...props}
    />
)

const InputLabel: React.FC = ({ children }) => (
    <label className="mt-4 mb-1 text-sm leading-none text-blue-900">
        {children}
    </label>
)

function App() {
    const [used, setUsed] = React.useState<string | undefined>()
    const [wastedAmount, setWastedAmount] = React.useState<string | undefined>()
    const [selectedVial, setSelectedVial] = React.useState<Vial | undefined>(
        initialVials[0]
    )

    const [bestConfig, setBestConfig] = React.useState<
        undefined | WasteConfig
    >()

    const [showingModal, setShowingModal] = React.useState(false)
    const [onlyPatient, setOnlyPatient] = React.useState(false)

    const calculate = React.useCallback(() => {
        setBestConfig(waste(selectedVial, used, wastedAmount, onlyPatient))

        setShowingModal(true)
    }, [selectedVial, used, wastedAmount])

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="flex flex-col w-full max-w-xl md:w-8/12">
                <div className="flex flex-col items-stretch px-10 md:px-20">
                    <InputLabel>Used</InputLabel>
                    <NumberInput
                        value={used}
                        placeholder="Used..."
                        onChange={(e) => setUsed(e.target.value)}
                    />
                    <InputLabel>Wasted</InputLabel>
                    <NumberInput
                        value={wastedAmount}
                        placeholder="Wasted..."
                        onChange={(e) => setWastedAmount(e.target.value)}
                    />

                    <InputLabel>Drug</InputLabel>
                    <select
                        value={selectedVial?.drug}
                        onChange={(e) => {
                            setSelectedVial(
                                initialVials.find(
                                    (vial) => vial.drug === e.target.value
                                )
                            )
                        }}
                        className="px-4 py-2 leading-none text-blue-900 bg-blue-100 border border-blue-900 rounded appearance-none"
                    >
                        {initialVials.map((vial) => (
                            <option>{vial.drug}</option>
                        ))}
                    </select>

                    <div className="flex items-center justify-between mt-4">
                        <label className="mb-1 text-sm font-bold leading-none text-blue-900">
                            Only Patient?
                        </label>
                        <input
                            checked={onlyPatient}
                            onChange={() =>
                                setOnlyPatient((current) => !current)
                            }
                            type="checkbox"
                        />
                    </div>

                    <button
                        type="button"
                        className="px-4 py-2 mt-1 leading-none text-blue-100 bg-blue-900 rounded"
                        onClick={calculate}
                    >
                        Calculate
                    </button>
                </div>

                {showingModal && bestConfig && (
                    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25"></div>

                        <div className="z-10 flex flex-col w-full h-full px-8 py-5 bg-white rounded shadow-xl slide-up md:w-6/12 md:h-auto">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl leading-none text-blue-900 whitespace-no-wrap">
                                    Patient Report
                                </h1>

                                <button
                                    onClick={() => setShowingModal(false)}
                                    className="px-1 py-1 bg-blue-200 rounded"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        className="w-5 h-5 text-blue-900 fill-current"
                                    >
                                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex items-center justify-between mt-4 mb-4">
                                <div className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        className="w-3 h-3 text-blue-900 fill-current"
                                    >
                                        <path d="M17 10.27V4.99a1 1 0 0 0-2 0V15a5 5 0 0 1-10 0v-1.08A6 6 0 0 1 0 8V2C0 .9.9 0 2 0h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1H2v6a4 4 0 1 0 8 0V2H9a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v6a6 6 0 0 1-5 5.92V15a3 3 0 0 0 6 0V5a3 3 0 0 1 6 0v5.27a2 2 0 1 1-2 0z" />
                                    </svg>

                                    <div className="flex items-center justify-between leading-none text-blue-900">
                                        Vial Config
                                    </div>
                                </div>

                                <div className="text-blue-900">
                                    Wasted:{' '}
                                    <span className="font-bold">
                                        {bestConfig.waste}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                {bestConfig.config
                                    .filter(
                                        ({ coefficient }) => coefficient !== 0
                                    )
                                    .map(({ size, coefficient }) => {
                                        return (
                                            <div className="flex items-end">
                                                <span className="p-2 font-bold leading-none bg-blue-100 rounded">
                                                    <span className="text-sm text-blue-700">
                                                        {coefficient}x
                                                    </span>
                                                    <span className="text-blue-900">
                                                        {size}
                                                    </span>
                                                </span>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
