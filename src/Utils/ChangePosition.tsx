export interface SortableObject {
  id: number
  position: number
}

export function changePosition<T extends SortableObject> (
  listId: number,
  offset: number,
  collectionOfObjects: T[],
  updateCollection: (updatedList: T[]) => void
): void {
  const index = collectionOfObjects.findIndex((item) => item.id === listId)

  if (index === -1) {
    return
  }

  const newPosition = index + offset

  if (newPosition < 0 || newPosition > collectionOfObjects.length - 1) {
    return
  }

  // const updatedList = index < newPosition
  // ? [...collectionOfObjects.slice(0, index), ...collectionOfObjects.slice(index + 1, newPosition + 1), collectionOfObjects[index], ...collectionOfObjects.slice(newPosition + 1)]
  // : [...collectionOfObjects.slice(0, newPosition), collectionOfObjects[index], ...collectionOfObjects.slice(newPosition, index), ...collectionOfObjects.slice(index + 1)]

  const updatedList = collectionOfObjects.reduce((acc: T[], currentItem: T, currentIndex: number) => {
    if (currentIndex === index) {
      return acc
    }

    if (currentIndex === newPosition) {
      if (index < newPosition) {
        return [...acc, currentItem, collectionOfObjects[index]]
      } else {
        return [...acc, collectionOfObjects[index], currentItem]
      }
    }

    return [...acc, currentItem]
  }, [])

  updatedList.forEach((item, i) => {
    item.position = i + 1
  })

  updateCollection(updatedList)
};
