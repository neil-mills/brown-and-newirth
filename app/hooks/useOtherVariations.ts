import { useStore } from '@/app/hooks'
import { Variation } from '../types'

export const useOtherVariations = (): Variation[] => {
  const {
    product: selectedProduct,
    variation: selectedVariation,
    primaryAttr,
  } = useStore((store) => store.selectedItem)

  let otherOptions: Variation[] = []
  if (selectedProduct && selectedVariation) {
    const uniquePrimaryAttrValues = Array.from(
      new Set(
        selectedProduct.variations.map(
          (variation) => variation.attributes[primaryAttr]
        )
      )
    )
    uniquePrimaryAttrValues
      .filter(
        (attrValue) => attrValue !== selectedVariation.attributes[primaryAttr]
      )
      .forEach((attrValue) => {
        const otherVariation = selectedProduct!.variations.find(
          (variation) =>
            variation.attributes[primaryAttr] === attrValue &&
            variation.attributes['pa_metal-code'] ===
              selectedVariation!.attributes['pa_metal-code']
        )
        if (otherVariation)
          otherOptions.push({
            ...otherVariation,
            productId: selectedProduct.productId,
          })
      })
  }
  return otherOptions
}
