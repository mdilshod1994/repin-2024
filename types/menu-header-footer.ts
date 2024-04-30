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
