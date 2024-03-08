import { useGetData } from '.'
import { Mapping } from '../types'
import { shapesMap } from '../maps'

export const useShapes = (): {
  shapes: Mapping[]
  isLoading: boolean
  error: Error | null
} => {
  const { data: products, error, isLoading } = useGetData()
  let shapes: Mapping[] = []
  if (!isLoading && !error && products) {
    shapes = Array.from(
      new Set(
        products
          ?.reduce((acc, product) => {
            if (product?.attributes?.pa_shape) {
              acc = [...acc, ...product.attributes.pa_shape]
            }
            return acc
          }, [] as string[])
          .map((shape) => shapesMap[shape])
      )
    )
  }
  return { shapes, isLoading, error }
}
