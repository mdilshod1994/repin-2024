export interface PortfolioCase {
  title: string
  block_1: Block1
  team: Team
  content: Content[]
}

export interface Block1 {
  img_pc: string
  video_first: string
  video_first_full: string
  subtitle: string
  link_work: string
  link_work_name: string
  tags: string[]
}

export interface Content {
  acf_fc_layout: string
  ftd_title?: string
  ftd_desc?: string
  before_img?: string
  after_img?: string
  title?: string
  text?: string
  images?: string[]
  text_1?: string
  text_2?: string
  img?: string
  image_1?: string
  image_2?: string
  fbi_img?: string
  fbi_video?: string
}

export interface Team {
  team_title: string
  team_list: TeamList[]
  agency_mobicom_founders: AgencyMobicomFounder[]
  agency_mobicom_desc: string
  agency_mobicom_image: string
}

export interface AgencyMobicomFounder {
  photo: string
  name: string
  status: string
}

export interface TeamList {
  team_avatar: string
  team_name: string
  team_sign: string
}
