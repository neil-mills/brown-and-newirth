import { getUniqueArrayValues } from '../utils/getUniqueArrayValues'
import { Product, ProductStyle, ProductAttributes } from '../types'
import { useGetData } from './'

interface Result {
  products: Product[]
  isLoading: boolean
  error: Error | null
}

export const useProducts = (
  category: string,
  filters: Record<string, string> | null
): Result => {
  let products: Product[] = []
  const { data, error, isLoading } = useGetData()

  if (!isLoading && !error && data) {
    products = data.filter((product) =>
      product.attributes.pa_style?.includes(category as ProductStyle)
    )
    if (filters) {
      Object.entries(filters).forEach(([filter, value]) => {
        products = products.filter((product) =>
          product?.attributes?.[filter as ProductAttributes]?.includes(value)
        )
      })
    }
    products = products.map((product) => {
      const images = getUniqueArrayValues(
        product.variations.map((variation) => variation.image)
      )
      return { ...product, images }
    })
  }
  return { products, isLoading, error }
}
