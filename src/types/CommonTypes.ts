
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
  position: number;
  description: string;
};

export type TTaskContextType = {
  collectionOfTasks: TTask[];
  setCollectionOfTasks: React.Dispatch<React.SetStateAction<TTask[]>>;
};

export type TTaskProps = {
  key: React.Key;
  task: TTask;
  isFocusOnNew: boolean;
  changeTaskPosition: (listId: number, offset: number) => void;
};

export type TListProps = {
  key: React.Key;
  list: TList;
  isFocusOnNewList: boolean;
};

export type TListHeaderProps = {
  list: TList;
  isFocusOnNewList: boolean;
};

export type TListDetailsProps = {
  list: TList;
  handleClose: () => void;
  isOpen: boolean;
};

export type TListMoveNavigationProps = {
  listId: number;
};

export type TTaskDetailsProps = {
  task: TTask;
  handleClose: () => void;
  isOpen: boolean;
};