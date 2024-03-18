import { diamondQualityMap } from '@/app/maps'
import { VariationDiamondQuality } from '@/app/types'

export const formatDiamondQuality = (
  diamondQuality: VariationDiamondQuality | undefined
): string => {
  if (!diamondQuality) return ''
  return diamondQualityMap?.[
    diamondQuality.toUpperCase() as VariationDiamondQuality
  ]?.label
}
