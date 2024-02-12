import { useStore } from '.'
import { Variation } from '../types'

export const useOtherVariations = (): Variation[] => {
  const selectedProduct = useStore((store) => store.product)
  const selectedVariationId = useStore((store) => store.variationId)
  let otherOptions: Variation[] = []
  if (selectedProduct && selectedVariationId) {
    const primaryAttr = selectedProduct.variations.some(
      (variation) => variation.attributes.pa_gauge
    )
      ? 'pa_gauge'
      : 'pa_total-carat'

    const selectedVariation = selectedProduct.variations.find(
      (variation) => variation['variation-id'] === parseInt(selectedVariationId)
    )
    const uniquePrimaryAttrValues = Array.from(
      new Set(
        selectedProduct.variations.map(
          (variation) => variation.attributes[primaryAttr]
        )
      )
    )
    uniquePrimaryAttrValues
      .filter(
        (attrValue) => attrValue !== selectedVariation!.attributes[primaryAttr]
      )
      .forEach((attrValue) => {
        const otherVariation = selectedProduct!.variations.find(
          (variation) =>
            variation.attributes[primaryAttr] === attrValue &&
            variation.attributes['pa_metal-code'] ===
              selectedVariation!.attributes['pa_metal-code']
        )
        if (otherVariation) otherOptions.push(otherVariation)
      })
  }
  return otherOptions
}
