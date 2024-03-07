import { create } from 'zustand'
import { Product, Variation } from '../types'
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface SelectedSku {
  sku: string
  product: Product | null
  variations: Variation[]
  images: string[]
  otherOptions: Variation[]
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
}

interface ProductsQuery {
  search?: string
  sku?: string
  category?: string
}

export const useStore = create<Store>((set) => ({
  selectedSku: {
    sku: '',
    product: null,
    variations: [],
    images: [],
    otherOptions: [],
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
}))

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore)
}
