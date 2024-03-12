import { Mapping } from '@/app/types'
import { useStore } from '@/app/hooks'
import { diamondOriginsMap } from '@/app/maps'

export const useDiamondOrigins = () => {
  let diamondOrigins: Mapping[] = []

  const { product } = useStore((store) => store.selectedSku)

  if (product) {
    diamondOrigins = product?.attributes?.pa_diamond
      ? product.attributes.pa_diamond.map(
          (diamond) => diamondOriginsMap[diamond]
        )
      : []
  }
  return diamondOrigins
}
