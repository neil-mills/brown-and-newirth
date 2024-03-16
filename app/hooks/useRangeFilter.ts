import { useStore } from '@/app/hooks'
import { widthMap, caratMap, CaratMapType, WidthMapType } from '@/app/maps'
import {
  Mapping,
  Filters,
  VariationAttributeKeys,
  Variation,
} from '@/app/types'
import { productToVariation, getUniqueArrayValues } from '@/app/utils'

interface Props {
  rangeFilter: RangeFilterAttribute
  filters: Filters | null
}

type RangeFilterAttribute = 'pa_width' | 'pa_centre-carat' | 'pa_total-carat'

type RangeFilterMaps = {
  [K in RangeFilterAttribute]: CaratMapType | WidthMapType
}

const maps: RangeFilterMaps = {
  pa_width: widthMap,
  'pa_centre-carat': caratMap,
  'pa_total-carat': caratMap,
}

export const useRangeFilter = <T>({
  rangeFilter,
  filters,
}: Props): [Mapping[], T[]] => {
  const allOptions = Object.entries(maps[rangeFilter])
    .sort(([a], [b]) => parseFloat(a) - parseFloat(b))
    .map(([_key, mapping]) => mapping)
  let availableOptions: T[] = []

  const { product } = useStore((store) => store.selectedSku)
  let filteredVariations: Variation[] = []
  if (product) {
    const productVariations = product?.variations?.length
      ? product.variations
      : [productToVariation(product)]
    filteredVariations = productVariations
    if (filters) {
      Object.entries(filters).forEach(([filter, value]) => {
        if (filter !== rangeFilter) {
          filteredVariations = filteredVariations.filter(
            (variation) =>
              variation?.attributes?.[rangeFilter] &&
              variation.attributes[rangeFilter] === value
          )
        }
      })
    }
    availableOptions = getUniqueArrayValues<T[]>(
      filteredVariations
        .filter(
          (variation) =>
            variation?.attributes?.[rangeFilter as VariationAttributeKeys]
        )
        .map(
          (variation) =>
            variation.attributes[rangeFilter as VariationAttributeKeys]
        )
        .map((option) => {
          const numericOption = parseFloat(option as string)
          const allOptionKeys = Object.keys(allOptions)
          const lastOption = parseFloat(allOptionKeys[allOptionKeys.length - 1])
          const rangeMap = maps[rangeFilter]
          const index =
            numericOption < lastOption
              ? Object.entries(rangeMap).findIndex(
                  ([_widthKey, { start, end }]) =>
                    numericOption >= start && numericOption <= end!
                )
              : Object.entries(rangeMap).findIndex(
                  ([_widthKey, { start }]) => numericOption >= start
                )
          return Object.keys(rangeMap)[index]
        })
        .filter((option) => option !== undefined)
    )
  }

  return [allOptions, availableOptions]
}
