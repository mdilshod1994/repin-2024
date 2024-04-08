export interface GlobalData {
  en: En
  ru: En
}

export interface En {
  page: Page
  categories: Category[]
  footer: Footer
  header: Header
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

export interface Footer {
  menu: Menu[]
  contact: Contact
}

export interface Contact {
  title: string
  text: string
}

export interface Menu {
  name: string
  link: string
}

export interface Header {
  menu: Menu[]
}

export interface Page {
  promo_title: string
  promo_title_about: string
  promo_about_btn: string
  promo_bottom_line_1: string
  promo_bottom_line_2: string
  scroll_down: string
  portfolio_title: string
  portfolio_subtitle: string
  portfolio_btn: string
  reviews_title: string
  reviews_subtitle: string
  reviews: Review[]
}

export interface Review {
  logo: string
  name: string
  text: string
}
