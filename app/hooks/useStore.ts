import { create } from 'zustand'
import { Product } from '../types'

interface Store {
  products: Product[]
  productsQuery: ProductsQuery
  setSearchQuery: (search: string) => void
  setProductSku: (sku: string) => void
  setCategory: (category: string) => void
}

interface ProductsQuery {
  search?: string
  sku?: string
  category?: string
}

export const useStore = create<Store>((set) => ({
  products: [],
  productsQuery: {} as ProductsQuery,
  setSearchQuery: (search: string) =>
    set(() => ({ productsQuery: { search } })),
  setProductSku: (sku: string) =>
    set((store) => ({ productsQuery: { ...store.productsQuery, sku } })),
  setCategory: (category: string) =>
    set((store) => ({ productsQuery: { ...store.productsQuery, category } })),
}))
