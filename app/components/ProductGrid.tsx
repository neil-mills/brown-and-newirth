'use client'
import { ProductCard } from '.'
import { Product, Variation } from '../types'

interface Props {
  type: 'category' | 'product'
  items: Product[] | Variation[]
}
export const ProductGrid = ({ type, items }: Props) => {
  return (
    <ul>
      {items.map((item, i) => (
        <ProductCard item={item} />
      ))}
    </ul>
  )
}
