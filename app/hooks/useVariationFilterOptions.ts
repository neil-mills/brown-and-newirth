import { Mapping, Variation, VariationGauge, VariationWidth } from '@/app/types'
import { useStore } from '@/app/hooks'
import { getUniqueArrayValues } from '@/app/utils'
import { widthMap, gaugeMap } from '@/app/maps'

interface Props {
  filter: 'pa_gauge' | 'pa_width'
  filters?: Record<string, string>
}

type Filters<T> = { [K in keyof T]: string }

type VariationFilters = Filters<VariationGauge> | Filters<VariationWidth>
const map = {
  pa_gauge: gaugeMap,
  pa_width: widthMap,
}
export const useVariationFilterOptions = ({
  filter,
  filters,
}: Props): Mapping[] => {
  let options: Mapping[] = []
  let filteredVariations: Variation[] = []
  const filterMap = map[filter]
  const { variations } = useStore((store) => store.selectedSku)
  if (variations) {
    filteredVariations = variations
    if (filters) {
      Object.entries(filters).forEach(([filter, value]) => {
        filteredVariations = filteredVariations.filter(
          (variation) =>
            variation?.attributes?.[filter] &&
            variation.attributes[filter] === value
        )
      })
    }
    options = getUniqueArrayValues(
      variations
        .filter((variation) => variation?.attributes?.[filter])
        .map((variation) => variation.attributes[filter]!)
    ).map((value) => filterMap[value])
  }
  return options
}
