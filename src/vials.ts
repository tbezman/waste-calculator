export type Vial = {
    drug: string
    vialSizes: string
    billableUnits: number
    unit: string
    ndc: string
}

export const initialVials: Vial[] = [
    {
        drug: 'Ado-Trastuzumab',
        vialSizes: '100,160',
        billableUnits: 1,
        unit: 'mg',
        ndc: '50242008801',
    },
    {
        drug: 'Bevacizumab',
        vialSizes: '100,400',
        billableUnits: 10,
        unit: 'mg',
        ndc: '50242006001',
    },
    {
        drug: 'Azactidine',
        vialSizes: '100',
        billableUnits: 1,
        unit: 'mg',
        ndc: '59572010201',
    },
    {
        drug: 'Belimumab',
        vialSizes: '120,400',
        billableUnits: 10,
        unit: 'mg',
        ndc: '49401010101',
    },
    {
        drug: 'Bendamustine',
        vialSizes: '25,100',
        billableUnits: 1,
        unit: 'mg',
        ndc: '63459034804',
    },
    {
        drug: 'Bortezomib',
        vialSizes: '3.5',
        billableUnits: 1,
        unit: 'mg',
        ndc: 'NOTYETSET',
    },
    {
        drug: 'Brentuximab',
        vialSizes: '50',
        billableUnits: 1,
        unit: 'mg',
        ndc: '51144005001',
    },
    {
        drug: 'Carfilzomib',
        vialSizes: '10,30,60',
        billableUnits: 1,
        unit: 'mg',
        ndc: '76075010201',
    },
    {
        drug: 'Cetuximab',
        vialSizes: '100,200',
        billableUnits: 10,
        unit: 'mg',
        ndc: '66733094823',
    },
    {
        drug: 'Decitabine',
        vialSizes: '50',
        billableUnits: 1,
        unit: 'mg',
        ndc: '47335036141',
    },
    {
        drug: 'Ipilimumab',
        vialSizes: '50,200',
        billableUnits: 1,
        unit: 'mg',
        ndc: '3232711',
    },
    {
        drug: 'Nelarabine',
        vialSizes: '250',
        billableUnits: 50,
        unit: 'mg',
        ndc: '78068306',
    },
    {
        drug: 'Nivolumab',
        vialSizes: '40,100,240',
        billableUnits: 1,
        unit: 'mg',
        ndc: '3377211',
    },

    {
        drug: 'Olaratumab',
        vialSizes: '500',
        billableUnits: 10,
        unit: 'mg',
        ndc: 'NOTYETSET',
    },
    {
        drug: 'Paclitaxel abraxane',
        vialSizes: '100',
        billableUnits: 1,
        unit: 'mg',
        ndc: '68817013450',
    },
    {
        drug: 'Pembrolizumab',
        vialSizes: '100',
        billableUnits: 1,
        unit: 'mg',
        ndc: '6302602',
    },
    {
        drug: 'Pemetrexed',
        vialSizes: '100,500',
        billableUnits: 10,
        unit: 'mg',
        ndc: '2764001',
    },
    {
        drug: 'Pertuzumab',
        vialSizes: '420',
        billableUnits: 1,
        unit: 'mg',
        ndc: '50242014501',
    },
    {
        drug: 'Plerixafor',
        vialSizes: '24',
        billableUnits: 1,
        unit: 'mg',
        ndc: '24586201',
    },
    {
        drug: 'Ramucirumab',
        vialSizes: '100,500',
        billableUnits: 5,
        unit: 'mg',
        ndc: '2766901',
    },
    {
        drug: 'Romidepsin',
        vialSizes: '10',
        billableUnits: 1,
        unit: 'mg',
        ndc: '59572098401',
    },
    {
        drug: 'Romiplostim',
        vialSizes: '250,500',
        billableUnits: 10,
        unit: 'mcgs',
        ndc: '55513022101',
    },
    {
        drug: 'Tocilizumab',
        vialSizes: '80,200,400',
        billableUnits: 1,
        unit: 'mg',
        ndc: '50242013501',
    },
    {
        drug: 'Daratumumab',
        vialSizes: '100,400',
        billableUnits: 10,
        unit: 'mg',
        ndc: '57894050205',
    },
    {
        drug: 'trabectedin',
        vialSizes: '1',
        billableUnits: 1,
        unit: 'mg',
        ndc: '59676061001',
    },
    {
        drug: 'paclitaxel',
        vialSizes: '100',
        billableUnits: 1,
        unit: 'mg',
        ndc: '51991093698',
    },
    {
        drug: 'doxorubicin liposome',
        vialSizes: '20,50',
        billableUnits: 10,
        unit: 'mg',
        ndc: '43598028335',
    },
    {
        drug: 'doxorubicin hcl',
        vialSizes: '20,50',
        billableUnits: 10,
        unit: 'mg',
        ndc: '143954601',
    },
    {
        drug: 'doxorubicin inj',
        vialSizes: '20,50',
        billableUnits: 10,
        unit: 'mg',
        ndc: '',
    },
    {
        drug: 'vincristine',
        vialSizes: '5',
        billableUnits: 1,
        unit: 'mg',
        ndc: '61703030906',
    },
    {
        drug: 'azacitadine',
        vialSizes: '100',
        billableUnits: 1,
        ndc: '',
        unit: 'mg',
    },
    {
        drug: 'Trastuzumab',
        vialSizes: '150',
        billableUnits: 10,
        unit: 'mg',
        ndc: '',
    },
    {
        drug: 'Durvalumab',
        vialSizes: '120,500',
        billableUnits: 10,
        unit: 'mg',
        ndc: '',
    },
    {
        drug: 'Cabazitaxel',
        vialSizes: '60',
        billableUnits: 1,
        unit: 'mg',
        ndc: '',
    },
    {
        drug: 'Elotuzumab',
        vialSizes: '300,400',
        billableUnits: 1,
        unit: 'mg',
        ndc: '',
    },
    {
        drug: 'Irinotecan Liposomal',
        vialSizes: '43',
        billableUnits: 1,
        unit: 'mg',
        ndc: '',
    },
    {
        drug: 'Rituximab',
        vialSizes: '100,500',
        billableUnits: 10,
        unit: 'mg',
        ndc: '',
    },
].sort((a, b) => a.drug.toLowerCase().localeCompare(b.drug.toLowerCase()))
