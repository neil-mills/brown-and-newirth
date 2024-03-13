import { getUniqueArrayValues } from '@/app/utils'
import {
  Product,
  ProductStyle,
  ProductType,
  ProductAttributes,
  Images,
} from '@/app/types'
import { useGetData } from '@/app/hooks'

interface Result {
  products: Product[]
  isLoading: boolean
  error: Error | null
}

export const useProducts = (
  category: string,
  filters: Record<ProductAttributes, string> | null
): Result => {
  let products: Product[] = []
  const { data, error, isLoading } = useGetData()

  if (!isLoading && !error && data) {
    products =
      category === 'Shaped'
        ? data.filter((product) => product.attributes.pa_shaped?.length)
        : data.filter(
            (product) =>
              product.attributes.pa_style?.includes(category as ProductStyle) ||
              product.attributes['pa_type-2']?.includes(category as ProductType)
          )
    if (filters) {
      Object.entries(filters).forEach(([filter, value]) => {
        products = products.filter((product) =>
          product?.attributes?.[filter as ProductAttributes]?.includes(
            value as never
          )
        )
      })
    }
    products = products.map((product) => {
      const images: Images<string[]> = {
        thumbnail: getUniqueArrayValues(
          product.variations.map(
            (variation) => variation['variation-images'].thumbnail
          )
        ),
        medium: getUniqueArrayValues(
          product.variations.map(
            (variation) => variation['variation-images'].medium
          )
        ),
        large: getUniqueArrayValues(
          product.variations.map(
            (variation) => variation['variation-images'].large
          )
        ),
      }
      return { ...product, images }
    })
  }
  console.log(products)
  return { products, isLoading, error }
}
