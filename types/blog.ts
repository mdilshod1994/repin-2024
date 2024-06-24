export interface Blogs {
  en: BlogsWrap
  ru: BlogsWrap
}

export interface BlogsWrap {
  curr_page: number
  total_blogs: number
  total_pages: number
  blogs: Blog[]
}

export interface Blog {
  id: number
  title: string
  slug: string
  cover: string
  description: string
  video_file: boolean
  video_vimeo: null
  time: null | string
}
