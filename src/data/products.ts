import { ProductCategory } from '../types';
import absBlackImage from '../assets/20250707_1907_ABS Black Granules_simple_compose_01jzjhjhceeq3v53bkzccneyvz.png'
import pcBlackImage from '../assets/20250707_1911_Black Granules Display_simple_compose_01jzjhsz2jeqcvjhsav9mm2g5g.png'
import hipsBlackImage from '../assets/20250707_1912_Black Granules Pattern_simple_compose_01jzjhy5mae94awqxkg7z03qys.png'
import PCABSImage from '../assets/20250717_1154_Black Granules Close-up_simple_compose_01k0bgsdj0e3krg9zwgegx2a3s.png'
import PCPBTImage from '../assets/20250717_1158_Black PC_PBT Granules_simple_compose_01k0bgzdpzfknr3myb8vr3agz7.png'
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
        image: absBlackImage,
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
        image: pcBlackImage,
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
        image: hipsBlackImage,
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
        image: PCABSImage,
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
  },
  {
    id: 'pc-pbt',
    name: 'PC/PBT Granules',
    description: 'High-performance PC/PBT blend granules offering superior toughness, dimensional stability, and excellent chemical resistance.',
    products: [
      {
        id: 'pc-pbt-black',
        name: 'PC/PBT Black',
        category: 'PC/PBT',
        description: 'High-performance PC/PBT blend granules in black color, offering exceptional chemical resistance, low moisture absorption, and outstanding mechanical properties. Ideal for automotive, electrical, and industrial applications.',
        specifications: [
          'Melt Flow Index: 10-25 g/10min',
          'Impact Strength: 45-70 kJ/m²',
          'Tensile Strength: 50-65 MPa',
          'Density: 1.20-1.25 g/cm³',
          'Processing Temperature: 230-270°C',
          'Minimum Order: 500 KG'
        ],
        features: [
          'Excellent chemical resistance',
          'Low moisture absorption',
          'High dimensional stability',
          'Good thermal performance',
          'Tough and durable',
          'Suitable for high-precision parts'
        ],
        image: PCPBTImage,
        grade: 'Black',
        color: 'Black',
        applications: [
          'Automotive housings and connectors',
          'Electrical switchgear',
          'Under-the-hood parts',
          'Industrial machinery components',
          'Appliance structural parts'
        ],
        properties: [
          'PC/PBT blend performance',
          'Resists deformation under heat',
          'High strength and toughness',
          'Consistent processing behavior',
          'Good chemical and wear resistance'
        ]
      }
    ]
  }

];