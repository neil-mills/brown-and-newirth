import { getUniqueArrayValues } from '@/app/utils'
import { useStore } from '@/app/hooks'
import { Variation } from '@/app/types'

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
      const images = getUniqueArrayValues(
        variations.map((variation) => variation.image)
      )
      return {
        ...variations[0],
        images,
      }
    })
  }

  return otherOptions
}
