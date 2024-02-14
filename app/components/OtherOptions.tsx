import React from 'react'
import { ProductGrid } from '@/app/components'
import { useOtherVariations } from '../hooks/useOtherVariations'

export const OtherOptions = () => {
  const products = useOtherVariations()
  return (
    <section>
      <h3>Other options ({products.length})</h3>
      <ProductGrid type="product" items={products} />
    </section>
  )
}
