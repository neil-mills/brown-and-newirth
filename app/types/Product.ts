export interface Product {
  productId: number
  name: string
  sku: string
  category: string
  collection: string | null
  image: string
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
  image: string
  attributes: {
    'pa_metal-code': string
    'pa_total-carat'?: string
    'pa_centre-carat'?: string
    'pa_diamond-quality'?: string
    pa_gauge?: string
    pa_width: string
    pa_size: PaSize
  }
}

type Status = 'publish'
type StockStatus = 'instock'
type PaSize = 'a-q' | 'r-z'
