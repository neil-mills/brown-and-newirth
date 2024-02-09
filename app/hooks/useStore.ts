import { create } from 'zustand'
import { Product } from '../types'
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface Store {
  productId: number | null
  productsQuery: ProductsQuery
  setProductId: (productId: number) => void
  setSearchQuery: (search: string) => void
  setSku: (sku: string) => void
  setCategory: (category: string) => void
  variations: Variations
  setVariationWidth: (width: string) => void
  setVariationSize: (size: string) => void
  setVariationMetal: (metal: string) => void
}

interface ProductsQuery {
  search?: string
  sku?: string
  category?: string
}

interface Variations {
  width?: string | null
  size: string | null
  metal: string | null
}

export const useStore = create<Store>((set) => ({
  productId: null,
  setProductId: (productId: number) =>
    set((store) => ({ ...store, productId })),
  productsQuery: {} as ProductsQuery,
  setSearchQuery: (search: string) =>
    set((store) => ({ ...store, productsQuery: { search } })),
  setSku: (sku: string) =>
    set((store) => ({
      ...store,
      productsQuery: { ...store.productsQuery, sku },
    })),
  setCategory: (category: string) =>
    set((store) => ({
      ...store,
      productsQuery: { ...store.productsQuery, category },
    })),
  variations: { width: null, size: null, metal: null },
  setVariationWidth: (width: string) =>
    set((store) => ({ ...store, variations: { ...store.variations, width } })),
  setVariationSize: (size: string) =>
    set((store) => ({ ...store, variations: { ...store.variations, size } })),
  setVariationMetal: (metal: string) =>
    set((store) => ({ ...store, variations: { ...store.variations, metal } })),
}))

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore)
}
