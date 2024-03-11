import { Mapping } from '../types'
import { useStore } from './useStore'
import { caratsMap, diamondsMap } from '../maps'

export const useDiamondFilters = () => {
  let diamonds: Mapping[] = []
  let carats: Mapping[] = []

  const {
    product,
    variations,
    diamond: selectedDiamond,
  } = useStore((store) => store.selectedSku)

  if (variations?.length) {
    diamonds = product?.attributes?.pa_diamond
      ? product.attributes.pa_diamond.map((diamond) => diamondsMap[diamond])
      : []

    carats = selectedDiamond
      ? Array.from(
          new Set(
            variations
              .filter(
                (variation) =>
                  variation?.attributes?.pa_diamond === selectedDiamond &&
                  variation?.attributes?.['pa_centre-carat']
              )
              .map(
                (variation) =>
                  caratsMap[variation.attributes['pa_centre-carat']!]
              )
          )
        )
      : []
  }
  return { diamonds, carats }
}
