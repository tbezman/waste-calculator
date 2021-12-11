import { oncologyWaste } from './oncologyWaste'
import { OncologyVial } from '../vials'

const vial: OncologyVial = {
  type: 'oncology',
  drug: 'Some Vial',
  unit: 'mg',
  vialSizes: [7, 10, 18],
}

describe('oncologyWaste', () => {
  it('can calculate the appropriate waste', () => {
    const config = oncologyWaste(vial, '13', '20', false)

    expect(config?.waste).toBe(1)
  })
})
