export interface Mapping {
  label: string
  image: string
  slug: string
}

export interface Map {
  [key: string]: Mapping
}
