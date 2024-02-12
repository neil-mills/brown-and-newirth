import { Product, Variation } from '../types'
import { useGetData, useStore } from './'

interface ReturnValues {
  isLoading: boolean
  error: Error | null
  product: Product | null
  variation: Variation | null
  primaryAttr: string | null
}

export const useProduct = (
  productId: string,
  variationId?: string
): ReturnValues => {
  const variationOptions = useStore((store) => store.variationOptions)
  let product: Product | null = null
  let variation: Variation | null = null
  let primaryAttr = null
  const { data: products, error, isLoading } = useGetData()
  if (!isLoading && !error) {
    const product = products?.find((p) => p.productId === parseInt(productId))
    if (product) {
      primaryAttr = product.variations.some(
        (variation) => variation.attributes.pa_gauge
      )
        ? 'pa_gauge'
        : 'pa_total-carat'

      if (variationId) {
        variation =
          product.variations.find(
            (variation) => variation['variation-id'] === parseInt(variationId)
          ) || null
      } else {
        let filteredVariations = product.variations
        if (variationOptions.width) {
          filteredVariations = filteredVariations.filter(
            (variation) =>
              variation.attributes.pa_width === variationOptions.width
          )
        }
        if (variationOptions.size) {
          filteredVariations = filteredVariations.filter(
            (variation) =>
              variation.attributes.pa_size === variationOptions.size
          )
        }
        if (variationOptions.metal) {
          filteredVariations = filteredVariations.filter(
            (variation) =>
              variation.attributes['pa_metal-code'] === variationOptions.metal
          )
        }
        variation = filteredVariations[0] || null
      }
    }
  }
  return { product, variation, primaryAttr, isLoading, error }
}
