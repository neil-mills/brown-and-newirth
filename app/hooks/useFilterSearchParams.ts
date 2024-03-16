import {
  caratMap,
  diamondOriginsMap,
  shapesMap,
  shapedMap,
  diamondSetMap,
  profilesMap,
  gaugeMap,
  widthMap,
  patternMap,
} from '@/app/maps'
import { Map, Filters, FilterAttributeKeys } from '@/app/types'
import { searchParamsToObject } from '@/app/utils'

type FilterSearchParamsMap = {
  [K in FilterAttributeKeys]: Map
}

const map: FilterSearchParamsMap = {
  pa_diamond: diamondOriginsMap,
  'pa_centre-carat': caratMap,
  'pa_total-carat': caratMap,
  pa_shape: shapesMap,
  pa_shaped: shapedMap,
  'pa_diamond-set': diamondSetMap,
  pa_profile: profilesMap,
  pa_gauge: gaugeMap,
  pa_width: widthMap,
  pa_pattern: patternMap,
}

export const useFilterSearchParams = (
  searchParamsStr: string
): Filters | null => {
  const searchParams = searchParamsToObject(searchParamsStr)
  let filters: Filters | null = null
  if (!searchParams || Object.keys(searchParams).length === 0) return filters
  filters = Object.entries(searchParams).reduce((acc, [key, value]) => {
    if (Object.keys(map).includes(key)) {
      const index = Object.entries(map[key as FilterAttributeKeys]).findIndex(
        ([_key, mapping]) => mapping.slug === value
      )
      acc = {
        ...acc,
        [key]: Object.keys(map[key as FilterAttributeKeys])[index],
      }
    }
    return acc
  }, {} as Filters)
  return filters
}
