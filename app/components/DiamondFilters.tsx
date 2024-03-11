import { DiamondOriginFilter, CaratFilter } from '@/app/components'
import { useDiamondFilters } from '../hooks'

const DiamondFilters = () => {
  const { diamonds, carats } = useDiamondFilters()
  return (
    <>
      <p className="fw-300">Filter By:</p>
      <DiamondOriginFilter diamonds={diamonds} />
      <hr />
      <CaratFilter carats={carats} />
    </>
  )
}

export default DiamondFilters
