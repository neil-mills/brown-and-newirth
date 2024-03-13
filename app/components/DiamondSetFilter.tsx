import { TitleBar } from './TitleBar'

const DiamondSetFilter = () => {
  return (
    <>
      <TitleBar>Diamond Set?</TitleBar>
      <div className="nav nav-pills mb-225rem row row-pad-sm" role="tablist">
        <div
          className="nav-item col-sm-6 col-lg-12 col-xl-6 col-pad-sm mb-2 mb-sm-0 mb-lg-2 mb-xl-0"
          role="presentation"
        >
          <button
            className="btn btn-border w-100"
            data-bs-toggle="pill"
            data-bs-target="#diamond-set-yes"
            type="button"
            role="tab"
          >
            Yes
          </button>
        </div>
        <div
          className="nav-item col-sm-6 col-lg-12 col-xl-6 col-pad-sm"
          role="presentation"
        >
          <button
            className="btn btn-border w-100"
            data-bs-toggle="pill"
            data-bs-target="#diamond-set-no"
            type="button"
            role="tab"
          >
            No
          </button>
        </div>
      </div>
    </>
  )
}

export default DiamondSetFilter
