
export type TList = {
  id: number;
  name: string;
  position: number;
  description: string;
};

export type TListContextType = {
  collectionOfLists: TList[];
  setCollectionOfLists: React.Dispatch<React.SetStateAction<TList[]>>;
};

export type TTask = {
  id: number;
  name: string;
  listId: number;
  description: string;
};

export type TTaskContextType = {
  collectionOfTasks: TTask[];
  setCollectionOfTasks: React.Dispatch<React.SetStateAction<TTask[]>>;
};

export type TListProps = {
  key: React.Key;
  list: TList;
  updateList: (updatedItem: TList) => void;
  changePosition: (listId: number, offset: number) => void;
};

export type TListHeaderProps = {
  list: TList;
  updateList: (updatedItem: TList) => void;
};

export type TListDetailsProps = {
  list: TList;
  handleClose: () => void;
  isOpen: boolean;
};

export type TListMoveNavigationProps = {
  listId: number, 
  changePosition: (listId: number, offset: number) => void;
};