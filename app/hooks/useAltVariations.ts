import { useStore } from '.'
import { Variation } from '../types'

export const useAltVariations = (): Variation[] => {
  const {
    product: selectedProduct,
    variation: selectedVariation,
    primaryAttr,
  } = useStore((store) => store.selectedItem)

  let altOptions: Variation[] = []
  if (selectedProduct && selectedVariation) {
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
        if (altVariation)
          altOptions.push({
            ...altVariation,
            productId: selectedProduct.productId,
          })
      })
    })
  }
  return altOptions
}
