import React, { useMemo, useState } from 'react'
import TasksList from '../TaskList/TasksList'
import { useLists } from '../../context/ListsContext'
import { TaskProvider } from '../../context/TaskContext'
import { Button, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const BoardContent = () => {
  const { collectionOfLists, setCollectionOfLists } = useLists()
  const [newAddedId, setNewAddedId] = useState(-1)

  const addNewList = () => {
    const newObject = {
      id: collectionOfLists.length + 1,
      name: `Name ${collectionOfLists.length + 1}`,
      position: collectionOfLists.length + 1,
      description: `Description ${collectionOfLists.length + 1}`
    }
    setCollectionOfLists((prevList) => [...prevList, newObject])
    setNewAddedId(newObject.id)
  }

  const sortedLists = useMemo(() => {
    return [...collectionOfLists].sort((a, b) => a.position > b.position ? 1 : -1)
  }, [collectionOfLists])

  return (
    <div data-testid='BoardContent'>
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
        >
            <TaskProvider>
                {sortedLists.map((item) => (
                    <TasksList key={item.id} list={item} isFocusOnNewList={newAddedId === item.id} />
                ))}
                <Button sx={{ color: 'white' }} variant="outlined" startIcon={<AddIcon />} onClick={addNewList}>
                    Add another list
                </Button>
            </TaskProvider>
        </Stack>
    </div>
  )
}

export default BoardContent
