'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Mapping } from '@/app/types'
import { getFilterSearchParamUrl } from '@/app/utils'
import { useEffect, useState } from 'react'

interface Sibling {
  type: string
  filters: Mapping[]
}

interface Props {
  type: 'pa_shape' | 'pa_shaped' | 'pa_profile' | 'pa_pattern' | 'pa_setting'
  filters: Mapping[]
  sibling?: Sibling | null
}

export const FilterGrid = ({ type, filters, sibling }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchParam = searchParams.get(type)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleClick = (value: string) => {
    setSelectedOptions(
      selectedOptions.includes(value)
        ? selectedOptions.filter((option) => option !== value)
        : [value, ...selectedOptions]
    )
  }

  useEffect(() => {
    if (searchParam) {
      // setSelectedOptions(searchParam.split(','))
      console.log(searchParam)
    }
  }, [searchParam])

  useEffect(() => {
    const newUrl = getFilterSearchParamUrl({
      type,
      sibling,
      selectedOptions,
      searchParams: window.location.search.replace('?', ''),
    })
    window.history.pushState({ path: newUrl }, '', newUrl)
  }, [selectedOptions, router, pathname, type, sibling, filters])

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
            aria-pressed={selectedOptions.includes(filter.slug)}
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
