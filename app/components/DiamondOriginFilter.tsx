'use client'
import { Mapping } from '../types'
import { useStore } from '../hooks'
import { usePathname, useRouter } from 'next/navigation'

export const DiamondOriginFilter = ({ diamonds }: { diamonds: Mapping[] }) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
      <p className="fw-300">Filter By:</p>
      <div className="row row-pad-sm">
        {diamonds.map((origin, i) => (
          <div
            key={origin.slug}
            className={`col-sm-6 col-lg-12 col-xl-6 col-pad-sm ${
              i === 0 ? 'mb-2 mb-sm-0 mb-lg-2 mb-xl-0' : ''
            }`}
          >
            <button
              className={`btn btn-filter btn-border ${origin.class} w-100`}
              onClick={() => router.push(`${pathname}?diamond=${origin.slug}`)}
            >
              <span>{origin.label}</span>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
