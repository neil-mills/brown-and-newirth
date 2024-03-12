import { useStore } from './useStore'
import { centreCaratsMap } from '@/app/maps'
import { Mapping } from '@/app/types'
import { getUniqueValues } from '../utils'

export const useCentreCarats = (): Mapping[] => {
  let centreCarats: string[] = []
  let centreCaratOptions: string[] = []
  const { product, variations, diamondOrigin } = useStore(
    (store) => store.selectedSku
  )

  if (product) {
    centreCarats = product.attributes['pa_centre-carat']
      .map((centreCarat) => parseFloat(centreCarat))
      .sort((a, b) => a - b)
      .map((centreCarat) => centreCarat.toFixed(3))
    centreCaratOptions = centreCarats
    if (
      diamondOrigin &&
      variations?.length &&
      variations.every(
        (variation) => variation?.attributes?.['pa_centre-carat']
      )
    ) {
      centreCaratOptions = getUniqueValues(
        variations
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
