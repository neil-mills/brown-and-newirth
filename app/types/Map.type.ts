export interface Mapping {
  label: string
  image?: string
  class?: string
  slug: string
}

export interface Map {
  [key: string]: Mapping
}
