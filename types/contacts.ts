export interface Contacts {
  en: En
  ru: En
}

export interface En {
  page: Page
}

export interface Page {
  title_page: string
  email: string
  description: string
  subtitle_page: string
  messengers: Messenger[]
  social_media: SocialMedia
}

export interface Messenger {
  icon: string
  name: string
  link: string
}

export interface SocialMedia {
  title: string
  subtitle: string
  items: Item[]
}

export interface Item {
  link: string
  link_name: string
  link_icon: string
  img: string
  video: string
  rounding: boolean
}
