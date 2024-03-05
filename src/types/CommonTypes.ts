
export type TList = {
  id: number;
  name: string;
  description: string;
};

export type TListContextType = {
  collectionOfLists: TList[];
  setCollectionOfLists: React.Dispatch<React.SetStateAction<TList[]>>;
};

export type TTask = {
  id: number;
  name: string;
  listName: string;
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
};