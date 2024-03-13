import { VariationAttributes, Variation } from '@/app/types'
import { useStore } from '@/app/hooks'
import { getUniqueArrayValues } from '@/app/utils'

export const useVariations = (
  filters: Record<VariationAttributes, string> | null
): Variation[] => {
  const { variations } = useStore((store) => store.selectedSku)

  let filteredVariations = variations
  if (filters && Object.keys(filters)) {
    Object.entries(filters).forEach(([filter, value]) => {
      if (filter === 'pa_centre-carat') value = value.replace('.', '-')
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
