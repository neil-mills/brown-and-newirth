import BackLink from '@/app/components/BackLink'
import FilterGrid from '@/app/components/FilterGrid'
import ShapeFilterMenu from '@/app/components/ShapeFilterMenu'
import TitleBar from '@/app/components/TitleBar'

interface Props {
  params: { category: string }
}
const ProductCategoryPage = ({ params: { category } }: Props) => {
  return (
    <>
      <div className="col-left h-100 d-flex flex-column">
        <BackLink />
        <div className="col-left-inner flex-grow-1 d-flex flex-column p-0">
          <div className="inner-banner bg-gradient-grey mb-225rem">
            <div className="row g-0 align-items-center justify-content-center">
              <div className="col-7 col-sm-5">
                <h3 className="ms-3 ms-sm-0">Solitaires</h3>
              </div>
              <div className="col-5 col-sm-4">
                <img
                  className="img-fluid w-100"
                  src="/img/01_solitaires.png"
                  alt="Product Style"
                />
              </div>
            </div>
          </div>
          <ShapeFilterMenu />
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
