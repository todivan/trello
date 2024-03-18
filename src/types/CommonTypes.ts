import { SortableObject } from "../Utils/ChangePosition";

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
  name: string;
  listId: number;
  description: string;
} & SortableObject;

export type TTaskContextType = {
  collectionOfTasks: TTask[];
  setCollectionOfTasks: React.Dispatch<React.SetStateAction<TTask[]>>;
};











