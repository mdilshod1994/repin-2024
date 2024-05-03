// Used on page about and portfolio cases
export interface reUseBlock1 {
  title: string
  description: string
  items: Block1Item[]
  img: string
}

export interface Block1Item {
  photo: string
  name: string
  status: string
}

export interface Block2 {
  en: Block2En
  ru: Block2En
}

export interface Block2En {
  post_content: string
  post_title: string
  slug: string
}
