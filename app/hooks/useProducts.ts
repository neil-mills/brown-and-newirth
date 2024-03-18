import { getUniqueArrayValues, productToVariation } from '@/app/utils'
import {
  Product,
  ProductAttributeKeys,
  Images,
  ProductFilters,
  Styles,
} from '@/app/types'
import { useGetData } from '@/app/hooks'
import { stylesMap } from '@/app/maps'

interface Result {
  products: Product[]
  isLoading: boolean
  error: Error | null
}

export const useProducts = (
  category: Styles,
  filters: ProductFilters | null
): Result => {
  let products: Product[] = []
  const { data, error, isLoading } = useGetData()

  if (!isLoading && !error && data) {
    if (['Shaped', 'Patterns', 'PLAIN'].includes(category)) {
      if (category === 'Shaped') {
        products = data.filter(
          (product) => product.attributes.pa_shaped?.length
        )
      }
      if (category === 'Patterns') {
        products = data.filter(
          (product) =>
            product?.attributes?.pa_pattern &&
            !product.attributes.pa_pattern.includes('PLAIN')
        )
      }
      if (category === 'PLAIN') {
        products = data.filter(
          (product) =>
            product?.attributes?.pa_pattern &&
            product.attributes.pa_pattern.includes('PLAIN')
        )
      }
    } else {
      products =
        category === 'Shaped'
          ? data.filter((product) => product.attributes.pa_shaped?.length)
          : data.filter(
              (product) =>
                product?.attributes?.pa_style?.includes(category) ||
                product?.attributes?.['pa_type-2']?.includes(category)
            )
    }

    stylesMap[category].filterLayers.forEach((filterLayer) => {
      console.log(filterLayer)
      products = products.filter(
        (product) => product?.attributes?.[filterLayer]
      )
    })
    if (filters) {
      Object.entries(filters).forEach(([filter, value]) => {
        products = products.filter((product) =>
          product?.attributes?.[filter as ProductAttributeKeys]?.includes(
            value as never
          )
        )
      })
    }
    products = products.map((product) => {
      const variations = !product?.variations?.length
        ? [productToVariation(product)]
        : product.variations
      const images: Images<string[]> = {
        thumbnail: getUniqueArrayValues(
          variations.map((variation) => variation['variation-images'].thumbnail)
        ),
        medium: getUniqueArrayValues(
          variations.map((variation) => variation['variation-images'].medium)
        ),
        large: getUniqueArrayValues(
          variations.map((variation) => variation['variation-images'].large)
        ),
      }
      return { ...product, images }
    })
  }
  return { products, isLoading, error }
}
