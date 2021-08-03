export type Vial = {
    drug: string
    vialSizes: string
    unit: string
}

export const initialVials: Vial[] = [
    {
        drug: 'Ado-Trastuzumab',
        vialSizes: '100,160',
        unit: 'mg',
    },
    {
        drug: 'Bevacizumab',
        vialSizes: '100,400',
        unit: 'mg',
    },
    {
        drug: 'Azactidine',
        vialSizes: '100',
        unit: 'mg',
    },
    {
        drug: 'Belimumab',
        vialSizes: '120,400',
        unit: 'mg',
    },
    {
        drug: 'Bendamustine',
        vialSizes: '25,100',
        unit: 'mg',
    },
    {
        drug: 'Bortezomib',
        vialSizes: '3.5',
        unit: 'mg',
    },
    {
        drug: 'Brentuximab',
        vialSizes: '50',
        unit: 'mg',
    },
    {
        drug: 'Carfilzomib',
        vialSizes: '10,30,60',
        unit: 'mg',
    },
    {
        drug: 'Cetuximab',
        vialSizes: '100,200',
        unit: 'mg',
    },
    {
        drug: 'Decitabine',
        vialSizes: '50',
        unit: 'mg',
    },
    {
        drug: 'Ipilimumab',
        vialSizes: '50,200',
        unit: 'mg',
    },
    {
        drug: 'Nelarabine',
        vialSizes: '250',
        unit: 'mg',
    },
    {
        drug: 'Nivolumab',
        vialSizes: '40,100,240',
        unit: 'mg',
    },

    {
        drug: 'Olaratumab',
        vialSizes: '500',
        unit: 'mg',
    },
    {
        drug: 'Paclitaxel abraxane',
        vialSizes: '100',
        unit: 'mg',
    },
    {
        drug: 'Pembrolizumab',
        vialSizes: '100',
        unit: 'mg',
    },
    {
        drug: 'Pemetrexed',
        vialSizes: '100,500',
        unit: 'mg',
    },
    {
        drug: 'Pertuzumab',
        vialSizes: '420',
        unit: 'mg',
    },
    {
        drug: 'Plerixafor',
        vialSizes: '24',
        unit: 'mg',
    },
    {
        drug: 'Ramucirumab',
        vialSizes: '100,500',
        unit: 'mg',
    },
    {
        drug: 'Romidepsin',
        vialSizes: '10',
        unit: 'mg',
    },
    {
        drug: 'Romiplostim',
        vialSizes: '250,500',
        unit: 'mcgs',
    },
    {
        drug: 'Tocilizumab',
        vialSizes: '80,200,400',
        unit: 'mg',
    },
    {
        drug: 'Daratumumab',
        vialSizes: '100,400',
        unit: 'mg',
    },
    {
        drug: 'trabectedin',
        vialSizes: '1',
        unit: 'mg',
    },
    {
        drug: 'paclitaxel',
        vialSizes: '100',
        unit: 'mg',
    },
    {
        drug: 'doxorubicin liposome',
        vialSizes: '20,50',
        unit: 'mg',
    },
    {
        drug: 'doxorubicin hcl',
        vialSizes: '20,50',
        unit: 'mg',
    },
    {
        drug: 'doxorubicin inj',
        vialSizes: '20,50',
        unit: 'mg',
    },
    {
        drug: 'vincristine',
        vialSizes: '5',
        unit: 'mg',
    },
    {
        drug: 'azacitadine',
        vialSizes: '100',
        unit: 'mg',
    },
    {
        drug: 'Trastuzumab',
        vialSizes: '150',
        unit: 'mg',
    },
    {
        drug: 'Durvalumab',
        vialSizes: '120,500',
        unit: 'mg',
    },
    {
        drug: 'Cabazitaxel',
        vialSizes: '60',
        unit: 'mg',
    },
    {
        drug: 'Elotuzumab',
        vialSizes: '300,400',
        unit: 'mg',
    },
    {
        drug: 'Irinotecan Liposomal',
        vialSizes: '43',
        unit: 'mg',
    },
    {
        drug: 'Rituximab',
        vialSizes: '100,500',
        unit: 'mg',
    },
    {
        drug: 'Atezolizumab',
        vialSizes: '840,1200',
        unit: 'mg',
    },
    {
        drug: 'Enfortumab Vedotin',
        vialSizes: '20,30',
        unit: 'mg',
    },
    {
        drug: 'Daptomycin',
        vialSizes: '350,500',
        unit: 'mg',
    },
].sort((a, b) => a.drug.toLowerCase().localeCompare(b.drug.toLowerCase()))
