import { useStore } from '../hooks'

const ImageCarousel = () => {
  const { product, images } = useStore((store) => store.selectedSku)
  return (
    <div
      id="carouselSingle"
      className="carousel carousel-crossfade with-thumbnails d-flex mb-3"
      data-bs-interval="false"
    >
      <div className="carousel-inner">
        <a
          href="#"
          className="btn bubble position-absolute bg-grey px-3 px-sm-4 px-lg-3 px-xxl-4"
        >
          <span>View Online</span>
        </a>
        {images.map((src, i) => (
          <div key={i} className="carousel-item bg-grey-light active">
            <img
              src={src}
              className="img-fluid w-75 d-block mx-auto"
              alt={product.name}
            />
          </div>
        ))}
        {/* <div className="carousel-item bg-grey-light">
          <img
            src="/img/02_halos.png"
            className="img-fluid w-75 d-block mx-auto"
            alt="Product Title"
          />
        </div>
        <div className="carousel-item bg-grey-light">
          <img
            src="/img/03_clusters.png"
            className="img-fluid w-75 d-block mx-auto"
            alt="Product Title"
          />
        </div>
        <div className="carousel-item bg-grey-light">
          <img
            src="/img/04_3-stones.png"
            className="img-fluid w-75 d-block mx-auto"
            alt="Product Title"
          />
        </div> */}
        <button
          className="carousel-control-prev align-items-end"
          type="button"
          data-bs-target="#carouselSingle"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next align-items-end"
          type="button"
          data-bs-target="#carouselSingle"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="carousel-indicators thumbnails position-relative m-0 flex-column justify-content-start">
        {images.map((src, i) => (
          <button
            key={`tn_${i}`}
            type="button"
            data-bs-target="#carouselSingle"
            data-bs-slide-to="0"
            className="bg-grey-light mx-0 active"
          >
            <span
              className="position-absolute cover bg-cover"
              style={{ backgroundImage: `url('./img/01_solitaires.png')` }}
            ></span>
          </button>
        ))}
        {/* <button
          type="button"
          data-bs-target="#carouselSingle"
          data-bs-slide-to="1"
          className="bg-grey-light mx-0"
        >
          <span
            className="position-absolute cover bg-cover"
            style={{ backgroundImage: `url('./img/01_solitaires.png')` }}
          ></span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselSingle"
          data-bs-slide-to="2"
          className="bg-grey-light mx-0"
        >
          <span
            className="position-absolute cover bg-cover"
            style={{ backgroundImage: `url('./img/01_solitaires.png')` }}
          ></span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselSingle"
          data-bs-slide-to="3"
          className="bg-grey-light mx-0"
        >
          <span
            className="position-absolute cover bg-cover"
            style={{ backgroundImage: `url('./img/01_solitaires.png')` }}
          ></span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselSingle"
          data-bs-slide-to="3"
          className="bg-grey-light mx-0"
        >
          <span
            className="position-absolute cover bg-cover"
            style={{ backgroundImage: `url('./img/01_solitaires.png')` }}
          ></span>
        </button> */}
      </div>
    </div>
  )
}

export default ImageCarousel
