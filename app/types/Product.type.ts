type MetalCode =
  | '9W'
  | '18W'
  | '9Y'
  | '18Y'
  | '9R'
  | '18R'
  | '9K'
  | '18K'
  | '9PL'
  | '18PL'
  | 'PL18'
  | 'PLT'

type ProductSize = 'A-Q' | 'R-Z' | 'Z+'
type Status = 'publish'
type StockStatus = 'instock'
export type VariationSize = 'a-q' | 'r-z' | 'z'
type VariationGauge = 'light' | 'medium' | 'heavy' | 'super-heavy'
type DiamondQuality = 'GSI' | 'HSI' | 'D-FVS' | 'GVS'

export interface Images<T> {
  thumbnail: T
  medium: T
  large: T
}
export type DiamondOrigin = 'NATURAL' | 'LAB GROWN'
export type ProductType = 'DRESS RING' | 'PENDANT' | 'EARRING' | 'BRACELET'
export type ProductStyle =
  | 'Halo'
  | 'Other'
  | 'Cluster'
  | 'Solitaire'
  | 'Three Stone'
  | 'Five Stone'
  | 'Trilogy'
export type ProductShoulders = 'Plain' | 'Diamond'
export type ProductPatterns =
  | 'PLAIN'
  | 'CELTIC'
  | 'CERAMIC'
  | 'CONTEMPORARY'
  | 'SPARKLE'
export type ProductProfiles =
  | 'Flat'
  | 'CLASSIC COURT'
  | 'MODERN COURT'
  | 'BARREL'
  | 'D SHAPED'
  | 'OTHER'

export interface Product {
  productId: number
  name: string
  sku: string
  category: string
  attributes: {
    'pa_metal-code': MetalCode[]
    pa_gauge?: ('Light' | 'Medium' | 'Heavy' | 'Super Heavy')[]
    'pa_total-carat': ('0.410' | string)[]
    'pa_centre-carat': ('0.330' | string)[]
    'pa_diamond-quality'?: DiamondQuality[]
    pa_width: string[]
    pa_size: ProductSize[]
    pa_style?: ProductStyle[]
    'pa_type-2'?: ProductType[]
    pa_profile?: ProductProfiles[]
    pa_shape?: (
      | 'Marquise'
      | 'Brilliant'
      | 'Mixed'
      | 'Baguette'
      | 'Princess Cut'
      | 'Oval'
      | 'Emerald'
      | 'Cushion'
      | 'Pear'
      | string
    )[]
    pa_shoulders?: ProductShoulders[]
    pa_finish?: ('Matte' | 'Polished' | 'Matte &amp; Polished')[]
    pa_pattern?: ProductPatterns[]
    pa_coverage?: ('Third' | 'Half' | 'Three Quarter' | 'Full')[]
    pa_setting?: (
      | 'PAVE'
      | 'RUB OVER'
      | 'CLAW'
      | 'FOUR CLAW'
      | 'BAR'
      | 'CHANNEL'
      | 'MIXED'
    )[]
    pa_shaped?: ('Pinch' | 'Twist' | 'Curved' | 'Cutaway')[]
    'pa_diamond-set'?: 'Yes' | 'No'
    pa_diamond?: DiamondOrigin[]
  }
  collection: string | null
  'product-images': Images<string>
  images?: Images<string[]>
  price: number
  'sale-price': number
  variations: Variation[]
}

export interface Variation {
  'variation-id': number
  name: string
  slug: string
  status: Status
  sku: string
  price: number
  'sale-price': number
  'stock-status': StockStatus
  'variation-images': Images<string>
  images?: Images<string[]>
  attributes: {
    'pa_metal-code': string
    'pa_total-carat'?: string
    'pa_centre-carat'?: string
    'pa_diamond-quality'?: string
    pa_diamond?: string
    pa_gauge?: VariationGauge
    pa_width: string
    pa_size: VariationSize
  }
  productId?: number
}
