import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, TextField, type SelectChangeEvent } from '@mui/material';
import { TTaskDetailsProps } from './TaskDetails';
import { taskSchema } from '../../Validations/TaskValidation';
import { useLists } from '../../context/ListsContext';
import { useTasks } from '../../context/TaskContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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

    const form = useForm<FormValues>({
        defaultValues: formValues,
        resolver: yupResolver(taskSchema)
      });

      const { register, handleSubmit, formState } = form;
      const { errors } = formState;
      const onSubmit = (data: FormValues) => {
        setCollectionOfTasks(prevObjects =>
            prevObjects.map(obj =>
                obj.id === taskId ? { ...obj, listId: formValues.listId, name: data.name, description: data.description } : obj
            )
        );
        handleClose()
      };

    const handleChangeStatus = (event: SelectChangeEvent<number>) => {
        const selectedListId = event.target.value as number;
        setFormValues(prevState => ({
            ...prevState,
            listId: selectedListId
        }))
    };

    return (
        <div data-testid='TaskDetailsEdit'>
        <Dialog open={isOpen} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <DialogTitle sx={{ color: 'white', backgroundColor: 'black' }}>
                    Edit Details
                </DialogTitle>
                <DialogContent sx={{ color: 'white', backgroundColor: 'black' }}>

                    <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <TextField
                        type='text'
                        id='name'
                        {...register('name')}
                        InputProps={{
                            style: { color: 'white' }
                          }}
                        name="name"
                        label="Name"
                        fullWidth
                        margin="normal"
                    />
                    <p style={{ color: 'red' }}>{errors.name?.message}</p>
                    </div>

                    <div className='form-control'>
                    <label htmlFor='description'>Description</label>
                    <TextField
                        type='descriptiontext'
                        id='description'
                        {...register('description')}
                        InputProps={{
                            style: { color: 'white' }
                        }}
                        name="description"
                        label="Description"
                        fullWidth
                        margin="normal"
                    />
                    <p style={{ color: 'red' }}>{errors.description?.message}</p>
                    </div>

                    <div className='form-control'>
                    <label htmlFor='status'>Status</label>
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
                    <p color='red'>{errors.listId?.message}</p>
                    </div>

                </DialogContent>
                <DialogActions sx={{ color: 'white', backgroundColor: 'black' }}>
                    <Button type="submit" color="primary">OK</Button>
                    <Button color="primary" onClick={handleClose}>Close</Button>
                </DialogActions>
            </form>
        </Dialog>
        </div>
    );
};

export default TaskDetailsEdit;
