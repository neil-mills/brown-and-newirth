import { useProduct, useStore } from './'

export const useVariations = () => {
  const { isLoading, error, product } = useProduct()
  const selectedVariations = useStore((store) => store.variations)
  let widths: string[] | null = null
  let sizes: string[] | null = null
  let metals: string[] | null = null
  if (!isLoading && !error && product) {
    const hasWidthVariation = product.variations.some(
      (variation) => variation.attributes.pa_width
    )
    const hasSizeVariation = product.variations.some(
      (variation) => variation.attributes.pa_size
    )
    const hasMetalVariation = product.variations.some(
      (variation) => variation.attributes['pa_metal-code']
    )
    if (hasWidthVariation) {
      widths = Array.from(
        new Set(
          product.variations.map((variation) => variation.attributes.pa_width)
        )
      )
    }
    if (!hasWidthVariation && hasSizeVariation) {
      sizes = Array.from(
        new Set(
          product.variations.map((variation) => variation.attributes.pa_size)
        )
      )
    }
    if (hasWidthVariation && selectedVariations.width && hasSizeVariation) {
      const filteredVariations = product.variations.filter(
        (variation) =>
          variation.attributes.pa_width === selectedVariations.width
      )
      sizes = Array.from(
        new Set(
          filteredVariations.map((variation) => variation.attributes.pa_size)
        )
      )
    }
    if (hasMetalVariation && selectedVariations.size) {
      const filteredVariations = product.variations.filter(
        (variation) => variation.attributes.pa_size === selectedVariations.size
      )
      metals = Array.from(
        new Set(
          filteredVariations.map(
            (variation) => variation.attributes['pa_metal-code']
          )
        )
      )
    }
  }
  return { widths, sizes, metals, isLoading, error }
}
