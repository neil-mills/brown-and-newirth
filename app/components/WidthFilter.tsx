import { useFilterSearchParams, useWidths } from '@/app/hooks'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { formatSearchParams } from '@/app/utils'
import { Widths } from '@/app/types'

const WidthFilter = () => {
  const searchParams = useSearchParams()
  const filters = useFilterSearchParams(searchParams.toString())
  const [widths, availableWidths] = useWidths({ filters })
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (width: string) => {
    const query = formatSearchParams(searchParams.toString(), {
      pa_width: width,
    })
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="row row-pad-xs row-panels-sm row-gauges justify-content-center text-xs text-center">
      {widths.map((width) => (
        <div key={width.slug} className="col-tenth col-pad-xs col-panel-xs">
          <button
            className="btn btn-icon gauge alt w-100 ultra-light"
            onClick={() => handleClick(width.slug)}
            disabled={!availableWidths.includes(width.slug as Widths)}
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

export default WidthFilter
