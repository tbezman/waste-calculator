export type OncologyVial = {
  type: 'oncology'
  drug: string
  unit: string
  vialSizes: number[]
}

export type RadiologyVial = {
  type: 'radiology'
  drug: string
  unit: string
  vialSizes: Array<{ size: number; priceForVial: number }>
}

export type VialTypes = {
  oncology: OncologyVial
  radiology: RadiologyVial
}

export type Vial = RadiologyVial | OncologyVial

const radiologyType = 'oncology' as const

export const initialOncologyVials: OncologyVial[] = [
  { type: radiologyType, drug: 'Ado-Trastuzumab', vialSizes: [100, 160], unit: 'mg' },
  { type: radiologyType, drug: 'Atezolizumab', vialSizes: [840, 1200], unit: 'mg' },
  { type: radiologyType, drug: 'azacitadine', vialSizes: [100], unit: 'mg' },
  { type: radiologyType, drug: 'Azactidine', vialSizes: [100], unit: 'mg' },
  { type: radiologyType, drug: 'Belimumab', vialSizes: [120, 400], unit: 'mg' },
  { type: radiologyType, drug: 'Bendamustine', vialSizes: [25, 100], unit: 'mg' },
  { type: radiologyType, drug: 'Bevacizumab', vialSizes: [100, 400], unit: 'mg' },
  { type: radiologyType, drug: 'Bortezomib', vialSizes: [3.5], unit: 'mg' },
  { type: radiologyType, drug: 'Brentuximab', vialSizes: [50], unit: 'mg' },
  { type: radiologyType, drug: 'Cabazitaxel', vialSizes: [60], unit: 'mg' },
  { type: radiologyType, drug: 'Carfilzomib', vialSizes: [10, 30, 60], unit: 'mg' },
  { type: radiologyType, drug: 'Cetuximab', vialSizes: [100, 200], unit: 'mg' },
  { type: radiologyType, drug: 'Daptomycin', vialSizes: [350, 500], unit: 'mg' },
  { type: radiologyType, drug: 'Daratumumab', vialSizes: [100, 400], unit: 'mg' },
  { type: radiologyType, drug: 'Decitabine', vialSizes: [50], unit: 'mg' },
  { type: radiologyType, drug: 'doxorubicin hcl', vialSizes: [20, 50], unit: 'mg' },
  { type: radiologyType, drug: 'doxorubicin inj', vialSizes: [20, 50], unit: 'mg' },
  { type: radiologyType, drug: 'doxorubicin liposome', vialSizes: [20, 50], unit: 'mg' },
  { type: radiologyType, drug: 'Durvalumab', vialSizes: [120, 500], unit: 'mg' },
  { type: radiologyType, drug: 'Elotuzumab', vialSizes: [300, 400], unit: 'mg' },
  { type: radiologyType, drug: 'Enfortumab Vedotin', vialSizes: [20, 30], unit: 'mg' },
  { type: radiologyType, drug: 'Gadobutrol', vialSizes: [2, 7.5], unit: 'ml' },
  { type: radiologyType, drug: 'Ipilimumab', vialSizes: [50, 200], unit: 'mg' },
  { type: radiologyType, drug: 'Irinotecan Liposomal', vialSizes: [43], unit: 'mg' },
  { type: radiologyType, drug: 'Nelarabine', vialSizes: [250], unit: 'mg' },
  { type: radiologyType, drug: 'Nivolumab', vialSizes: [40, 100, 240], unit: 'mg' },
  { type: radiologyType, drug: 'Olaratumab', vialSizes: [500], unit: 'mg' },
  { type: radiologyType, drug: 'paclitaxel', vialSizes: [100], unit: 'mg' },
  { type: radiologyType, drug: 'Paclitaxel abraxane', vialSizes: [100], unit: 'mg' },
  { type: radiologyType, drug: 'Pembrolizumab', vialSizes: [100], unit: 'mg' },
  { type: radiologyType, drug: 'Pemetrexed', vialSizes: [100, 500], unit: 'mg' },
  { type: radiologyType, drug: 'Pertuzumab', vialSizes: [420], unit: 'mg' },
  { type: radiologyType, drug: 'Plerixafor', vialSizes: [24], unit: 'mg' },
  { type: radiologyType, drug: 'Ramucirumab', vialSizes: [100, 500], unit: 'mg' },
  { type: radiologyType, drug: 'Rituximab', vialSizes: [100, 500], unit: 'mg' },
  { type: radiologyType, drug: 'Romidepsin', vialSizes: [10], unit: 'mg' },
  { type: radiologyType, drug: 'Romiplostim', vialSizes: [250, 500], unit: 'mcgs' },
  { type: radiologyType, drug: 'Tocilizumab', vialSizes: [80, 200, 400], unit: 'mg' },
  { type: radiologyType, drug: 'trabectedin', vialSizes: [1], unit: 'mg' },
  { type: radiologyType, drug: 'Trastuzumab', vialSizes: [150], unit: 'mg' },
  { type: radiologyType, drug: 'vincristine', vialSizes: [5], unit: 'mg' },
].sort((a, b) => a.drug.toLowerCase().localeCompare(b.drug.toLowerCase()))
