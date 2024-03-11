import { useFilters } from '../hooks'

export const CaratFilter = () => {
  const { data: carats, isLoading, error } = useFilters()
  return (
    <div className="row row-pad-xs row-panels-sm row-natural-created justify-content-center text-xs text-uppercase text-center">
      <div className="col-ninth col-pad-xs col-panel-xs">
        <button className="btn btn-icon alt w-100 natural carat-025">
          <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
            <img src="img/svg/icon-shape-round.svg" alt="Round" />
          </div>
        </button>
        <p className="mt-2">
          0.25<sup>ct</sup>
        </p>
      </div>
      <div className="col-ninth col-pad-xs col-panel-xs">
        <button className="btn btn-icon alt w-100 created carat-030">
          <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
            <img src="img/svg/icon-shape-round.svg" alt="Round" />
          </div>
        </button>
        <p className="mt-2">
          0.30<sup>ct</sup>
        </p>
      </div>
      <div className="col-ninth col-pad-xs col-panel-xs">
        <button className="btn btn-icon alt w-100 natural carat-040">
          <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
            <img src="img/svg/icon-shape-round.svg" alt="Round" />
          </div>
        </button>
        <p className="mt-2">
          0.40<sup>ct</sup>
        </p>
      </div>
      <div className="col-ninth col-pad-xs col-panel-xs">
        <button className="btn btn-icon alt w-100 created carat-050">
          <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
            <img src="img/svg/icon-shape-round.svg" alt="Round" />
          </div>
        </button>
        <p className="mt-2">
          0.50<sup>ct</sup>
        </p>
      </div>
      <div className="col-ninth col-pad-xs col-panel-xs">
        <button className="btn btn-icon alt w-100 natural carat-070">
          <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
            <img src="img/svg/icon-shape-round.svg" alt="Round" />
          </div>
        </button>
        <p className="mt-2">
          0.70<sup>ct</sup>
        </p>
      </div>
      <div className="col-ninth col-pad-xs col-panel-xs">
        <button className="btn btn-icon alt w-100 created carat-100">
          <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
            <img src="img/svg/icon-shape-round.svg" alt="Round" />
          </div>
        </button>
        <p className="mt-2">
          1.00<sup>ct</sup>
        </p>
      </div>
      <div className="col-ninth col-pad-xs col-panel-xs">
        <button className="btn btn-icon alt w-100 natural carat-150">
          <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
            <img src="img/svg/icon-shape-round.svg" alt="Round" />
          </div>
        </button>
        <p className="mt-2">
          1.50<sup>ct</sup>
        </p>
      </div>
      <div className="col-ninth col-pad-xs col-panel-xs">
        <button className="btn btn-icon alt w-100 created carat-200">
          <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
            <img src="img/svg/icon-shape-round.svg" alt="Round" />
          </div>
        </button>
        <p className="mt-2">
          2.00<sup>ct</sup>
        </p>
      </div>
      <div className="col-ninth col-pad-xs col-panel-xs">
        <button className="btn btn-icon alt w-100 created carat-250">
          <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
            <img src="img/svg/icon-shape-round.svg" alt="Round" />
          </div>
        </button>
        <p className="mt-2">
          2.50<sup>ct</sup>
        </p>
      </div>
    </div>
  )
}
