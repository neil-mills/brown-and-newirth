import { Select } from '@/app/components'
import { useStore, useVariationOptions } from '../hooks'
import { ChangeEvent } from 'react'

export const VariationOptions = () => {
  const { variation, primaryAttr } = useStore((store) => store.selectedItem)
  const { widths, sizes, metals } = useVariationOptions()

  const {
    width: selectedWidth,
    size: selectedSize,
    metal: selectedMetal,
  } = useStore((store) => store.variationOptions)
  const showOrderButton =
    (primaryAttr === 'pa_gauge' &&
      selectedWidth &&
      selectedSize &&
      selectedMetal) ||
    (primaryAttr === 'pa_total-carat' && selectedSize && selectedMetal)
  const setVariationOptionWidth = useStore(
    (store) => store.setVariationOptionWidth
  )
  const setVariationOptionSize = useStore(
    (store) => store.setVariationOptionSize
  )
  const setVariationOptionMetal = useStore(
    (store) => store.setVariationOptionMetal
  )
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
}
