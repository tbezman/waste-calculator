// Generate all array subsets:
import { RadiologyVial } from '../vials'

type VialCount = { size: RadiologyVial['vialSizes'][number]; coefficient: number }

const sumUnits = (list: VialCount[]) => list.reduce((prev, next) => prev + next.coefficient * next.size.size, 0)
const sumPrice = (list: VialCount[]) => list.reduce((prev, next) => prev + next.coefficient * next.size.priceForVial, 0)

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

export type RadiologyWasteConfig = {
  vial: RadiologyVial
  config: VialCount[]
  totalUnitsGiven: number
  totalPrice: number
  wastedUnits: number
}

export function radiologyWaste(vial: RadiologyVial, usedString: string): RadiologyWasteConfig | undefined {
  const sizes = vial.vialSizes.sort((a, b) => a.size - b.size)

  const used = parseFloat(usedString || '0')

  if (used === 0) {
    return undefined
  }

  let best: RadiologyWasteConfig | undefined

  const allSizes: Array<VialCount> = []
  sizes.forEach((size) => {
    const worstCase = Math.ceil(used / size.size)

    allSizes.push({ size, coefficient: worstCase })
  })

  const combinations = subsets(allSizes)
  for (const config of combinations) {
    const totalUnitsGiven = sumUnits(config)
    const totalPrice = sumPrice(config)

    if (totalUnitsGiven < used) continue

    const wastedUnits = totalUnitsGiven - used

    if (!best) {
      best = { totalUnitsGiven, totalPrice, wastedUnits, config, vial }

      continue
    }

    if (totalPrice < best.totalPrice) best = { totalUnitsGiven, totalPrice, config, wastedUnits, vial }
  }

  return best
}
