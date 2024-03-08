import { Mapping } from '@/app/types'
import { stylesMap } from '@/app/maps'

export const useCategory = (
  slug: string
): [string | undefined, Mapping | undefined] => {
  const category = Object.entries(stylesMap).find(
    ([_key, map]) => map.slug === slug
  )
  return [category?.[0], category?.[1]]
}
