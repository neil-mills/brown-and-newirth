'use client'
import { useFilterSearchParams, useRangeFilter } from '@/app/hooks'
import { Widths } from '@/app/types'
import { formatSearchParams } from '@/app/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const WidthFilter = () => {
  const searchParams = useSearchParams()
  const filters = useFilterSearchParams(searchParams.toString())
  const [widths, availableWidths] = useRangeFilter<Widths>({
    rangeFilter: 'pa_width',
    filters,
  })
  const [selectedWidths, setSelectedWidths] = useState<string[]>([])
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (value: string) => {
    setSelectedWidths(
      selectedWidths.includes(value)
        ? selectedWidths.filter((option) => option !== value)
        : [value, ...selectedWidths]
    )
  }

  useEffect(() => {
    const query = selectedWidths.length
      ? formatSearchParams(searchParams.toString(), {
          pa_width: selectedWidths.join(','),
        })
      : null
    if (query) {
      const { protocol, host, pathname } = window.location
      const newUrl = `${protocol}//${host}${pathname}?${query}`
      window.history.pushState({ path: newUrl }, '', newUrl)
    }
  }, [router, selectedWidths, searchParams, pathname])

  return (
    <div className="row row-pad-xs row-panels-sm row-gauges justify-content-center text-xs text-center">
      {widths.map((width) => (
        <div key={width.slug} className="col-tenth col-pad-xs col-panel-xs">
          <button
            className="btn btn-icon gauge alt w-100 ultra-light"
            onClick={() => handleClick(width.slug)}
            disabled={!availableWidths.includes(width.slug as Widths)}
            aria-pressed={selectedWidths.includes(width.slug)}
          >
            <div className="icon-wrapper-gauge d-flex align-items-center justify-content-center py-3 px-2">
              <img src={width.image} alt={width.label} />
            </div>
          </button>
          <p className="mt-2">{width.label}</p>
        </div>
      ))}
    </div>
  )
}
