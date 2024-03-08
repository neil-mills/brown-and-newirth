export type ProductAttributes = 'pa_shape' | 'pa_profile'

export type Filters = {
  [TKey in ProductAttributes]: string
}
