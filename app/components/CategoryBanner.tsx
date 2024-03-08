import React from 'react'

export const CategoryBanner = () => {
  return (
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
  )
}
