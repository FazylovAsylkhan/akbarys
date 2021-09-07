export interface PaginationProps {
  params: {
    pagination: {
      el: string
      clickable: boolean
      bulletClass: string
      bulletActiveClass: string
      bulletElement: string
    }
  }
}

export interface ScrollbarProps {
  params: {
    scrollbar: {
      el: string
      dragClass: string
      draggable: boolean
    }
  }
}

export enum HeaderTypes {
  DARK,
  LIGHT,
}

export interface HeaderProps {
  color: HeaderTypes
}
