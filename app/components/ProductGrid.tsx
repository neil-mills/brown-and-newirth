import { ProductCard, CategoryCard } from '@/app/components'
import { Product, Variation, Mapping } from '@/app/types'

interface Props {
  type: 'style' | 'product'
  items: Product[] | Variation[] | Mapping[]
}

const isProduct = (item: Product | Variation | Mapping): item is Product => {
  return (item as Product).productId !== undefined
}
const isVariation = (
  item: Product | Variation | Mapping
): item is Variation => {
  return (item as Variation)['variation-id'] !== undefined
}

export const ProductGrid = ({ items }: Props) => {
  return (
    <div className="row row-product-grid text-uppercase text-xs text-center">
      {items.map((item, i) => (
        <>
          {isProduct(item) || isVariation(item) ? (
            <ProductCard key={i} item={item} />
          ) : (
            <CategoryCard key={i} item={item} />
          )}
        </>
      ))}
    </div>
  )
}
