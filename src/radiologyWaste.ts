// Generate all array subsets:
import { RadiologyVial } from './vials'

type VialCount = { size: number; coefficient: number }

const sum = (list: VialCount[]) => list.reduce((prev, next) => prev + next.coefficient * next.size, 0)

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
  config: VialCount[]
  total: number
  waste: number
}

export function radiologyWaste(
  vial: RadiologyVial,
  usedString: string,
  wastedAmountString: string,
  onlyPatient = false
): RadiologyWasteConfig | undefined {
  const sizes = vial.vialSizes.sort()
  const [smallestVialSize] = sizes

  const wastedAmount = parseFloat(wastedAmountString || '0')
  const used = parseFloat(usedString || '0')

  if (wastedAmount === 0 && used === 0) {
    return undefined
  }

  let best: RadiologyWasteConfig | undefined

  const allSizes: Array<VialCount> = []
  sizes.forEach((size) => {
    const worstCase = Math.ceil(used / size)

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
