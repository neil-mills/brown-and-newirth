import { create } from 'zustand'
import { Images, Product, Variation } from '@/app/types'
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface SelectedSku {
  sku: string | null
  product: Product | null
  variations: Variation[]
  variation?: Variation | null
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
  searchParams: string
  setSearchParams: (searchParams: string) => void
  setSelectedSku: (selectedSku: SelectedSku) => void
  setSearchQuery: (search: string) => void
  setSize: (size: string) => void
  setMetal: (metal: string) => void
  setVariation: (variation: Variation) => void
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
    variation: null,
    images: { thumbnail: [], medium: [], large: [] },
    otherOptions: [],
    diamondOrigin: '',
    centreCarat: '',
    size: '',
    metal: '',
  },
  searchParams: '',
  productsQuery: {} as ProductsQuery,
  setSelectedSku: (selectedSku: SelectedSku) =>
    set((store) => ({ ...store, selectedSku })),
  setSearchParams: (searchParams: string) =>
    set((store) => ({ ...store, searchParams })),
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
      selectedSku: { ...store.selectedSku, metal },
    })),
  setDiamondOrigin: (diamondOrigin: string) =>
    set((store) => ({
      ...store,
      selectedSku: { ...store.selectedSku, diamondOrigin },
    })),
  setVariation: (variation: Variation) =>
    set((store) => ({
      ...store,
      selectedSku: { ...store.selectedSku, variation },
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
