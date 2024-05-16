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
  img: string
  link: string
  rounding: string
  video_vimeo: string
  "web-service": string
  "web-service-name": string
  "web-service-name_icon": false
}
