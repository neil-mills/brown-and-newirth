import { CaratMapType, WidthMapType } from '@/app/maps'
import { caratMap, widthMap } from '@/app/maps'

export interface Mapping {
  label: string
  image?: string
  class?: string
  disabled?: boolean
  slug: string
  filter?: string[]
  start?: number
  end?: number
}

export interface Map {
  [key: string]: Mapping
}

export type RangeFilterAttribute =
  | 'pa_width'
  | 'pa_centre-carat'
  | 'pa_total-carat'

export type RangeFilterMaps = {
  [K in RangeFilterAttribute]: Map
}

export const maps: RangeFilterMaps = {
  pa_width: widthMap,
  'pa_centre-carat': caratMap,
  'pa_total-carat': caratMap,
}
