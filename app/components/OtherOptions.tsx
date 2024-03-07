import React from 'react'
import { ProductGrid } from '@/app/components'
import { useStore } from '../hooks'

export const OtherOptions = () => {
  const { otherOptions: products } = useStore((store) => store.selectedSku)

  return <ProductGrid type="product" items={products} />
}
