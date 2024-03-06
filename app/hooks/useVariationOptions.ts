import { useStore } from '@/app/hooks'
import { formatMetal, formatWidth, formatCarat } from '@/app/utils'

interface Option {
  label: string
  value: string
}

export const useVariationOptions = () => {
  const { variations } = useStore((store) => store.selectedSku)

  let widths: Option[] | null = null
  let sizes: Option[] = []
  let metals: Option[] = []
  const sizeArr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  if (variations?.length) {
    if (variations[0]?.attributes?.pa_size) {
      const availableSizes = variations[0].attributes.pa_size
      const [firstSize, lastSize] = availableSizes.split('-')
      const firstIndex = sizeArr.findIndex((size) => size === firstSize)
      const lastIndex = sizeArr.findIndex((size) => size === lastSize)
      sizes = sizeArr
        .slice(firstIndex, lastIndex)
        .map((size) => ({ label: size.toUpperCase(), value: size }))
    }
    if (variations[0]?.attributes['pa_metal-code']) {
      metals = Array.from(
        new Set(
          variations.map((variation) => variation.attributes['pa_metal-code'])
        )
      ).map((metal) => ({ label: formatMetal(metal), value: metal }))
    }
  }

  // if (selectedProduct && selectedVariation) {
  //   if (primaryAttr === 'pa_gauge') {
  //     widths = Array.from(
  //       new Set(
  //         selectedProduct.variations
  //           .filter(
  //             (variation) =>
  //               variation.attributes[primaryAttr] ===
  //               selectedVariation!.attributes[primaryAttr]
  //           )
  //           .map((variation) => variation.attributes.pa_width)
  //       )
  //     ).map((width) => ({ label: formatWidth(width), value: width }))
  //   }
  //   if (primaryAttr === 'pa_total-carat') {
  //     carats = Array.from(
  //       new Set(
  //         selectedProduct.variations
  //           .filter(
  //             (variation) =>
  //               variation.attributes[primaryAttr] ===
  //               selectedVariation!.attributes[primaryAttr]
  //           )
  //           .map((variation) => variation.attributes['pa_total-carat'])
  //       )
  //     ).map((carat) => ({ label: formatCarat(carat), value: carat }))
  //   }
  //   sizes = Array.from(
  //     new Set(
  //       selectedProduct.variations
  //         .filter(
  //           (variation) =>
  //             variation.attributes[primaryAttr] ===
  //             selectedVariation!.attributes[primaryAttr]
  //         )
  //         .map((variation) => variation.attributes.pa_size)
  //     )
  //   ).map((size) => ({
  //     label: size.toUpperCase(),
  //     value: size,
  //   }))

  //   metals = Array.from(
  //     new Set(
  //       selectedProduct.variations
  //         .filter(
  //           (variation) =>
  //             variation.attributes[primaryAttr] ===
  //             selectedVariation!.attributes[primaryAttr]
  //         )
  //         .map((variation) => variation.attributes['pa_metal-code'])
  //     )
  //   ).map((metal) => ({
  //     label: formatMetal(metal),
  //     value: metal,
  //   }))
  //}

  return { widths, sizes, metals }
}
