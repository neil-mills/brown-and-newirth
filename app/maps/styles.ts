import { Styles } from '@/app/types'

interface Map {
  label: string
  slug: string
  image: string
  filter: (
    | 'shape'
    | 'setting'
    | 'diamond-set'
    | 'profile'
    | 'style'
    | 'colour'
  )[]
}

type StyleMap = { [K in Styles]: Map }

export const stylesMap: StyleMap = {
  Halo: {
    label: 'Halos',
    slug: 'halo',
    image: '/img/02_halos.png',
    filter: ['shape'],
  },
  Solitaire: {
    label: 'Solitaires',
    slug: 'solitaire',
    image: '/img/01_solitaires.png',
    filter: ['shape'],
  },
  Cluster: {
    label: 'Clusters',
    slug: 'cluster',
    image: '/img/03_clusters.png',
    filter: ['shape'],
  },
  'Three Stone': {
    label: '3-Stones',
    slug: '3-stone',
    image: '/img/04_3-stones.png',
    filter: ['shape'],
  },
  'Five Stone': {
    label: '5-Stones',
    slug: '5-stone',
    image: '/img/04_3-stones.png',
    filter: ['shape'],
  },
  Trilogy: {
    label: 'Trilogies',
    slug: 'trilogy',
    image: '/img/04_3-stones.png',
    filter: ['shape'],
  },
  Other: {
    label: 'Others',
    slug: 'other',
    image: '/img/04_3-stones.png',
    filter: ['shape'],
  },
  BRACELET: {
    label: 'Bracelets',
    slug: 'bracelet',
    image: '/img/16_bracelets.png',
    filter: ['shape'],
  },
  EARRING: {
    label: 'Earrings',
    slug: 'earring',
    image: '/img/14_earrings.png',
    filter: ['shape'],
  },
  PENDANT: {
    label: 'Pendants',
    slug: 'pendant',
    image: '/img/15_pendants.png',
    filter: ['shape'],
  },
  'DRESS RING': {
    label: 'Dress',
    slug: 'dress',
    image: '/img/13_dress.png',
    filter: ['shape'],
  },
  'FULL SET': {
    label: 'Full set',
    slug: 'full-set',
    image: '/img/12_full-set.png',
    filter: ['shape', 'setting'],
  },
  'HALF SET': {
    label: 'Half set',
    slug: 'half-set',
    image: '/img/11_half-set.png',
    filter: ['shape', 'setting'],
  },
  Shaped: {
    label: 'Shaped',
    slug: 'shaped',
    image: '/img/09_shaped.png',
    filter: ['diamond-set', 'shape'],
  },
  Plains: {
    label: 'Plains',
    slug: 'plains',
    image: '/img/05_plains.png',
    filter: ['profile'],
  },
  Patterns: {
    label: 'Patterns',
    slug: 'patterns',
    image: '/img/06_patterns.png',
    filter: ['style'],
  },
  Ceramic: {
    label: 'Ceramic',
    slug: 'ceramic',
    image: '/img/08_ceramic.png',
    filter: ['colour'],
  },
  Diamond: {
    label: 'Diamond',
    slug: 'diamond',
    image: '/img/10_diamond.png',
    filter: ['shape'],
  },
  'Two Colour': {
    label: '2-Colour',
    slug: '2-colour',
    image: '/img/07_2-colour.png',
    filter: ['profile'],
  },
}
