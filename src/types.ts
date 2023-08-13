export interface ControllerType {
  changePage: (num: number, totalNumberOfPages: number) => void;
  currentPageNumber: number;
  totalNumberOfPages: number;
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
  startIndex: string | number;
}

export interface ListPagesType {
  totalNumberOfPages: number;
  currentPageNumber: number;
  changePage: (pageNumber: number, totalNumberOfPages: number) => void;
}

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface InputElementProps {
  placeholder: string;
  type: string;
  className: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
