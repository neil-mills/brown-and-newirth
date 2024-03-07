'use client'
import { ProductCard, CategoryCard } from '.'
import { StyleMap } from '../maps'
import { Product, Variation } from '../types'

interface Props {
  type: 'style' | 'product'
  items: Variation[] | StyleMap[]
}
export const ProductGrid = ({ type, items }: Props) => {
  return (
    <div className="row row-product-grid text-uppercase text-xs text-center">
      {items.map((item, i) => (
        <>
          {type === 'product' ? (
            <ProductCard key={i} item={item as Variation} />
          ) : (
            <CategoryCard key={i} type={type} item={item} />
          )}
        </>
      ))}
    </div>
  )
}
