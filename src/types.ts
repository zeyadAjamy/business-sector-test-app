export interface ControllerType {
  changePage: (num: number) => void;
  currentPageNumber: number;
  number_pages: number;
}

export interface CardsType {
  list: any;
  startItem: number;
  numberItemsPage: number;
  Template: ({ element, index }: any) => JSX.Element;
}

export interface ContainerType {
  list: any;
  Template: ({ element, index }: any) => JSX.Element;
}

export interface ListPagesType {
  number_pages: number;
  currentPageNumber: number;
  changePage: (pageNumber: number) => void;
}

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
