import { useStore } from '@/app/hooks'
import { VariationOptions } from '@/app/components'

export const ProductDetails = () => {
  const { variation, primaryAttr } = useStore((store) => store.selectedItem)

  return (
    <>
      <p>{variation?.sku}</p>
      <dl>
        {primaryAttr === 'pa_gauge' ? (
          <>
            <dt>Profile:</dt>
            <dd></dd>
            <dt>Gauge:</dt>
            <dd>{variation?.attributes.pa_gauge}</dd>
          </>
        ) : (
          <>
            <dt>Diamond shape:</dt>
            <dd>?</dd>
            <dt>Centre carat:</dt>
            <dd>
              {variation?.attributes['pa_centre-carat']}
              <sup>ct</sup>
            </dd>
            <dt>Total carat:</dt>
            <dd>
              {variation?.attributes['pa_total-carat']}
              <sup>ct</sup>
            </dd>
            <dt>Diamond quality:</dt>
            <dd>{variation?.attributes['pa_diamond-quality']}</dd>
            <dt>Diamond origin:</dt>
            <dd>?</dd>
          </>
        )}
      </dl>
      <VariationOptions />
    </>
  )
}
