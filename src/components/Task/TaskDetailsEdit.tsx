import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, type SelectChangeEvent } from '@mui/material'
import { TTaskDetailsProps } from './TaskDetails'
import { taskSchema } from '../../Validations/TaskValidation'
import { useLists } from '../../context/ListsContext'
import { useTasks } from '../../context/TaskContext'

interface FormValues {
    name: string
    description: string
    listId: number
}

const TaskDetailsEdit: React.FC<TTaskDetailsProps> = ({ isOpen, handleClose, name, description, listId, taskId }) => {
    const { collectionOfLists } = useLists();
    const { setCollectionOfTasks } = useTasks();
    
    const [formValues, setFormValues] = useState<FormValues>({
        name: name,
        description: description,
        listId: listId
    });

    const handleChangeStatus = (event: SelectChangeEvent<number>) => {
        const selectedListId = event.target.value as number;
        setFormValues(prevState => ({
            ...prevState,
            listId: selectedListId
        }))
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const isValid = await taskSchema.isValid(formValues)
        if(isValid) {
            setCollectionOfTasks(prevObjects =>
                prevObjects.map(obj =>
                    obj.id === taskId ? { ...obj, listId: formValues.listId, name: formValues.name, description: formValues.description } : obj
                )
            );
            handleClose()
        } else {
            alert("Invalid inputs!!!")
        }
    };

    return (
        <div data-testid='TaskDetailsEdit'>
        <Dialog open={isOpen} onClose={handleClose} >
            <form onSubmit={handleUpdate}>
                <DialogTitle sx={{ color: 'white', backgroundColor: 'black' }}>
                    Edit Details
                </DialogTitle>
                <DialogContent sx={{ color: 'white', backgroundColor: 'black' }}>
                <b>Name: </b>
                    <TextField
                        InputProps={{
                            style: { color: 'white' } // Set the text color to white
                          }}
                        name="name"
                        label="Name"
                        value={formValues.name}
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                    />

                <b>Description: </b>
                <TextField
                    InputProps={{
                        style: { color: 'white' } // Set the text color to white
                      }}
                    name="description"
                    label="Description"
                    value={formValues.description}
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                />
                   
                    <b>Status:</b>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formValues.listId}
                        label="Age"
                        sx={{ color: 'white' }}
                        onChange={handleChangeStatus}
                    >
                        {collectionOfLists.map((item) => (
                            <MenuItem
                                key={item.id}
                                color='white'
                                value={item.id}
                            >
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                    
                </DialogContent>
                <DialogActions sx={{ color: 'white', backgroundColor: 'black' }}>
                    <Button type="submit" color="primary">OK</Button>
                    <Button color="primary" onClick={handleClose}>Close</Button>
                </DialogActions>
            </form>
        </Dialog>
        </div>
    )
}

export default TaskDetailsEdit
