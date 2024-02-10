import { Product, Variation } from '../types'

export const useVariations = (product: Product, variationId: string) => {
  let widths: string[] | null = null
  let sizes: string[] | null = null
  let metals: string[] | null = null
  let otherOptions: Variation[] = []
  let alternatives: Variation[] = []
  const primaryAttr = product.variations.some(
    (variation) => variation.attributes.pa_gauge
  )
    ? 'pa_gauge'
    : 'pa_total-carat'

  const selectedVariation = product.variations.find(
    (variation) => variation['variation-id'] === parseInt(variationId)
  )
  if (selectedVariation) {
    sizes = Array.from(
      new Set(
        product.variations
          .filter(
            (variation) =>
              variation.attributes[primaryAttr] ===
              selectedVariation.attributes[primaryAttr]
          )
          .map((variation) => variation.attributes.pa_size)
      )
    )

    metals = Array.from(
      new Set(
        product.variations
          .filter(
            (variation) =>
              variation.attributes[primaryAttr] ===
              selectedVariation.attributes[primaryAttr]
          )
          .map((variation) => variation.attributes['pa_metal-code'])
      )
    )

    if (primaryAttr === 'pa_gauge') {
      widths = Array.from(
        new Set(
          product.variations
            .filter(
              (variation) =>
                variation.attributes[primaryAttr] ===
                selectedVariation.attributes[primaryAttr]
            )
            .map((variation) => variation.attributes.pa_width)
        )
      )
    }

    const uniquePrimaryAttrValues = Array.from(
      new Set(
        product.variations.map((variation) => variation.attributes[primaryAttr])
      )
    )

    uniquePrimaryAttrValues
      .filter(
        (attrValue) => attrValue !== selectedVariation.attributes[primaryAttr]
      )
      .forEach((attrValue) => {
        const otherVariation = product.variations.find(
          (variation) =>
            variation.attributes[primaryAttr] === attrValue &&
            variation.attributes['pa_metal-code'] ===
              selectedVariation.attributes['pa_metal-code']
        )
        if (otherVariation) otherOptions.push(otherVariation)
      })

    const uniqueVariationMetals = Array.from(
      new Set(
        product.variations.map(
          (variation) => variation.attributes['pa_metal-code']
        )
      )
    ).filter((metal) => metal !== selectedVariation.attributes['pa_metal-code'])

    uniqueVariationMetals.forEach((metal) => {
      uniquePrimaryAttrValues.forEach((uniquePrimaryAttr) => {
        const altVariation = product.variations.find(
          (variation) =>
            variation.attributes['pa_metal-code'] === metal &&
            variation.attributes[primaryAttr] === uniquePrimaryAttr
        )
        if (altVariation) alternatives.push(altVariation)
      })
    })
  }
  return { widths, sizes, metals, otherOptions, alternatives }
}
