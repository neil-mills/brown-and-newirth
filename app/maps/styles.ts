export interface StyleMap {
  value: string
  label: string
  image: string
}

export const styles: StyleMap[] = [
  { value: 'Halo', label: 'Halos', image: '/img/02_halos.png' },
  { value: 'Solitaire', label: 'Solitaires', image: '/img/01_solitaires.png' },
  { value: 'Cluster', label: 'Clusters', image: '/img/03_clusters.png' },
  { value: 'Three Stone', label: '3-Stones', image: '/img/04_3-stones.png' },
  { value: 'Five Stone', label: '5-Stones', image: '/img/04_3-stones.png' },
  { value: 'Trilogy', label: 'Trilogies', image: '/img/04_3-stones.png' },
  { value: 'Other', label: 'Others', image: '/img/04_3-stones.png' },
]
