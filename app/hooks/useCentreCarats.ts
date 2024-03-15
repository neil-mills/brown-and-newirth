import { useStore } from './useStore'
import { centreCaratsMap } from '@/app/maps'
import { Mapping } from '@/app/types'
import { getUniqueArrayValues, productToVariation } from '../utils'

export const useCentreCarats = (): Mapping[] => {
  let centreCarats: string[] = []
  let centreCaratOptions: string[] = []
  const { product, diamondOrigin } = useStore((store) => store.selectedSku)

  if (product) {
    const productVariations = product?.variations?.length
      ? product.variations
      : [productToVariation(product)]
    centreCarats = product.attributes['pa_centre-carat']
      .map((centreCarat) => parseFloat(centreCarat))
      .sort((a, b) => a - b)
      .map((centreCarat) => centreCarat.toFixed(3))
    centreCaratOptions = centreCarats
    if (
      diamondOrigin &&
      productVariations.every(
        (variation) => variation?.attributes?.['pa_centre-carat']
      )
    ) {
      centreCaratOptions = getUniqueArrayValues<string[]>(
        productVariations
          .filter(
            (variation) => variation.attributes.pa_diamond === diamondOrigin
          )
          .map(
            (variation) =>
              variation.attributes['pa_centre-carat']?.replace('-', '.')!
          )
      )
    }
  }
  return centreCarats.map((centreCarat: string) => ({
    ...centreCaratsMap[centreCarat],
    disabled: !centreCaratOptions.includes(centreCarat),
  }))
}
