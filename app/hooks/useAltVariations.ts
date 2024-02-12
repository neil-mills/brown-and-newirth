import { useStore } from '.'
import { Variation } from '../types'

export const useAltVariations = (): Variation[] => {
  const selectedProduct = useStore((store) => store.product)
  const selectedVariationId = useStore((store) => store.variationId)
  let altOptions: Variation[] = []
  if (selectedProduct && selectedVariationId) {
    const selectedVariation = selectedProduct.variations.find(
      (variation) => variation['variation-id'] === parseInt(selectedVariationId)
    )
    const primaryAttr = selectedProduct.variations.some(
      (variation) => variation.attributes.pa_gauge
    )
      ? 'pa_gauge'
      : 'pa_total-carat'
    const uniquePrimaryAttrValues = Array.from(
      new Set(
        selectedProduct.variations.map(
          (variation) => variation.attributes[primaryAttr]
        )
      )
    )
    const uniqueVariationMetals = Array.from(
      new Set(
        selectedProduct.variations.map(
          (variation) => variation.attributes['pa_metal-code']
        )
      )
    ).filter(
      (metal) => metal !== selectedVariation!.attributes['pa_metal-code']
    )

    uniqueVariationMetals.forEach((metal) => {
      uniquePrimaryAttrValues.forEach((uniquePrimaryAttr) => {
        const altVariation = selectedProduct.variations.find(
          (variation) =>
            variation.attributes['pa_metal-code'] === metal &&
            variation.attributes[primaryAttr] === uniquePrimaryAttr
        )
        if (altVariation) altOptions.push(altVariation)
      })
    })
  }
  return altOptions
}
