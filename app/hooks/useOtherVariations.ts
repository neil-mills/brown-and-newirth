import { useStore } from '@/app/hooks'
import { Variation } from '../types'

export const useOtherVariations = (): Variation[] => {
  const { product, variations } = useStore((store) => store.selectedSku)

  let otherOptions: Variation[] = []
  if (product && variations) {
    const otherSkus = Array.from(
      new Set(
        product.variations
          .filter((variation) => variation.sku !== variations[0].sku)
          .map((variation) => variation.sku)
      )
    )
    otherOptions = otherSkus.map((sku) => {
      return product.variations.filter((variation) => variation.sku === sku)[0]
    })
    console.log(otherOptions)
  }

  return otherOptions
}
