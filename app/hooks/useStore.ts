import { create } from 'zustand'
import { Images, Product, Variation } from '@/app/types'
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface SelectedSku {
  sku: string | null
  product: Product | null
  variations: Variation[]
  images: Images<string[]>
  otherOptions: Variation[]
  diamondOrigin?: string
  centreCarat?: string
  size?: string
  metal?: string
}
interface Store {
  productsQuery: ProductsQuery
  selectedSku: SelectedSku
  setSelectedSku: (selectedSku: SelectedSku) => void
  setSearchQuery: (search: string) => void
  setSize: (size: string) => void
  setMetal: (metal: string) => void
  setDiamondOrigin: (diamond: string) => void
  setCarat: (carat: string) => void
}

interface ProductsQuery {
  search?: string
  sku?: string
  category?: string
}

export const useStore = create<Store>((set) => ({
  selectedSku: {
    sku: null,
    product: null,
    variations: [],
    images: [],
    otherOptions: [],
    diamondOrigin: '',
    centreCarat: '',
    size: '',
    metal: '',
  },
  productsQuery: {} as ProductsQuery,
  setSelectedSku: (selectedSku: SelectedSku) =>
    set((store) => ({ ...store, selectedSku })),
  setSearchQuery: (search: string) =>
    set((store) => ({ ...store, productsQuery: { search } })),
  setSize: (size: string) =>
    set((store) => ({
      ...store,
      selectedSku: { ...store.selectedSku, size },
    })),
  setMetal: (metal: string) =>
    set((store) => ({
      ...store,
      variationOptions: { ...store.selectedSku, metal },
    })),
  setDiamondOrigin: (diamond: string) =>
    set((store) => ({
      ...store,
      selectedSku: { ...store.selectedSku, diamond },
    })),
  setCarat: (carat: string) =>
    set((store) => ({
      ...store,
      selectedSku: { ...store.selectedSku, carat },
    })),
}))

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore)
}
