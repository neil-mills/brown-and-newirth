import { useGetData } from '@/app/hooks'
import {
  Mapping,
  ProductStyle,
  ProductType,
  Product,
  ProductAttributes,
  ProductPatterns,
} from '@/app/types'
import {
  shapesMap,
  shapedMap,
  profilesMap,
  diamondOriginsMap,
  patternMap,
} from '@/app/maps'
import { getUniqueArrayValues } from '@/app/utils'

const map = {
  pa_shape: shapesMap,
  pa_shaped: shapedMap,
  pa_profile: profilesMap,
  pa_diamond: diamondOriginsMap,
  pa_pattern: patternMap,
}

interface Props {
  filter: 'pa_shape' | 'pa_shaped' | 'pa_profile' | 'pa_diamond'
  filters?: Record<string, string> | null
  category?: string | undefined | null
  productId?: string | undefined
}

export const useProductFilterOptions = ({
  filter,
  filters,
  category,
  productId,
}: Props): {
  filterOptions: Mapping[]
  isLoading: boolean
  error: Error | null
} => {
  const filterMap = map[filter]
  const { data: products, error, isLoading } = useGetData()
  let filterOptions: Mapping[] = []
  let filteredProducts = products
  if (!isLoading && !error && products) {
    if (category) {
      filteredProducts = products.filter(
        (product: Product) =>
          product.attributes?.pa_style?.includes(category as ProductStyle) ||
          product.attributes?.['pa_type-2']?.includes(
            category as ProductType
          ) ||
          product.attributes?.['pa_pattern']?.includes(
            category as ProductPatterns
          )
      )
    }
    if (productId) {
      filteredProducts = products.filter(
        (product: Product) => product.productId === parseInt(productId)
      )
    }
    if (filters) {
      Object.entries(filters).forEach(([filterKey, value]) => {
        if (filterKey !== filter) {
          filteredProducts = filteredProducts?.filter((product) =>
            product?.attributes?.[filterKey as ProductAttributes]?.includes(
              value as never
            )
          )
        }
      })
    }
    if (filteredProducts) {
      filterOptions = getUniqueArrayValues(
        filteredProducts?.reduce((acc, product) => {
          if (product?.attributes?.[filter]) {
            acc = [...acc, ...product.attributes[filter]!]
          }
          return acc
        }, [] as string[])
      ).map((filter) => filterMap[filter])
    }
  }
  return { filterOptions, isLoading, error }
}
