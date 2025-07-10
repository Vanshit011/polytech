import { ProductCategory } from '../types';

export const productCategories: ProductCategory[] = [
  {
    id: 'abs',
    name: 'ABS (Acrylonitrile Butadiene Styrene)',
    description: 'Premium reprocessed ABS granules with superior mechanical properties',
    products: [
      {
        id: 'abs-black',
        name: 'ABS Black',
        category: 'ABS',
        description: 'Premium black ABS granules with enhanced UV resistance and superior finish. Perfect for automotive and electronic applications requiring high impact strength and dimensional stability.',
        specifications: [
          'Melt Flow Index: 10-30 g/10min',
          'Impact Strength: 25-45 kJ/m²',
          'Tensile Strength: 40-55 MPa',
          'Density: 1.02-1.06 g/cm³',
          'Processing Temperature: 200-250°C',
          'Minimum Order: 500 KG'
        ],
        features: [
          'UV stable black color',
          'Superior impact resistance',
          'Excellent surface finish',
          'Good chemical resistance',
          'Heat resistant',
          'Consistent quality'
        ],
        image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
        grade: 'Black',
        color: 'Black',
        applications: [
          'Automotive exterior parts',
          'Electronic device housings',
          'Appliance exteriors',
          'Industrial components',
          'Consumer electronics'
        ],
        properties: [
          'High impact strength',
          'UV resistance',
          'Excellent processability',
          'Good surface finish',
          'Chemical resistance'
        ]
      }
    ]
  },
  {
    id: 'pc',
    name: 'PC (Polycarbonate)',
    description: 'High-performance reprocessed PC granules with exceptional clarity and strength',
    products: [
      {
        id: 'pc-black',
        name: 'PC Black',
        category: 'PC',
        description: 'High-performance black polycarbonate granules with exceptional impact resistance and temperature stability. Ideal for demanding applications requiring superior mechanical properties.',
        specifications: [
          'Melt Flow Index: 5-15 g/10min',
          'Impact Strength: 60-80 kJ/m²',
          'Tensile Strength: 55-70 MPa',
          'Density: 1.18-1.22 g/cm³',
          'Processing Temperature: 260-320°C',
          'Minimum Order: 500 KG'
        ],
        features: [
          'Outstanding impact resistance',
          'High temperature resistance',
          'Excellent dimensional stability',
          'UV resistant',
          'Superior mechanical properties',
          'Consistent quality'
        ],
        image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
        grade: 'Black',
        color: 'Black',
        applications: [
          'Automotive components',
          'Electronic housings',
          'Safety equipment',
          'Industrial parts',
          'Protective covers'
        ],
        properties: [
          'High impact strength',
          'Temperature resistance',
          'Dimensional stability',
          'Chemical resistance',
          'UV protection'
        ]
      }
    ]
  },
  {
    id: 'hips',
    name: 'HIPS (High Impact Polystyrene)',
    description: 'High-quality reprocessed HIPS granules for various industrial applications',
    products: [
      {
        id: 'hips-black',
        name: 'HIPS Black',
        category: 'HIPS',
        description: 'High-quality black HIPS granules ideal for automotive and electronic applications. Excellent impact resistance with consistent processing characteristics.',
        specifications: [
          'Melt Flow Index: 2-8 g/10min',
          'Impact Strength: 15-25 kJ/m²',
          'Tensile Strength: 20-35 MPa',
          'Density: 1.04-1.06 g/cm³',
          'Processing Temperature: 180-220°C',
          'Minimum Order: 1000 KG'
        ],
        features: [
          'UV stable black color',
          'Excellent impact resistance',
          'Good dimensional stability',
          'Heat resistant',
          'Easy to process',
          'Consistent quality'
        ],
        image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
        grade: 'Black',
        color: 'Black',
        applications: [
          'Automotive interior parts',
          'Electronic housings',
          'Appliance components',
          'Industrial containers',
          'Consumer goods'
        ],
        properties: [
          'High impact strength',
          'UV resistance',
          'Good chemical resistance',
          'Excellent processability',
          'Heat stability'
        ]
      }
    ]
  },
  {
    id: 'pc-abs',
    name: 'PC/ABS Blend',
    description: 'Premium PC/ABS blend granules combining the best properties of both materials',
    products: [
      {
        id: 'pc-abs-black',
        name: 'PC/ABS Black',
        category: 'PC/ABS',
        description: 'Premium PC/ABS blend granules in black color, combining the excellent impact resistance of PC with the processability of ABS. Perfect for demanding applications.',
        specifications: [
          'Melt Flow Index: 8-20 g/10min',
          'Impact Strength: 40-60 kJ/m²',
          'Tensile Strength: 45-60 MPa',
          'Density: 1.10-1.15 g/cm³',
          'Processing Temperature: 220-280°C',
          'Minimum Order: 500 KG'
        ],
        features: [
          'Excellent impact resistance',
          'Superior processability',
          'Good dimensional stability',
          'Heat resistant',
          'Chemical resistant',
          'Consistent quality'
        ],
        image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
        grade: 'Black',
        color: 'Black',
        applications: [
          'Automotive parts',
          'Electronic housings',
          'Appliance components',
          'Industrial equipment',
          'Consumer products'
        ],
        properties: [
          'Combined PC/ABS benefits',
          'High impact strength',
          'Excellent processability',
          'Temperature resistance',
          'Chemical resistance'
        ]
      }
    ]
  }
];