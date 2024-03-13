import { centreCaratsMap, diamondOriginsMap, shapesMap } from '@/app/maps'
import { Map } from '@/app/types'

const map: { [key: string]: Map } = {
  pa_diamond: diamondOriginsMap,
  'pa_centre-carat': centreCaratsMap,
  pa_shape: shapesMap,
}

export const useFilterSearchParams = (
  searchParams: Record<string, string>
): Record<string, string> | null => {
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
