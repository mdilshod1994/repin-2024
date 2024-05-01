export interface Home {
  en: HomeEn
  ru: HomeEn
}

export interface HomeEn {
  page: Page
  blog?: Blog[]
}

export interface Blog {
  id: number
  title: string
  slug: string
  cover: string
  description: string
  time?: string
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
  promo_video_short: string
  promo_video_long: string
  title_consalting: string
  subtitle_consalting: string
  description_consalting: string
  btn_text__consalting: string
  btn_link__consalting: string
  bg_consalting: boolean
  blog_title: string
  blog_subtitle: string
  blog_link_text: string
}

export interface Review {
  logo: string
  name: string
  text: string
}
