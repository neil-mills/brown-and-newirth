import { ProductGrid } from '@/app/components'
import { useStore } from '@/app/hooks'

export const OtherOptions = () => {
  const { otherOptions } = useStore((store) => store.selectedSku)
  return (
    <ProductGrid
      style="product"
      type="variation"
      label="code"
      items={otherOptions}
    />
  )
}
