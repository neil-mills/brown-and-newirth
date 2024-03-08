import { ProductStyle, Mapping } from '../types'
import { useGetData } from './'
import { stylesMap } from '../maps'

export const useStyles = (): {
  styles: Mapping[]
  isLoading: boolean
  error: Error | null
} => {
  const { data: products, error, isLoading } = useGetData()
  let styles: Mapping[] = []
  if (!isLoading && !error && products) {
    const productStyles = Array.from(
      new Set(
        products
          .filter((product) => product?.attributes?.pa_style)
          .reduce((acc, product) => {
            return [...acc, ...product.attributes.pa_style!]
          }, [] as ProductStyle[])
      )
    )
    styles = productStyles.map((style) => {
      const map = stylesMap?.[style]
      return {
        label: map?.label || '',
        slug: map?.slug || '',
        image: map?.image || '',
      }
    })
  }

  return { styles, isLoading, error }
}
