import { Product, Variation } from '../types'
import { useGetData, useVariations } from './'

interface Response {
  isLoading: boolean
  error: Error | null
  product: Product | null
  variation: Variation | null
  variationOptions: VariationOptions
  otherOptions: Variation[]
  altOptions: Variation[]
}

interface VariationOptions {
  widths: string[] | null
  sizes: string[] | null
  metals: string[] | null
}

export const useProduct = (
  productId: string,
  variationId?: string
): Response => {
  const { data: products, error, isLoading } = useGetData()
  let product: Product | null = null
  let selectedVariation: Variation | null = null
  const variationOptions: VariationOptions = {
    widths: null,
    sizes: null,
    metals: null,
  }

  let otherOptions: Variation[] = []
  let altOptions: Variation[] = []

  if (!error && !isLoading && products) {
    product = products.find((p) => p.productId === parseInt(productId)) || null
    if (product) {
      const primaryAttr = product.variations.some(
        (variation) => variation.attributes.pa_gauge
      )
        ? 'pa_gauge'
        : 'pa_total-carat'

      selectedVariation = !variationId
        ? product.variations[0]
        : product.variations.find(
            (variation) => variation['variation-id'] === parseInt(variationId)
          ) || null
      if (selectedVariation) {
        variationOptions.sizes = Array.from(
          new Set(
            product.variations
              .filter(
                (variation) =>
                  variation.attributes[primaryAttr] ===
                  selectedVariation!.attributes[primaryAttr]
              )
              .map((variation) => variation.attributes.pa_size)
          )
        )

        variationOptions.metals = Array.from(
          new Set(
            product.variations
              .filter(
                (variation) =>
                  variation.attributes[primaryAttr] ===
                  selectedVariation!.attributes[primaryAttr]
              )
              .map((variation) => variation.attributes['pa_metal-code'])
          )
        )

        if (primaryAttr === 'pa_gauge') {
          variationOptions.widths = Array.from(
            new Set(
              product.variations
                .filter(
                  (variation) =>
                    variation.attributes[primaryAttr] ===
                    selectedVariation!.attributes[primaryAttr]
                )
                .map((variation) => variation.attributes.pa_width)
            )
          )
        }

        const uniquePrimaryAttrValues = Array.from(
          new Set(
            product.variations.map(
              (variation) => variation.attributes[primaryAttr]
            )
          )
        )

        uniquePrimaryAttrValues
          .filter(
            (attrValue) =>
              attrValue !== selectedVariation!.attributes[primaryAttr]
          )
          .forEach((attrValue) => {
            const otherVariation = product!.variations.find(
              (variation) =>
                variation.attributes[primaryAttr] === attrValue &&
                variation.attributes['pa_metal-code'] ===
                  selectedVariation!.attributes['pa_metal-code']
            )
            if (otherVariation) otherOptions.push(otherVariation)
          })

        const uniqueVariationMetals = Array.from(
          new Set(
            product.variations.map(
              (variation) => variation.attributes['pa_metal-code']
            )
          )
        ).filter(
          (metal) => metal !== selectedVariation!.attributes['pa_metal-code']
        )

        uniqueVariationMetals.forEach((metal) => {
          uniquePrimaryAttrValues.forEach((uniquePrimaryAttr) => {
            const altVariation = product!.variations.find(
              (variation) =>
                variation.attributes['pa_metal-code'] === metal &&
                variation.attributes[primaryAttr] === uniquePrimaryAttr
            )
            if (altVariation) altOptions.push(altVariation)
          })
        })
      }
    }
  }
  return {
    product,
    variation: selectedVariation,
    variationOptions,
    otherOptions,
    altOptions,
    isLoading,
    error,
  }
}
