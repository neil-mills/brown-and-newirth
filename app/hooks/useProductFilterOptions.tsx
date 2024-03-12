import { useGetData } from '.'
import { Mapping, ProductStyle, Product } from '@/app/types'
import { shapesMap, profilesMap, diamondOriginsMap } from '@/app/maps'
import { getUniqueArrayValues } from '@/app/utils'

const map = {
  pa_shape: shapesMap,
  pa_profile: profilesMap,
  pa_diamond: diamondOriginsMap,
}

interface Props {
  filter: 'pa_shape' | 'pa_profile' | 'pa_diamond'
  category?: string | undefined
  productId?: string | undefined
}

export const useProductFilterOptions = ({
  filter,
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
      filteredProducts = products.filter((product: Product) =>
        product.attributes.pa_style?.includes(category as ProductStyle)
      )
    }
    if (productId) {
      filteredProducts = products.filter(
        (product: Product) => product.productId === parseInt(productId)
      )
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
