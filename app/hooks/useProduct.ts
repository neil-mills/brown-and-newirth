import { OtherOptions } from '@/app/components'
import { Product, Variation } from '../types'
import { useGetData } from './'

interface ReturnValues {
  isLoading: boolean
  error: Error | null
  product: Product | null
  variations: Variation[]
  images: string[]
  otherOptions: Variation[]
}

export const useProduct = (sku: string): ReturnValues => {
  let product: Product | null = null
  let variations: Variation[] = []
  let images: string[] = []
  let otherOptions: Variation[] = []
  const { data: products, error, isLoading } = useGetData()
  if (!isLoading && !error) {
    product =
      products?.filter((product) =>
        product.variations.some((variation) => variation.sku === sku)
      )[0] || null

    if (product) {
      variations = product.variations.filter(
        (variation) => variation.sku === sku
      )
      if (variations) {
        images = Array.from(
          new Set(variations.map((variation) => variation.image))
        )
        const otherSkus = Array.from(
          new Set(
            product.variations
              .filter((variation) => variation.sku !== variations[0].sku)
              .map((variation) => variation.sku)
          )
        )
        otherOptions = otherSkus.map((sku) => {
          const variations = product!.variations.filter(
            (variation) => variation.sku === sku
          )
          const images = Array.from(
            new Set(variations.map((variation) => variation.image))
          )
          return {
            ...variations[0],
            images,
          }
        })
      }
    }
  }
  return { product, variations, images, otherOptions, isLoading, error }
}
