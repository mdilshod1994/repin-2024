import type { reUseBlock1 } from "./blockTypes"

export interface PortfolioCase {
  title: string
  block_1: Block1
  team: Team
  content: Content[]
  repin_agency_mobicom: reUseBlock1
}

export interface Block1 {
  cover_in_project: CoverInProject
  img_pc: string
  video_first_mp4: string
  video_first_full_mp4: string
  subtitle: string
  link_work: string
  link_work_name: string
  tags: string[]
  anons_vimeo: string
  anons_vimeo_full: string
}
export interface CoverInProject {
  img_proj: string
  img_proj_mob: boolean
  img_proj_vid_mp4: string
  img_proj_vid_mp4_mob: boolean
  "img-proj_vimeo": string
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
  iframe?: string
  fda_desc?: string
  fda_avatar?: string
  fda_name?: string
  fda_sign?: string
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
