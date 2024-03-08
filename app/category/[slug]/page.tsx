import { notFound } from 'next/navigation'
import {
  BackLink,
  CategoryBanner,
  ShapeFilterMenu,
  TitleBar,
} from '@/app/components'
import { useCategory } from '@/app/hooks'
import { ProfileFilterMenu } from '@/app/components/ProfileFilterMenu'

interface Props {
  params: { slug: string }
}
const ProductCategoryPage = ({ params: { slug } }: Props) => {
  const [category, categoryData] = useCategory(slug)
  if (!category || !categoryData) {
    return notFound()
  }
  return (
    <>
      <div className="col-left h-100 d-flex flex-column">
        <BackLink />
        <div className="col-left-inner flex-grow-1 d-flex flex-column p-0">
          <CategoryBanner category={categoryData} />
          <ShapeFilterMenu category={category} />
          <ProfileFilterMenu category={category} />
        </div>
      </div>

      <div className="col col-right h-100">
        <TitleBar>Results (27)</TitleBar>
        <div className="row row-product-grid text-uppercase text-xs">
          <div className="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
            <div className="product-grid-item style-2 bg-grey-light position-relative">
              <img
                className="img-fluid w-100"
                src="/img/01_solitaires.png"
                alt="Solitaires"
              />
              <div className="product-grid-item-overlay position-absolute bg-white">
                <div
                  id="carouselProductPreview"
                  className="carousel carousel-crossfade bg-grey-light mb-3"
                  data-bs-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/img/02_halos.png"
                        className="img-fluid w-100"
                        alt="Product Title"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/img/03_clusters.png"
                        className="img-fluid w-100"
                        alt="Product Title"
                      />
                    </div>
                  </div>
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
                </div>
                <p>en256e80</p>
                <button className="btn btn-border w-100">
                  <span>View</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
            <div className="product-grid-item style-2 bg-grey-light position-relative placeholder"></div>
          </div>
          <div className="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
            <div className="product-grid-item style-2 bg-grey-light position-relative placeholder"></div>
          </div>
          <div className="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
            <div className="product-grid-item style-2 bg-grey-light position-relative placeholder"></div>
          </div>
          <div className="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
            <div className="product-grid-item style-2 bg-grey-light position-relative placeholder"></div>
          </div>
          <div className="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
            <div className="product-grid-item style-2 bg-grey-light position-relative placeholder"></div>
          </div>
          <div className="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
            <div className="product-grid-item style-2 bg-grey-light position-relative placeholder"></div>
          </div>
          <div className="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
            <div className="product-grid-item style-2 bg-grey-light position-relative placeholder"></div>
          </div>
          <div className="col-6 col-sm-4 col-lg-6 col-xxl-4 col-product-grid">
            <div className="product-grid-item style-2 bg-grey-light position-relative placeholder"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCategoryPage
