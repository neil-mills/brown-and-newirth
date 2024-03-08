import { usePathname, useRouter } from 'next/navigation'
import { Mapping } from '../types'

export const FilterGrid = ({
  type,
  filters,
}: {
  type: 'shape' | 'profile'
  filters: Mapping[]
}) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="row row-pad-sm row-panels-sm justify-content-center">
      {filters.map((filter) => (
        <div
          className="col-fifth col-pad-sm col-panel-sm col-panel-sm"
          key={filter.slug}
        >
          <button
            className="btn btn-icon bg-gradient-grey w-100"
            onClick={() => router.push(`${pathname}?${type}=${filter.slug}`)}
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
