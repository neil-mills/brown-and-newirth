import { useGetData } from '.'
import { Mapping, ProductStyle } from '../types'
import { shapesMap, profilesMap } from '../maps'

const map = {
  pa_shape: shapesMap,
  pa_profile: profilesMap,
}

export const useFilters = (
  category: string,
  filter: 'pa_shape' | 'pa_profile'
): {
  filters: Mapping[]
  isLoading: boolean
  error: Error | null
} => {
  const filterMap = map[filter]
  const { data: products, error, isLoading } = useGetData()
  let filters: Mapping[] = []
  if (!isLoading && !error && products) {
    // const profiles = Array.from(
    //   new Set(
    //     products.reduce((acc, product) => {
    //       if (product?.attributes?.pa_profile) {
    //         acc = [...acc, ...product.attributes.pa_profile]
    //       }
    //       return acc
    //     }, [] as string[])
    //   )
    // )
    // console.log(profiles)
    filters = Array.from(
      new Set(
        products
          .filter((product) =>
            product?.attributes?.pa_style?.includes(category as ProductStyle)
          )
          ?.reduce((acc, product) => {
            if (product?.attributes?.[filter]) {
              acc = [...acc, ...product.attributes[filter]!]
            }
            return acc
          }, [] as string[])
          .map((filter) => filterMap[filter])
      )
    )
  }
  return { filters, isLoading, error }
}
