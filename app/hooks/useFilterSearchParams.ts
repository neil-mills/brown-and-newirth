import {
  centreCaratsMap,
  diamondOriginsMap,
  shapesMap,
  shapedMap,
} from '@/app/maps'
import { Map } from '@/app/types'
import { searchParamsToObject } from '@/app/utils'

const map: { [key: string]: Map } = {
  pa_diamond: diamondOriginsMap,
  'pa_centre-carat': centreCaratsMap,
  pa_shape: shapesMap,
  pa_shaped: shapedMap,
}

export const useFilterSearchParams = (
  searchParamsStr: string
): Record<string, string> | null => {
  const searchParams = searchParamsToObject(searchParamsStr)
  let filters: Record<string, string> | null = null
  if (!searchParams || Object.keys(searchParams).length === 0) return filters
  filters = Object.entries(searchParams).reduce((acc, [key, value]) => {
    if (Object.keys(map).includes(key)) {
      const index = Object.entries(map[key]).findIndex(
        ([_key, mapping]) => mapping.slug === value
      )
      acc = { ...acc, [key]: Object.keys(map[key])[index] }
    }
    return acc
  }, {} as Record<string, string>)
  return filters
}
