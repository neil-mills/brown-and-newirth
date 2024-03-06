import React from 'react'

const ResultsFilter = () => {
  return (
    <div className="result-filter col-pad-sm d-flex align-items-center">
      <div className="nowrap me-3 filter-label">Filter by:</div>
      <select className="form-select alt bg-grey px-2 fw-300">
        <option>Naturally Formed/Mined</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}

export default ResultsFilter
