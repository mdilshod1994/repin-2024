export interface Portfolio {
  en: En
  ru: En
}

export interface En {
  portfolio_count: number
  portfolio: PortfolioElement[]
  categories: Category[]
}

export interface Category {
  term_id: number
  name: string
  slug: string
  term_group: number
  term_taxonomy_id: number
  taxonomy: string
  description: string
  parent: number
  count: number
  filter: string
}

export interface PortfolioElement {
  id: string
  title: string
  slug: string
  cover: string
  description: string
  anons_vimeo: string
}
