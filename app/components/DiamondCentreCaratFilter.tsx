import { useCentreCarats } from '@/app/hooks'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

export const DiamondCentreCaratFilter = () => {
  const centreCarats = useCentreCarats()
  const router = useRouter()
  const searchParams = useSearchParams()
  return (
    <div className="row row-pad-xs row-panels-sm row-natural-created justify-content-center text-xs text-uppercase text-center">
      {centreCarats.map((centreCarat) => (
        <div
          key={centreCarat.slug}
          className="col-ninth col-pad-xs col-panel-xs"
        >
          <button
            className={`btn btn-icon alt w-100 natural ${centreCarat.class}`}
            disabled={centreCarat.disabled}
          >
            <div className="icon-wrapper-square d-flex align-items-center justify-content-center">
              <Image
                src="/img/svg/icon-shape-round.svg"
                width={1}
                height={1}
                alt="Round"
              />
            </div>
          </button>
          <p className="mt-2">
            {centreCarat.label}
            <sup>ct</sup>
          </p>
        </div>
      ))}
    </div>
  )
}
