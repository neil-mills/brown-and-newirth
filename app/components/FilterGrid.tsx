import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Mapping } from '@/app/types'
import { formatSearchParams } from '@/app/utils'

export const FilterGrid = ({
  type,
  filters,
}: {
  type: 'pa_shape' | 'pa_shaped' | 'pa_profile' | 'pa_pattern'
  filters: Mapping[]
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleClick = (shape: string) => {
    const query = formatSearchParams(searchParams.toString(), {
      [type]: shape,
    })
    router.push(`${pathname}?${query}`)
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
