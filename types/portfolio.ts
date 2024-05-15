export interface Portfolio {
  en: En
  ru: En
}

export interface En {
  portfolio_count: number
  portfolio: PortfolioElement[]
}

export interface PortfolioElement {
  id: string
  title: string
  slug: string
  cover: string
  description: string
  anons_vimeo: string
}
