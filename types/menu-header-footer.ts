export interface Menu {
  en: En
  ru: En
}
export interface En {
  footer: Footer
  header: Header
}
export interface Footer {
  menu: MenuElement[]
  contact: Contact
  follow_us: MenuElement[]
  copyright: string
  email: string
  top: string
  cookies_text: string
  cookies_more: string
  cookies_accept: string
}
export interface Contact {
  title: string
  text: string
}
export interface MenuElement {
  name: string
  link: string
}
export interface Header {
  menu: MenuElement[]
}
