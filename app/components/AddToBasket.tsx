import React from 'react'

const AddToBasket = () => {
  return (
    <div className="row g-0">
      <div className="product-single-price-wrapper d-flex align-items-center product-single-price-wrapper">
        <span className="text-xs text-uppercase letter-spacing me-2 me-sm-3">
          Price
        </span>
        <span className="fw-300 ms-0">&pound;2695</span>
      </div>
      <div className="product-single-add-to-basket">
        <button
          className="btn bg-pink w-100"
          data-bs-toggle="modal"
          data-bs-target="#modalBasket"
        >
          <span>Add to basket</span>
        </button>
      </div>
    </div>
  )
}

export default AddToBasket
