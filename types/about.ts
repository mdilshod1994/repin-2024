import type { reUseBlock1 } from "./blockTypes"

export interface About {
  en: En
  ru: Ru
}

export interface En {
  page: EnPage
}

export interface EnPage {
  title: string
  title_big: string
  video_short: string
  video_long: string
  title_b2: string
  description_b2: string
  items_b2: ItemsB2[]
  title_b3: string
  description_b3: string
  items_b3: boolean
  title_b4: string
  subtitle_b4: string
  items_b4: ItemsB4[]
  btn_b4_text: string
  btn_b4_link: string
  title_b5: string
  subtitle_b5: string
  link_b5_text: string
  link_b5: string
  items_b5: ItemsB5[]
  img_b6: string
  repin_agency_mobicom: reUseBlock1
}

export interface ItemsB2 {
  number: string
  value: string
}

export interface ItemsB4 {
  title: string
  icon: string
}

export interface ItemsB5 {
  name: string
  categories: Category[]
  icons: Icon[]
  img: string
}

export interface Category {
  name: string
}

export interface Icon {
  svg: string
}

export interface Ru {
  page: RuPage
}

export interface RuPage {
  title: string
  title_big: string
  video_short: string
  video_long: string
  title_b2: string
  description_b2: string
  items_b2: ItemsB2[]
  title_b3: string
  description_b3: string
  items_b3: ItemsB3[]
  title_b4: string
  subtitle_b4: string
  items_b4: ItemsB4[]
  btn_b4_text: string
  btn_b4_link: string
  title_b5: string
  subtitle_b5: string
  link_b5_text: string
  link_b5: string
  items_b5: ItemsB5[]
  img_b6: string
  repin_agency_mobicom: reUseBlock1
}

export interface ItemsB3 {
  title: string
  description: string
  tags: Tag[]
  helper: string
}

export interface Tag {
  tag: string
}
