import { centreCaratsMap, diamondOriginsMap } from '@/app/maps'
import { ProductAttributes, VariationAttributes } from '../types'

const map = {
  pa_diamond: diamondOriginsMap,
  'pa_centre-carat': centreCaratsMap,
}
// const isAttribute = (key: string | ProductAttributes): key is ProductAttributes => {
//   return ()
// }

export const useFilterSearchParams = (searchParams: Record<string, string>) => {
  let filters = null
  if (!searchParams || Object.keys(searchParams).length === 0) return filters
  Object.entries(searchParams).reduce((acc, [key, value]) => {
    if (Object.keys(map).includes(key)) {
      const paramMap = map[key].slug === value
      acc = {...acc, [paramMap]}
    }
  })
}
