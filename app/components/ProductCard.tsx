import Image from 'next/image'
import { Product, Variation } from '@/app/types'
import { useRouter } from 'next/navigation'
import { CreatedLosenge } from '@/app/components'

interface Props {
  type: 'product' | 'variation'
  style: 'product' | 'variation'
  label?: 'code'
  item: Variation | Product
}

export const ProductCard = ({ item, type, style, label }: Props) => {
  const router = useRouter()
  let carouselImages: string[] = []
  if (item?.images?.medium) {
    carouselImages =
      item.images.medium.length > 1
        ? item.images.medium.slice(1)
        : item.images.medium
  }

  const isCreated =
    (type === 'variation' && item.attributes.pa_diamond === 'LAB GROWN') ||
    (type === 'product' && item.attributes.pa_diamond?.includes('LAB GROWN'))

  return (
    <div className="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
      <div className="product-grid-item style-2 bg-grey-light position-relative">
        {style === 'product' && (
          <Image
            className="img-fluid w-100"
            src={item?.images?.medium?.[0] ? item.images.medium[0] : ''}
            width={245}
            height={300}
            quality={100}
            sizes="(max-width: 220px) 100vw, (max-width: 240px) 50vw, 33vw"
            alt={item.name}
          />
        )}
        <div
          className={`${
            style === 'variation'
              ? 'product-grid-item-overlay position-relative bg-white has-border visible'
              : 'product-grid-item-overlay position-absolute bg-white'
          }`}
        >
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
                  <Image
                    src={image}
                    className="img-fluid w-100"
                    width={150}
                    height={150}
                    quality={100}
                    alt={item.name}
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
            {isCreated && <CreatedLosenge />}
          </div>
          {/* <div className="d-flex d-lg-block d-xl-flex justify-content-between mb-3">
        <p className="mb-0">G/H Si</p>
        <p className="ms-xl-2">
          carat 0.25<sup>ct</sup>
        </p>
      </div> */}
          {label === 'code' && <p>{item.sku}</p>}
          <button
            className="btn btn-border w-100"
            onClick={() =>
              router.push(
                `/products/${
                  type === 'variation'
                    ? `sku/${item.sku}`
                    : `productId/${item.productId}`
                }`
              )
            }
          >
            <span>View</span>
          </button>
        </div>
      </div>
    </div>
  )
}
