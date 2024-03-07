import Link from 'next/link'
import Image from 'next/image'
import { Product, ProductStyle, Variation } from '../types'
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

export const ProductCard = ({ item, type }: Props) => {
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


<div class="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
                    <div class="product-grid-item style-2 bg-grey-light position-relative">
                        <img class="img-fluid w-100" src="img/01_solitaires.png" alt="Solitaires">
                        <div class="product-grid-item-overlay position-absolute bg-white">
                          <!-- Carousels + controls need uniqid -->
                          <div id="carouselProductPreview" class="carousel carousel-crossfade bg-grey-light mb-3" data-bs-interval="false">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img src="img/02_halos.png" class="img-fluid w-100" alt="Product Title">
                              </div>
                              <div class="carousel-item">
                                <img src="img/03_clusters.png" class="img-fluid w-100" alt="Product Title">
                              </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselProductPreview" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselProductPreview" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                          </div>
                          <p>en256e80</p>
                          <button class="btn btn-border w-100"><span>View</span></button> 
                        </div>
                    </div>
                  </div>