// 'pa_metal-code'?: string
// 'pa_total-carat'?: string
// 'pa_centre-carat'?: string
// 'pa_diamond-quality'?: string
// pa_diamond?: string
// pa_gauge?: VariationGauge
// pa_width?: string
// pa_size?: VariationSize

export type FilterAttributeKeys =
  | 'pa_diamond'
  | 'pa_centre-carat'
  | 'pa_total-carat'
  | 'pa_shape'
  | 'pa_shaped'
  | 'pa_diamond-set'
  | 'pa_profile'
  | 'pa_gauge'
  | 'pa_width'
  | 'pa_pattern'
  | 'pa_diamond-set'
  | 'pa_profile'

export type VariationAttributeKeys =
  | 'pa_shape'
  | 'pa_metal-code'
  | 'pa_total-carat'
  | 'pa_centre-carat'
  | 'pa_diamond-quality'
  | 'pa_diamond'
  | 'pa_gauge'
  | 'pa_width'
  | 'pa_size'
  | 'pa_coverage'
  | 'pa_pattern'
  | 'pa_diamond-set'
  | 'pa_profile'

export type ProductAttributeKeys =
  | 'pa_metal-code'
  | 'pa_gauge'
  | 'pa_total-carat'
  | 'pa_centre-carat'
  | 'pa_diamond-quality'
  | 'pa_width'
  | 'pa_size'
  | 'pa_style'
  | 'pa_type-2'
  | 'pa_profile'
  | 'pa_shape'
  | 'pa_shoulders'
  | 'pa_finish'
  | 'pa_pattern'
  | 'pa_coverage'
  | 'pa_setting'
  | 'pa_shaped'
  | 'pa_diamond'

export type Filters = {
  [TKey in FilterAttributeKeys]?: string
}

export type ProductFilters = {
  [TKey in ProductAttributeKeys]?: string
}

export type VariationFilters = {
  [TKey in VariationAttributeKeys]?: string
}
