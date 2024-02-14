import { useStore } from '@/app/hooks'
import { formatMetal, formatWidth } from '@/app/utils'

interface Option {
  label: string
  value: string
}

export const useVariationOptions = () => {
  const {
    product: selectedProduct,
    variation: selectedVariation,
    primaryAttr,
  } = useStore((store) => store.selectedItem)

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
            .map((variation) => variation.attributes.pa_width)
        )
      ).map((width) => ({ label: formatWidth(width), value: width }))
    }
    sizes = Array.from(
      new Set(
        selectedProduct.variations
          .filter(
            (variation) =>
              variation.attributes[primaryAttr] ===
              selectedVariation!.attributes[primaryAttr]
          )
          .map((variation) => variation.attributes.pa_size)
      )
    ).map((size) => ({
      label: size.toUpperCase(),
      value: size,
    }))

    metals = Array.from(
      new Set(
        selectedProduct.variations
          .filter(
            (variation) =>
              variation.attributes[primaryAttr] ===
              selectedVariation!.attributes[primaryAttr]
          )
          .map((variation) => variation.attributes['pa_metal-code'])
      )
    ).map((metal) => ({
      label: formatMetal(metal),
      value: metal,
    }))
  }

  return { widths, sizes, metals }
}
