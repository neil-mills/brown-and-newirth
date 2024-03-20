'use client'
import { useSearchParams } from 'next/navigation'
import { Mapping, ProductFilterAttributeKeys } from '@/app/types'
import { getFilterSearchParamUrl } from '@/app/utils'
import { useStore } from '@/app/hooks'

interface Props {
  type: ProductFilterAttributeKeys
  filters: Mapping[]
  childType?: ProductFilterAttributeKeys | null
}

export const FilterGrid = ({ type, filters, childType }: Props) => {
  const searchParams = useSearchParams()
  const searchParam = searchParams.get(type)
  const storeFilters = useStore((store) => store.filters)
  const setFilters = useStore((store) => store.setFilters)

  const handleClick = (value: string) => {
    const newOptions = storeFilters[type].includes(value)
      ? storeFilters[type].filter((option) => option !== value)
      : [value, ...storeFilters[type]]
    const newUrl = getFilterSearchParamUrl({
      type,
      childType,
      selectedOptions: newOptions,
    })
    if (childType) {
      setFilters({ ...storeFilters, [type]: newOptions, [childType]: [] })
    } else {
      setFilters({ ...storeFilters, [type]: newOptions })
    }
    window.history.pushState({ path: newUrl }, '', newUrl)
  }

  return (
    <div className="row row-pad-sm row-panels-sm justify-content-center">
      {filters.map((filter) => (
        <div
          className="col-fifth col-pad-sm col-panel-sm col-panel-sm"
          key={filter.slug}
        >
          <button
            className="btn btn-icon bg-gradient-grey w-100"
            onClick={() => handleClick(filter.slug)}
            aria-pressed={storeFilters[type].includes(filter.slug)}
          >
            <p className="pt-2 mb-0">{filter.label}</p>
            <div className="icon-wrapper-square d-flex align-items-center justify-content-center px-4 pb-2">
              <img src={filter.image} alt={filter.label} />
            </div>
          </button>
        </div>
      ))}
    </div>
  )
}
