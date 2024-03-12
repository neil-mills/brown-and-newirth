import { VariationAttributes, VariationFilters, Variation } from '@/app/types'
import { useStore } from '@/app/hooks'
import { getUniqueArrayValues } from '@/app/utils'

export const useVariations = (
  filters: Record<string, string> | null
): Variation[] => {
  const { variations } = useStore((store) => store.selectedSku)
  let filteredVariations = variations
  if (filters && Object.keys(filters)) {
    Object.entries(filters).forEach(([filter, value]) => {
      filteredVariations = filteredVariations.filter(
        (variation) =>
          variation?.attributes?.[filter as VariationAttributes] === value
      )
    })
  }
  filteredVariations = filteredVariations.map((variation) => {
    const skuVariations = variations.filter((v) => v.sku === variation.sku)
    const images = getUniqueArrayValues(
      skuVariations.map((variation) => variation.image)
    )
    return { ...variation, images }
  })
  return filteredVariations
}
