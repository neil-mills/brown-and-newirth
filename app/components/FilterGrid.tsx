'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Mapping } from '@/app/types'
import { formatSearchParams } from '@/app/utils'
import { useEffect, useState } from 'react'

export const FilterGrid = ({
  type,
  filters,
}: {
  type: 'pa_shape' | 'pa_shaped' | 'pa_profile' | 'pa_pattern' | 'pa_setting'
  filters: Mapping[]
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleClick = (value: string) => {
    setSelectedOptions(
      selectedOptions.includes(value)
        ? selectedOptions.filter((option) => option !== value)
        : [value, ...selectedOptions]
    )
  }

  useEffect(() => {
    const query = selectedOptions.length
      ? formatSearchParams(searchParams.toString(), {
          [type]: selectedOptions.join(','),
        })
      : null
    console.log(query)

    const { protocol, host, pathname } = window.location
    const newUrl = query
      ? `${protocol}//${host}${pathname}?${query}`
      : `${protocol}//${host}${pathname}`
    window.history.pushState({ path: newUrl }, '', newUrl)
  }, [selectedOptions, router, pathname, searchParams, type])

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
