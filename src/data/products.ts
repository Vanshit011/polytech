import { ProductCategory } from '../types';

export const productCategories: ProductCategory[] = [
  {
    id: 'hips',
    name: 'HIPS (High Impact Polystyrene)',
    description: 'High-quality reprocessed HIPS granules for various industrial applications',
    products: [
      {
        id: 'hips-natural',
        name: 'HIPS Natural Grade',
        category: 'HIPS',
        description: 'Premium quality natural HIPS granules with excellent impact resistance and processability',
        specifications: [
          'Melt Flow Index: 2-8 g/10min',
          'Impact Strength: 15-25 kJ/m²',
          'Tensile Strength: 20-35 MPa',
          'Density: 1.04-1.06 g/cm³',
          'Processing Temperature: 180-220°C'
        ],
        features: [
          'Excellent impact resistance',
          'Good dimensional stability',
          'Easy to process',
          'Cost-effective solution',
          'Consistent quality'
        ],
        image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
        grade: 'Natural',
        color: 'Natural/White',
        applications: [
          'Packaging containers',
          'Disposable cups and plates',
          'Refrigerator liners',
          'Toys and household items',
          'Electronic housings'
        ],
        properties: [
          'High impact strength',
          'Good chemical resistance',
          'Excellent processability',
          'Low shrinkage',
          'Good surface finish'
        ]
      },
      {
        id: 'hips-black',
        name: 'HIPS Black Grade',
        category: 'HIPS',
        description: 'High-quality black HIPS granules ideal for automotive and electronic applications',
        specifications: [
          'Melt Flow Index: 2-8 g/10min',
          'Impact Strength: 15-25 kJ/m²',
          'Tensile Strength: 20-35 MPa',
          'Density: 1.04-1.06 g/cm³',
          'Processing Temperature: 180-220°C'
        ],
        features: [
          'UV stable black color',
          'Excellent impact resistance',
          'Good dimensional stability',
          'Heat resistant',
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
    id: 'abs',
    name: 'ABS (Acrylonitrile Butadiene Styrene)',
    description: 'Premium reprocessed ABS granules with superior mechanical properties',
    products: [
      {
        id: 'abs-natural',
        name: 'ABS Natural Grade',
        category: 'ABS',
        description: 'High-performance natural ABS granules with excellent toughness and dimensional stability',
        specifications: [
          'Melt Flow Index: 10-30 g/10min',
          'Impact Strength: 25-45 kJ/m²',
          'Tensile Strength: 40-55 MPa',
          'Density: 1.02-1.06 g/cm³',
          'Processing Temperature: 200-250°C'
        ],
        features: [
          'Superior impact resistance',
          'Excellent dimensional stability',
          'Good chemical resistance',
          'Easy to process and paint',
          'High strength and toughness'
        ],
        image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
        grade: 'Natural',
        color: 'Natural/Ivory',
        applications: [
          'Automotive parts',
          'Electronic housings',
          'Appliance components',
          'Toys and sporting goods',
          'Pipe fittings'
        ],
        properties: [
          'High impact strength',
          'Good chemical resistance',
          'Excellent processability',
          'Good surface finish',
          'Dimensional stability'
        ]
      },
      {
        id: 'abs-black',
        name: 'ABS Black Grade',
        category: 'ABS',
        description: 'Premium black ABS granules with enhanced UV resistance and superior finish',
        specifications: [
          'Melt Flow Index: 10-30 g/10min',
          'Impact Strength: 25-45 kJ/m²',
          'Tensile Strength: 40-55 MPa',
          'Density: 1.02-1.06 g/cm³',
          'Processing Temperature: 200-250°C'
        ],
        features: [
          'UV stable black color',
          'Superior impact resistance',
          'Excellent surface finish',
          'Good chemical resistance',
          'Heat resistant'
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
      },
      {
        id: 'abs-colored',
        name: 'ABS Colored Grades',
        category: 'ABS',
        description: 'Custom colored ABS granules available in various colors for specific applications',
        specifications: [
          'Melt Flow Index: 10-30 g/10min',
          'Impact Strength: 25-45 kJ/m²',
          'Tensile Strength: 40-55 MPa',
          'Density: 1.02-1.06 g/cm³',
          'Processing Temperature: 200-250°C'
        ],
        features: [
          'Custom color matching',
          'Consistent color distribution',
          'Superior impact resistance',
          'Good chemical resistance',
          'Excellent processability'
        ],
        image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
        grade: 'Colored',
        color: 'Various Colors',
        applications: [
          'Toys and games',
          'Consumer goods',
          'Appliance components',
          'Automotive interior',
          'Electronic accessories'
        ],
        properties: [
          'Color consistency',
          'High impact strength',
          'Good chemical resistance',
          'Excellent processability',
          'Surface quality'
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
        id: 'pc-clear',
        name: 'PC Clear Grade',
        category: 'PC',
        description: 'Crystal clear polycarbonate granules with excellent optical properties and impact resistance',
        specifications: [
          'Melt Flow Index: 5-15 g/10min',
          'Impact Strength: 60-80 kJ/m²',
          'Tensile Strength: 55-70 MPa',
          'Density: 1.18-1.22 g/cm³',
          'Processing Temperature: 260-320°C'
        ],
        features: [
          'Exceptional clarity',
          'Outstanding impact resistance',
          'High temperature resistance',
          'Excellent dimensional stability',
          'UV resistant grades available'
        ],
        image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
        grade: 'Clear',
        color: 'Crystal Clear',
        applications: [
          'Optical lenses',
          'Safety glazing',
          'Electronic components',
          'Medical devices',
          'Automotive lighting'
        ],
        properties: [
          'Exceptional clarity',
          'High impact strength',
          'Temperature resistance',
          'Dimensional stability',
          'Chemical resistance'
        ]
      },
      {
        id: 'pc-tinted',
        name: 'PC Tinted Grades',
        category: 'PC',
        description: 'Tinted polycarbonate granules with enhanced UV protection and aesthetic appeal',
        specifications: [
          'Melt Flow Index: 5-15 g/10min',
          'Impact Strength: 60-80 kJ/m²',
          'Tensile Strength: 55-70 MPa',
          'Density: 1.18-1.22 g/cm³',
          'Processing Temperature: 260-320°C'
        ],
        features: [
          'UV protection',
          'Outstanding impact resistance',
          'High temperature resistance',
          'Various tint options',
          'Excellent processability'
        ],
        image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
        grade: 'Tinted',
        color: 'Bronze/Gray/Blue',
        applications: [
          'Architectural glazing',
          'Automotive windows',
          'Safety shields',
          'Greenhouse panels',
          'Protective covers'
        ],
        properties: [
          'UV protection',
          'High impact strength',
          'Temperature resistance',
          'Weather resistance',
          'Optical properties'
        ]
      }
    ]
  }
];