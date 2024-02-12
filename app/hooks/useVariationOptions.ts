import { useStore } from '@/app/hooks'
import { formatMetal, formatWidth } from '@/app/utils'

interface Option {
  label: string
  value: string
}

export const useVariationOptions = () => {
  const variationOptions = useStore((store) => store.variationOptions)
  const selectedVariation = useStore((store) => store.variation)
  const selectedProduct = useStore((store) => store.product)
  const primaryAttr = useStore((store) => store.primaryAttr)
  let widths: Option[] | null = null
  let sizes: Option[] = []
  let metals: Option[] = []
  if (selectedProduct && selectedVariation) {
    if (primaryAttr === 'pa_gauge') {
      widths = Array.from(
        new Set(
          selectedProduct.variations
            .filter(
              (variation) =>
                variation.attributes[primaryAttr] ===
                selectedVariation!.attributes[primaryAttr]
            )
            .map((variation) => ({
              label: formatWidth(variation.attributes.pa_width),
              value: variation.attributes.pa_width,
            }))
        )
      )
    }
    // if (variationOptions?.width) {
    sizes = Array.from(
      new Set(
        selectedProduct.variations
          .filter(
            (variation) =>
              variation.attributes[primaryAttr] ===
              selectedVariation!.attributes[primaryAttr]
          )
          .map((variation) => ({
            label: variation.attributes.pa_size.toUpperCase(),
            value: variation.attributes.pa_size,
          }))
      )
    )
    // }
    // if (variationOptions?.size) {
    metals = Array.from(
      new Set(
        selectedProduct.variations
          .filter(
            (variation) =>
              variation.attributes[primaryAttr] ===
              selectedVariation!.attributes[primaryAttr]
          )
          .map((variation) => ({
            label: formatMetal(variation.attributes['pa_metal-code']),
            value: variation.attributes['pa_metal-code'],
          }))
      )
    )
    // }
  }
  return { widths, sizes, metals }
}
