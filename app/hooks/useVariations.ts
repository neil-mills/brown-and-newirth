import { VariationAttributes, Variation, Images } from '@/app/types'
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
    const images: Images<string[]> = {
      thumbnail: getUniqueArrayValues(
        skuVariations.map(
          (variation) => variation['variation-images'].thumbnail
        )
      ),
      medium: getUniqueArrayValues(
        skuVariations.map((variation) => variation['variation-images'].medium)
      ),
      large: getUniqueArrayValues(
        skuVariations.map((variation) => variation['variation-images'].large)
      ),
    }
    return { ...variation, images }
  })
  console.log(filteredVariations)
  return filteredVariations
}
