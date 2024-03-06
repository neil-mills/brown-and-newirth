import { ProductStyle } from '../types'
import { useGetData } from './'
import { StyleMap, styles as styleMap } from '../maps'

export const useStyles = (): {
  styles: StyleMap[]
  isLoading: boolean
  error: Error | null
} => {
  const { data: products, error, isLoading } = useGetData()
  let styles: StyleMap[] = []
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
      const map = styleMap.find((map) => map.value === style)
      return { value: style, label: map?.label || '', image: map?.image || '' }
    })
  }

  return { styles, isLoading, error }
}
