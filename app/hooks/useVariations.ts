import {
  VariationAttributeKeys,
  Variation,
  Images,
  Widths,
  Filters,
} from '@/app/types'
import { useStore } from '@/app/hooks'
import { getUniqueArrayValues, productToVariation } from '@/app/utils'
import { widthMap } from '@/app/maps'

export const useVariations = (filters: Filters | null): Variation[] => {
  const { product } = useStore((store) => store.selectedSku)
  let filteredVariations: Variation[] = []
  if (product) {
    const productVariations = product?.variations?.length
      ? product.variations
      : [productToVariation(product)]
    filteredVariations = productVariations
    if (filters && Object.keys(filters)) {
      Object.entries(filters).forEach(([filter, value]) => {
        if (filter === 'pa_centre-carat') value = value.replace('.', '-')
        if (filter !== 'pa_width') {
          filteredVariations = filteredVariations.filter(
            (variation) =>
              variation?.attributes?.[filter as VariationAttributeKeys] ===
              value
          )
        } else {
          filteredVariations = filteredVariations.filter((variation) => {
            const numericWidth = variation?.attributes?.pa_width
              ? parseFloat(variation.attributes.pa_width)
              : null
            const map = widthMap[value as Widths]
            return (
              (numericWidth &&
                numericWidth < 8 &&
                numericWidth >= map.start &&
                numericWidth <= map.end!) ||
              (numericWidth && numericWidth >= 8 && numericWidth >= map.start)
            )
          })
        }
      })
    }
    filteredVariations = getUniqueArrayValues<string[]>(
      filteredVariations.map((variation) => variation.sku)
    ).map(
      (sku) =>
        filteredVariations.filter((variation) => variation.sku === sku)[0]
    )
    //need to group variations by sku and output first one in group
    filteredVariations = filteredVariations.map((variation) => {
      const skuVariations = product.variations.filter(
        (v) => v.sku === variation.sku
      )
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
  }

  return filteredVariations
}
