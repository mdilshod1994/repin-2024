export interface Blog {
  title: string
  date: string
  fields: Fields
  tags: string[]
}

export interface Fields {
  blog_view_announce: BlogViewAnnounce
  blog_thumb: string
  blog_excerpt: string
  blog_video: boolean
  blog_video_iframe: string
  blog_img: string
  blog_content_time: string
  blog_content_width: string
  blog_content_flex: BlogContentFlex[]
  blog_author_text: string
  blog_authors_list: BlogAuthorsList[]
  blog_lessong_link: string
  blog_less_img: string
  blog_less_title: string
  blog_less_desc: string
  blog_btn: string
  blog_description: string
  blog_subdescription: string
}

export interface BlogAuthorsList {
  item_name: string
  item_sign: string
}

export interface BlogContentFlex {
  acf_fc_layout: string
  flex_title_size?: BlogViewAnnounce
  flex_title_text?: string
  flex_p_title?: string
  flex_img_link?: string
  helper?: string
  flex_ul_type?: BlogViewAnnounce
  flex_ul_list?: FlexULList[]
  text?: string
  img?: string
  flex_iframe_code?: string
  video_file?: boolean
  video_vimeo?: string
  cover_photo?: string
  cover_video_file?: boolean
  cover_video_vimeo?: string
  img_1?: string
  img_2?: string
  flex_blockquote_text?: string
  flex_small_text?: string
}

export interface BlogViewAnnounce {
  value: string
  label: string
}

export interface FlexULList {
  item_ul: string
}
