import Link from 'next/link'
import Image from 'next/image'
import { Product, Variation } from '../types'
import { StyleMap } from '../maps'

interface Props {
  item: Product | Variation | StyleMap
  type: 'product' | 'style'
}
const isProduct = (item: Product | Variation | StyleMap): item is Product => {
  return (item as Product).productId !== undefined
}

const isVariation = (item: Product | Variation): item is Variation => {
  return (item as Variation)['variation-id'] !== undefined
}

const isStyle = (item: Product | Variation | StyleMap): item is StyleMap => {
  return (item as StyleMap).label !== undefined
}

export const CategoryCard = ({ item, type }: Props) => {
  return (
    <div className="col-6 col-sm-4 col-lg-6 col-xl-4 col-xxl-3 col-product-grid">
      <Link
        href="#"
        className="product-grid-item style-1 letter-spacing bg-cover d-flex flex-column justify-content-between position-relative"
      >
        {/* <Image
          src={isStyle(item) ? item.image : '/img/01_solitaires.png'}
          alt={item.label}
          fill
          className="img-fluid w-100"
          sizes="(max-width: 480px) auto, (max-width: 768px) auto, auto"
        /> */}
        <img className="img-fluid w-100" src={item.image} alt={item.label} />
        <div>
          {isProduct(item) && item.name}
          {isStyle(item) && item.label}
        </div>
      </Link>
    </div>
  )
}
