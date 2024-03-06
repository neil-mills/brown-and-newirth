import { Product, Variation } from '../types'
import { useGetData } from './'

interface ReturnValues {
  isLoading: boolean
  error: Error | null
  product: Product | null
  variations: Variation[]
  images: string[]
}

export const useProduct = (sku: string): ReturnValues => {
  let product: Product | null = null
  let variations: Variation[] = []
  let images: string[] = []
  const { data: products, error, isLoading } = useGetData()
  if (!isLoading && !error) {
    product =
      products?.find((product) =>
        product.variations.some((variation) => variation.sku === sku)
      ) || null

    if (product) {
      variations = product.variations.filter(
        (variation) => variation.sku === sku
      )
      if (variations) {
        images = Array.from(
          new Set(variations.map((variation) => variation.image))
        )
      }
    }
  }
  return { product, variations, images, isLoading, error }
}
