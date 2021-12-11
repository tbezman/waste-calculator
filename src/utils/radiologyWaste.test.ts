import { RadiologyVial } from '../vials'
import { radiologyWaste } from './radiologyWaste'

const vial: RadiologyVial = {
  type: 'radiology',
  drug: 'Some Vial',
  unit: 'mg',
  vialSizes: [
    { priceForVial: 10, size: 10 },
    { priceForVial: 5, size: 10 },
  ],
}

describe('radiologyWaste', () => {
  it('can calculate the appropriate waste', () => {
    const config = radiologyWaste(vial, '13')

    expect(config?.totalPrice).toBe(10)
  })
})
