import { useStore } from '@/app/hooks'

export const usePrice = () => {
  const { sku, size, metal, variations } = useStore(
    (store) => store.selectedSku
  )
}
