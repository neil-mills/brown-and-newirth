import { Variation, ProductStyle, ProductAttributes, Filters } from '../types'
import { useGetData } from './'

interface Result {
  products: Variation[]
  isLoading: boolean
  error: Error | null
}

export const useProducts = (
  category: string,
  filters: Filters | null
): Result => {
  let products: Variation[] = []
  const { data, error, isLoading } = useGetData()

  if (!isLoading && !error && data) {
    let filteredProducts = data.filter((product) =>
      product.attributes.pa_style?.includes(category as ProductStyle)
    )
    if (filters) {
      Object.entries(filters).forEach(([filter, value]) => {
        filteredProducts = filteredProducts.filter((product) =>
          product?.attributes?.[filter as ProductAttributes]?.includes(value)
        )
      })
    }

    products = filteredProducts.map((product) => {
      const variations = product.variations.filter(
        (variation) => variation.sku === product.sku
      )
      const images = Array.from(
        new Set(variations.map((variation) => variation.image))
      )
      return { ...variations[0], images }
    })
  }
  return { products, isLoading, error }
}
