import { create } from 'zustand'
import { Product, Variation, PrimaryAttr } from '../types'
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface SelectedItem {
  product: Product | null
  variation: Variation | null
  primaryAttr: PrimaryAttr
}
interface Store {
  productsQuery: ProductsQuery
  selectedItem: SelectedItem
  setSelectedItem: (selectedItem: SelectedItem) => void
  setSearchQuery: (search: string) => void
  setSku: (sku: string) => void
  variationOptions: VariationOptions
  setVariationOptionWidth: (width: string) => void
  setVariationOptionSize: (size: string) => void
  setVariationOptionMetal: (metal: string) => void
}

interface ProductsQuery {
  search?: string
  sku?: string
  category?: string
}

interface VariationOptions {
  width?: string
  size: string
  metal: string
}

export const useStore = create<Store>((set) => ({
  selectedItem: {
    product: null,
    variation: null,
    primaryAttr: 'pa_gauge',
  },
  setSelectedItem: (selectedItem: SelectedItem) =>
    set((store) => ({ ...store, selectedItem })),

  productsQuery: {} as ProductsQuery,
  setSearchQuery: (search: string) =>
    set((store) => ({ ...store, productsQuery: { search } })),
  setSku: (sku: string) =>
    set((store) => ({
      ...store,
      productsQuery: { ...store.productsQuery, sku },
    })),
  variationOptions: { width: '', size: '', metal: '' },
  setVariationOptionWidth: (width: string) =>
    set((store) => ({
      ...store,
      variationOptions: { ...store.variationOptions, width },
    })),
  setVariationOptionSize: (size: string) =>
    set((store) => ({
      ...store,
      variationOptions: { ...store.variationOptions, size },
    })),
  setVariationOptionMetal: (metal: string) =>
    set((store) => ({
      ...store,
      variationOptions: { ...store.variationOptions, metal },
    })),
}))

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore)
}
