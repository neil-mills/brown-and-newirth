'use client'
import { useVariationFilterOptions } from '@/app/hooks'
import { formatSearchParams } from '@/app/utils'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export const GaugeFilter = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const gauges = useVariationFilterOptions({ filter: 'pa_gauge' })
  const router = useRouter()

  const handleClick = (gauge: string) => {
    const query = formatSearchParams(searchParams.toString(), {
      pa_gauge: gauge,
    })
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="row row-pad-xs row-panels-sm">
      {gauges.map((gauge) => {
        const isActive = searchParams.get('pa_gauge') === gauge.slug
        return (
          <div key={gauge.slug} className="col col-pad-xs col-panel-sm">
            <button
              className={`btn${
                isActive ? ' bg-pink' : ''
              } btn-filter btn-border btn-gauge-${gauge.slug} h-100 w-100 px-1`}
              onClick={() => handleClick(gauge.slug)}
            >
              <span>{gauge.label}</span>
            </button>
          </div>
        )
      })}
    </div>
  )
}
