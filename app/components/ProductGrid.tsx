'use client'
import { ProductCard } from '.'
import { StyleMap } from '../maps'
import { Product, Variation } from '../types'

interface Props {
  type: 'style' | 'product'
  items: Product[] | Variation[] | StyleMap[]
}
export const ProductGrid = ({ type, items }: Props) => {
  return (
    <div className="row row-product-grid text-uppercase text-xs text-center">
      {items.map((item, i) => (
        <ProductCard key={i} type={type} item={item} />
      ))}
    </div>
  )
}
