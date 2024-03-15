import { useGetData } from '@/app/hooks'
import { Mapping, Product, Filters, Map, Styles } from '@/app/types'
import {
  shapesMap,
  shapedMap,
  profilesMap,
  diamondOriginsMap,
  patternMap,
  stylesMap,
} from '@/app/maps'
import { getUniqueArrayValues } from '@/app/utils'

type ProductFilterAttributes =
  | 'pa_shape'
  | 'pa_shaped'
  | 'pa_profile'
  | 'pa_diamond'
  | 'pa_pattern'

type ProductFilterAttributesMap = { [K in ProductFilterAttributes]: Map }

const map: ProductFilterAttributesMap = {
  pa_shape: shapesMap,
  pa_shaped: shapedMap,
  pa_profile: profilesMap,
  pa_diamond: diamondOriginsMap,
  pa_pattern: patternMap,
}

interface Props {
  filter: ProductFilterAttributes
  filters?: Filters | null
  category?: Styles | undefined | null
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
  const { data: products = [], error, isLoading } = useGetData()
  let filterOptions: Mapping[] = []
  let filteredProducts = products
  if (!isLoading && !error && products) {
    if (category) {
      filteredProducts = products.filter(
        (product: Product) =>
          product.attributes?.pa_style?.includes(category as Styles) ||
          product.attributes?.['pa_type-2']?.includes(category as Styles) ||
          (product?.attributes?.pa_pattern &&
            !product.attributes.pa_pattern.includes('PLAIN'))
      )
      stylesMap[category].filterLayers.forEach((filterLayer) => {
        filteredProducts = filteredProducts.filter(
          (product) => product?.attributes?.[filterLayer]
        )
      })
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
            product?.attributes?.[
              filterKey as ProductFilterAttributes
            ]?.includes(value as never)
          )
        }
      })
    }
    if (filteredProducts) {
      filterOptions = getUniqueArrayValues<string[]>(
        filteredProducts?.reduce((acc, product) => {
          if (product?.attributes?.[filter]) {
            acc = [...acc, ...product.attributes[filter]!]
          }
          return acc
        }, [] as string[])
      )
        .map((filter) => filterMap[filter])
        .filter((filter) => filter !== undefined)
    }
  }
  return { filterOptions, isLoading, error }
}
