import { shapesMap, profilesMap } from '@/app/maps'
import { Filters, Map, ProductAttributes } from '@/app/types'

interface KeyMap {
  key: ProductAttributes
  map: Map
}

const paramsMap: Record<string, KeyMap> = {
  shape: { key: 'pa_shape', map: shapesMap },
  profile: { key: 'pa_profile', map: profilesMap },
}

export const useProductFilters = (
  searchParams: Record<string, string>
): Filters | null => {
  const filters = Object.keys(searchParams).length
    ? Object.entries(searchParams).reduce((acc, [key, value]) => {
        const map = Object.entries(shapesMap).find(
          ([_mapKey, mapping]) => mapping.slug === value
        )
        if (map) {
          acc = {
            ...acc,
            [paramsMap[key].key]: map[0],
          }
        }
        return acc
      }, {} as Filters)
    : null
  return filters
}
