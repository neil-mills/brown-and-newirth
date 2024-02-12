import { create } from 'zustand'
import { Product, Variation } from '../types'
import { mountStoreDevtool } from 'simple-zustand-devtools'

type PrimaryAttr = 'pa_gauge' | 'pa_total-carat'

interface Store {
  product: Product | null
  productId: string | null
  variationId: string | null
  variation: Variation | null
  productsQuery: ProductsQuery
  setProduct: (product: Product | null) => void
  setVariation: (variation: Variation | null) => void
  setVariationId: (variationId: string | null) => void
  primaryAttr: PrimaryAttr
  setSearchQuery: (search: string) => void
  setSku: (sku: string) => void
  setCategory: (category: string) => void
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
  productId: null,
  product: null,
  variationId: null,
  variation: null,
  primaryAttr: 'pa_gauge',
  setProductId: (productId: string) =>
    set((store) => ({ ...store, productId })),
  setProduct: (product: Product | null) =>
    set((store) => ({ ...store, product })),
  setVariation: (variation: Variation | null) =>
    set((store) => ({ ...store, variation })),
  setVariationId: (variationId: string | null) =>
    set((store) => ({ ...store, variationId })),
  setPrimaryAttr: (primaryAttr: PrimaryAttr) =>
    set((store) => ({ ...store, primaryAttr })),
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
