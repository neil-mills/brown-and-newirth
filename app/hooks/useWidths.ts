import { getUniqueArrayValues } from './../utils/getUniqueArrayValues'
import { useStore } from '@/app/hooks'
import { widthMap } from '@/app/maps'
import { Widths, Mapping, Filters, Variation } from '@/app/types'

export const useWidths = ({
  filters,
}: {
  filters: Filters | null
}): [Mapping[], Widths[]] => {
  const allWidths = Object.entries(widthMap)
    .sort(([a], [b]) => parseFloat(a) - parseFloat(b))
    .map(([_key, mapping]) => mapping)
  let availableWidths: Widths[] = []

  const { product } = useStore((store) => store.selectedSku)
  let filteredVariations: Variation[] = []
  if (product?.variations) {
    filteredVariations = product.variations
    if (filters) {
      Object.entries(filters).forEach(([filter, value]) => {
        if (filter !== 'pa_width') {
          filteredVariations = filteredVariations.filter(
            (variation) =>
              variation?.attributes?.[filter as never] &&
              variation.attributes[filter as never] === value
          )
        }
      })
    }
    availableWidths = getUniqueArrayValues<Widths[]>(
      filteredVariations
        .filter((variation) => variation?.attributes?.pa_width)
        .map((variation) => variation.attributes.pa_width)
        .map((width) => {
          const numericWidth = parseFloat(width)
          const index =
            numericWidth < 8
              ? Object.entries(widthMap).findIndex(
                  ([_widthKey, { start, end }]) =>
                    numericWidth >= start && numericWidth <= end!
                )
              : Object.entries(widthMap).findIndex(
                  ([_widthKey, { start }]) => numericWidth >= start
                )
          return Object.keys(widthMap)[index]
        })
        .filter((width) => width !== undefined)
    )
  }

  return [allWidths, availableWidths]
}
