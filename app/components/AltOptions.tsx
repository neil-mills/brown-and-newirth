import React from 'react'
import { ProductGrid } from '@/app/components'
import { useAltVariations } from '@/app/hooks'

export const AltOptions = () => {
  const products = useAltVariations()
  return (
    <section>
      <h3>Alternatives ({products.length})</h3>
      <ProductGrid type="product" items={products} />
    </section>
  )
}
