import Image from 'next/image'
import { Variation } from '../types'
import { useRouter } from 'next/navigation'

interface Props {
  item: Variation
}

export const ProductCard = ({ item }: Props) => {
  const router = useRouter()
  let carouselImages: string[] = []
  if (item?.images) {
    carouselImages = item.images.length > 1 ? item.images.slice(1) : item.images
  }

  return (
    <div className="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
      <div className="product-grid-item style-2 bg-grey-light position-relative">
        <img
          className="img-fluid w-100"
          src={item?.images?.[0] ? item.images[0] : ''}
          alt={item.name}
        />

        <div className="product-grid-item-overlay position-absolute bg-white">
          <div
            id={item.sku}
            className="carousel carousel-crossfade bg-grey-light mb-3"
            data-bs-interval="false"
          >
            <div className="carousel-inner">
              {carouselImages.map((image, i) => (
                <div
                  key={i}
                  className={`carousel-item${i === 0 ? ' active' : ''}`}
                >
                  <img
                    src={image}
                    className="img-fluid w-100"
                    alt="Product Title"
                  />
                </div>
              ))}
            </div>
            {carouselImages.length > 1 && (
              <>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselProductPreview"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselProductPreview"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
          <p>{item.sku}</p>
          <button
            className="btn btn-border w-100"
            onClick={() => router.push(`/products/${item.sku}`)}
          >
            <span>View</span>
          </button>
        </div>
      </div>
    </div>
  )
}
