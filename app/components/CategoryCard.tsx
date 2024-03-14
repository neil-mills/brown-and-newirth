import Link from 'next/link'
import Image from 'next/image'
import { Mapping } from '../types'

interface Props {
  item: Mapping
}
// const isProduct = (item: Product | Variation | StyleMap): item is Product => {
//   return (item as Product).productId !== undefined
// }

// const isVariation = (item: Product | Variation): item is Variation => {
//   return (item as Variation)['variation-id'] !== undefined
// }

// const isStyle = (item: Product | Variation | StyleMap): item is StyleMap => {
//   return (item as StyleMap).label !== undefined
// }

export const CategoryCard = ({ item }: Props) => {
  return (
    <div className="col-6 col-sm-4 col-lg-6 col-xl-4 col-xxl-3 col-product-grid">
      <Link
        href={`/category/${item.slug}`}
        className="product-grid-item style-1 letter-spacing bg-cover d-flex flex-column justify-content-between position-relative"
      >
        <Image
          width={114}
          height={114}
          className="img-fluid w-100"
          src={item?.image || ''}
          alt={item.label}
        />
        <div>{item.label}</div>
      </Link>
    </div>
  )
}
