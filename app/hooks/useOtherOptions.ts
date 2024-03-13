import { getUniqueArrayValues } from '@/app/utils'
import { useStore } from '@/app/hooks'
import { Variation, Images } from '@/app/types'

export const useOtherOptions = () => {
  const { product, variations } = useStore((store) => store.selectedSku)
  let otherOptions: Variation[] = []
  if (product) {
    const otherSkus = getUniqueArrayValues(
      product.variations
        .filter((variation) => variation.sku !== variations[0].sku)
        .map((variation) => variation.sku)
    )

    otherOptions = otherSkus.map((sku) => {
      const variations = product!.variations.filter(
        (variation) => variation.sku === sku
      )
      const images: Images<string[]> = {
        thumbnail: getUniqueArrayValues(
          variations.map((variation) => variation['variation-images'].thumbnail)
        ),
        medium: getUniqueArrayValues(
          variations.map((variation) => variation['variation-images'].medium)
        ),
        large: getUniqueArrayValues(
          variations.map((variation) => variation['variation-images'].large)
        ),
      }
      return {
        ...variations[0],
        images,
      }
    })
  }

  return otherOptions
}
