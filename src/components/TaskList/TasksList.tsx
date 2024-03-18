import Task from '../Task/Task'
import { TaskProvider, useTasks } from '../../context/TaskContext'
import { Box, Button, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ListHeader from './ListHeader'
import ListMoveNavigation from './ListMoveNavigation'
import { useMemo, useState } from 'react'
import { type TList } from '../../types/CommonTypes'

export interface TListProps {
  key: React.Key
  list: TList
  isFocusOnNewList: boolean
}

const TasksList: React.FC<TListProps> = ({ list, isFocusOnNewList }: TListProps) => {
  const { collectionOfTasks, setCollectionOfTasks } = useTasks()
  const [newAddedId, setNewAddedId] = useState(-1)

  const addNewTask = () => {
    const newObject = {
      id: collectionOfTasks.length + 1,
      name: `Name ${collectionOfTasks.length + 1}`,
      listId: list.id,
      position: collectionOfTasks.length + 1,
      description: `Description ${collectionOfTasks.length + 1}`
    }
    setCollectionOfTasks(prevList => [...prevList, newObject])
    setNewAddedId(newObject.id)
  }

  const sortedTsks = useMemo(() => {
    return [...collectionOfTasks].sort((a, b) => a.position > b.position ? 1 : -1)
  }, [collectionOfTasks])

  return (
        <TaskProvider>
            <Box borderRadius={3} sx={{ bgcolor: '#323a48', padding: '10px' }}>
                <Stack spacing={1}>
                    <Box>
                        <ListHeader list={list} isFocusOnNewList={isFocusOnNewList}/>
                        <ListMoveNavigation listId={list.id} />
                    </Box>

                    {sortedTsks.filter(x => x.listId === list.id).map((item) => (
                        <Task key={item.id} task={item} isFocusOnNew={newAddedId === item.id} collectionOfTasks={collectionOfTasks} setCollectionOfTasks={setCollectionOfTasks} />
                    ))}

                    <Button variant="outlined" sx={{ color: 'white' }} startIcon={<AddIcon />} onClick={addNewTask}>
                    Add a card
                    </Button>
                </Stack>
            </Box>
        </TaskProvider>
  )
}

export default TasksList
