import { SortableObject } from "../types/CommonTypes";

export function changePosition<T extends SortableObject>(
    listId: number, 
    offset: number, 
    collectionOfObjects: T[], 
    setCollectionOfObjects: React.Dispatch<React.SetStateAction<T[]>>) :void {
    const index = collectionOfObjects.findIndex((item) => item.id === listId);

    if (index === -1) {
        return;
    }

    const updatedList = [...collectionOfObjects];
    const itemToMove = updatedList[index];
    const newPosition = itemToMove.position + offset;

    if (newPosition < 1 || newPosition > updatedList.length) {
        return;
    }

    updatedList.splice(index, 1);

    updatedList.splice(newPosition - 1, 0, itemToMove);

    updatedList.forEach((item, i) => {
        item.position = i + 1;
    });

    setCollectionOfObjects(updatedList);
};