import React from 'react'
import { useStore } from '@/app/hooks'
import { formatCarat } from '@/app/utils'

const DataTable = () => {
  const { product, variations } = useStore((store) => store.selectedSku)
  if (!product) return null
  const variation = variations[0]
  return (
    <div className="product-single-data-table position-relative">
      <div className="row g-0">
        <div className="col-6 col-sm-4">
          <div className="px-2 px-xl-3 pb-2 pb-sm-3">
            <h6>Diamond Shape</h6>
            <p className="fw-300">{product?.attributes?.pa_shape}</p>
          </div>
        </div>
        <div className="col-6 col-sm-4">
          <div className="px-2 px-xl-3 pb-2 pb-sm-3">
            <h6>Diamond Quality</h6>
            <p className="fw-300">
              {variation?.attributes?.['pa_diamond-quality']}
            </p>
          </div>
        </div>
        <div className="col-6 col-sm-4">
          <div className="px-2 px-xl-3 pb-2 pb-sm-3 pt-2 pt-sm-0">
            <h6>Diamond Origin</h6>
            <p className="fw-300">{product?.attributes?.pa_diamond}</p>
          </div>
        </div>
        <div className="col-6 col-sm-4">
          <div className="px-2 px-xl-3 pt-2 pt-sm-3">
            <h6>Centre Carat</h6>
            <p className="fw-300">
              {formatCarat(variation?.attributes?.['pa_centre-carat'])}
              <sup>ct</sup>
            </p>
          </div>
        </div>
        <div className="col-6 col-sm-4">
          <div className="px-2 px-xl-3 pt-2 pt-sm-3">
            <h6>Total Carat</h6>
            <p className="fw-300">
              {formatCarat(variation?.attributes?.['pa_total-carat'])}
              <sup>ct</sup>
            </p>
          </div>
        </div>
        <div className="col-6 col-sm-4">
          <div className="px-2 px-xl-3 pt-2 pt-sm-3">
            <h6>Product Code</h6>
            <p className="fw-300">{variation.sku}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataTable
