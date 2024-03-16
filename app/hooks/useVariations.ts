import {
  VariationAttributeKeys,
  Variation,
  Filters,
  RangeFilterAttribute,
} from '@/app/types'
import { useStore } from '@/app/hooks'
import { getUniqueArrayValues, productToVariation } from '@/app/utils'
import { rangeFilterMap } from '@/app/maps'

interface Props {
  filterByAttribute: VariationAttributeKeys
  filters: Filters | null
}

export const useVariations = ({
  filterByAttribute,
  filters,
}: Props): Variation[] => {
  const { product } = useStore((store) => store.selectedSku)
  const rangeAttributes: RangeFilterAttribute[] = [
    'pa_width',
    'pa_total-carat',
    'pa_centre-carat',
  ]
  let filteredVariations: Variation[] = []
  if (product) {
    const productVariations = product?.variations?.length
      ? product.variations
      : [productToVariation(product)]
    filteredVariations = productVariations

    if (filters && Object.keys(filters)) {
      Object.entries(filters).forEach(([filter, value]) => {
        if (rangeAttributes.includes(filter as RangeFilterAttribute))
          value = value.replace('.', '-')
        if (!rangeAttributes.includes(filter as RangeFilterAttribute)) {
          filteredVariations = filteredVariations.filter(
            (variation) =>
              variation?.attributes?.[filter as VariationAttributeKeys] ===
              value
          )
        } else {
          value = value.replace('-', '.')
          filteredVariations = filteredVariations.filter((variation) => {
            const numericValue = variation?.attributes?.[
              filter as RangeFilterAttribute
            ]
              ? parseFloat(
                  variation.attributes[
                    filter as VariationAttributeKeys
                  ]!.replace('-', '.')
                )
              : null
            const map = rangeFilterMap[filter as RangeFilterAttribute]
            const { start, end } = map[value]
            const allKeys = Object.keys(map)
            const lastOption = parseFloat(allKeys[allKeys.length - 1])

            return (
              (numericValue &&
                numericValue < lastOption &&
                numericValue >= start! &&
                numericValue <= end!) ||
              (numericValue && numericValue >= 8 && numericValue >= start!)
            )
          })
        }
      })
    }

    const productSkus = getUniqueArrayValues<string[]>(
      filteredVariations.map((variation) => variation.sku)
    )

    filteredVariations = productSkus.map(
      (sku) =>
        filteredVariations.filter((variation) => variation.sku === sku)[0]
    )

    filteredVariations = filteredVariations.map((variation) => ({
      ...variation,
      images: {
        thumbnail: [variation['variation-images'].thumbnail],
        medium: [variation['variation-images'].medium],
        large: [variation['variation-images'].large],
      },
    }))
  }

  return filteredVariations
}
