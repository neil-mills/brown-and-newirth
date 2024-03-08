import { Select } from '@/app/components'
import { useStore, useVariationOptions } from '../hooks'
import { ChangeEvent } from 'react'

export const VariationOptions = () => {
  const {
    variations,
    size: selectedSize,
    metal: selectedMetal,
  } = useStore((store) => store.selectedSku)
  const { sizes, metals } = useVariationOptions()

  // const showOrderButton = selectedSize && selectedMetal

  const setSize = useStore((store) => store.setSize)
  const setMetal = useStore((store) => store.setMetal)

  return (
    <div className="row row-pad-sm mb-16px">
      <div className="col-sm col-pad-sm mb-3 mb-sm-0">
        <Select
          options={sizes}
          value={selectedSize}
          defaultLabel="Size"
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            setSize(event.target.value)
          }
        />
      </div>
      <div className="col-sm col-pad-sm mb-3 mb-sm-0">
        <Select
          options={metals}
          value={selectedMetal}
          defaultLabel="Metal"
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            setMetal(event.target.value)
          }
        />
      </div>
      <div className="col col-pad-sm">
        <button className="btn btn-border w-100">
          <span>Save/Compare</span>
        </button>
      </div>
    </div>
  )
  /*
  return (
    <ul>
      {primaryAttr === 'pa_gauge' && widths && (
        <li>
          <Select
            options={widths}
            value={selectedWidth}
            defaultLabel="Width"
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              setVariationOptionWidth(event.target.value)
            }
          />
        </li>
      )}
      <li>
        <Select
          options={sizes}
          value={selectedSize}
          defaultLabel="Size"
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            setVariationOptionSize(event.target.value)
          }
        />
      </li>
      <li>
        <Select
          options={metals}
          value={selectedMetal}
          defaultLabel="Metal"
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            setVariationOptionMetal(event.target.value)
          }
        />
      </li>
      {showOrderButton && (
        <>
          <li>&pound;{variation?.price}</li>
          <li>
            <button type="submit">Order</button>
          </li>
        </>
      )}
    </ul>
  )
  */
}
