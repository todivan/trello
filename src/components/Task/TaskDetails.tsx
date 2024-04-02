import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, type SelectChangeEvent } from '@mui/material'
import { useLists } from '../../context/ListsContext'
import { useTasks } from '../../context/TaskContext'

export interface TTaskDetailsProps {
  name: string
  description: string
  handleClose: () => void
  isOpen: boolean
  taskId: number
  listId: number
}

const TaskDetails: React.FC<TTaskDetailsProps> = ({ isOpen, handleClose, name, description, listId, taskId }) => {
  const { collectionOfLists } = useLists()
  const { setCollectionOfTasks } = useTasks()

  const handleChange = (event: SelectChangeEvent<number>) => {
    const selectedListId = event.target.value as number
    setCollectionOfTasks(prevObjects =>
      prevObjects.map(obj =>
        obj.id === taskId ? { ...obj, listId: selectedListId } : obj
      )
    )
  }

  return (
    <div data-testid='ItemDetails'>
        <Dialog open={isOpen} onClose={handleClose} >
          <DialogTitle sx={{ color: 'white', backgroundColor: 'black' }}><b>Name: </b>{name}</DialogTitle>
          <DialogContent sx={{ color: 'white', backgroundColor: 'black' }}>
            <p><b>Description: </b>{description}</p>
            <p>State:
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={listId}
                label="Age"
                sx={{ color: 'white' }}
                onChange={handleChange}
            >
                {collectionOfLists.map((item) => (
                  <MenuItem color='white' key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
            </Select>
            </p>
          </DialogContent>
          <DialogActions sx={{ color: 'white', backgroundColor: 'black' }}>
            <Button onClick={handleClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
    </div>
  )
}

export default TaskDetails
