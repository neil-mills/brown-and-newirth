import Link from 'next/link'
import { Product, Variation } from '../types'

interface Props {
  item: Product | Variation
  type: 'product' | 'category'
}
const isProduct = (item: Product | Variation): item is Product => {
  return (item as Product).productId !== undefined
}

const isVariation = (item: Product | Variation): item is Variation => {
  return (item as Variation)['variation-id'] !== undefined
}

export const ProductCard = ({ item, type }: Props) => {
  let url = ''
  let label = item.name
  let gauge = ''
  let metal = ''
  if (type === 'category' && isProduct(item)) {
    url = `/products/category/${item.category.toLowerCase()}`
    label = item.category
  }
  if (type === 'product' && isProduct(item)) {
    url = `/products/${item.productId}`
  }
  if (type === 'product' && isVariation(item)) {
    url = `/products/${item.productId}/variation/${item['variation-id']}`
    gauge = item.attributes.pa_gauge
    metal = item.attributes['pa_metal-code']
  }
  return (
    <li>
      <Link href={url}>
        {label}, gauge: {gauge}, metal: {metal}
      </Link>
    </li>
  )
}
